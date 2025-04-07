import axios from "axios";
import { baseUrl } from "./config";

type CustomEndpointMap = Record<string, string>;

// Load custom endpoints from environment variables
const loadCustomEndpoints = (): CustomEndpointMap => {
  const customEndpoints: CustomEndpointMap = {};
  
  if (typeof process !== 'undefined' && process.env) {
    // Look for environment variables with the ERAPI_CUSTOM_ENDPOINT_ prefix
    Object.keys(process.env).forEach(key => {
      if (key.startsWith('ERAPI_CUSTOM_ENDPOINT_')) {
        const endpointName = key.replace('ERAPI_CUSTOM_ENDPOINT_', '').toLowerCase();
        const endpointPath = process.env[key] as string;
        customEndpoints[endpointName] = endpointPath;
      }
    });
  }
  
  return customEndpoints;
};

// Store custom endpoints
const customEndpoints = loadCustomEndpoints();

/**
 * Register a custom endpoint that can be called with the custom method
 * @param name - Name of the custom endpoint
 * @param path - Path to the endpoint (relative to baseUrl)
 */
export function registerCustomEndpoint(name: string, path: string): void {
  customEndpoints[name.toLowerCase()] = path;
}

/**
 * Check if a custom endpoint exists
 * @param name - Name of the custom endpoint
 * @returns True if the endpoint exists
 */
export function hasCustomEndpoint(name: string): boolean {
  return !!customEndpoints[name.toLowerCase()];
}

/**
 * Get all registered custom endpoints
 * @returns Object with all custom endpoints
 */
export function getCustomEndpoints(): CustomEndpointMap {
  return { ...customEndpoints };
}

/**
 * Call a custom endpoint with parameters
 * @param name - Name of the custom endpoint to call
 * @param params - Object with query parameters
 * @returns Response data
 */
export async function callCustomEndpoint(name: string, params?: Record<string, any>): Promise<any> {
  const endpointName = name.toLowerCase();
  if (!customEndpoints[endpointName]) {
    throw new Error(`Custom endpoint "${name}" not found. Register it first with registerCustomEndpoint()`);
  }
  
  let url = `${baseUrl}${customEndpoints[endpointName]}`;
  
  // Add query parameters if provided
  if (params && Object.keys(params).length > 0) {
    const queryParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      queryParams.append(key, String(value));
    });
    url += `?${queryParams.toString()}`;
  }
  
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(`Error calling custom endpoint "${name}":`, error);
    throw error;
  }
}

// Dynamic proxy for easier custom endpoint access
export const custom = new Proxy({} as Record<string, (params?: Record<string, any>) => Promise<any>>, {
  get: (target, prop) => {
    if (typeof prop !== 'string') return undefined;
    
    return (params?: Record<string, any>) => {
      return callCustomEndpoint(prop, params);
    };
  }
});