import axios from "axios";
import { baseUrl, getBaseUrl } from "./config";

type CustomEndpointMap = Record<string, string>;

// Load custom endpoints from environment variables
const loadCustomEndpoints = (): CustomEndpointMap => {
  const customEndpoints: CustomEndpointMap = {};

  if (typeof process !== "undefined" && process.env) {
    // Look for environment variables with the ERAPI_CUSTOM_ENDPOINT_ prefix
    Object.keys(process.env).forEach((key) => {
      if (key.startsWith("ERAPI_CUSTOM_ENDPOINT_")) {
        const endpointName = key
          .replace("ERAPI_CUSTOM_ENDPOINT_", "")
          .toLowerCase();
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
  // Ensure the path starts with a forward slash
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  customEndpoints[name.toLowerCase()] = normalizedPath;
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

// Only showing the fixed URL building part
const buildUrl = (endpointPath: string, currentBaseUrl: string): string => {
  // Remove trailing slash from baseUrl if present
  const baseWithoutTrailingSlash = currentBaseUrl.endsWith("/")
    ? currentBaseUrl.slice(0, -1)
    : currentBaseUrl;

  // Ensure path starts with slash
  const pathWithLeadingSlash = endpointPath.startsWith("/")
    ? endpointPath
    : `/${endpointPath}`;

  return `${baseWithoutTrailingSlash}${pathWithLeadingSlash}`;
};

/**
 * Call a custom endpoint with parameters
 * @param name - Name of the custom endpoint to call
 * @param params - Object with query parameters
 * @returns Response data
 */
export async function callCustomEndpoint(
  name: string,
  params?: Record<string, any>,
): Promise<any> {
  const endpointName = name.toLowerCase();
  if (!customEndpoints[endpointName]) {
    throw new Error(
      `Custom endpoint "${name}" not found. Register it first with registerCustomEndpoint()`,
    );
  }

  // Always get the current baseUrl in case it was changed
  const currentBaseUrl = getBaseUrl();
  const endpointPath = customEndpoints[endpointName];

  const url = buildUrl(endpointPath, currentBaseUrl);

  // Add query parameters if provided
  const finalUrl =
    params && Object.keys(params).length > 0
      ? `${url}${url.includes("?") ? "&" : "?"}${new URLSearchParams(
          Object.entries(params).map(([key, value]) => [key, String(value)]),
        ).toString()}`
      : url;

  try {
    const response = await axios.get(finalUrl);
    return response.data;
  } catch (error) {
    console.error(`Error calling custom endpoint "${name}":`, error);
    throw error;
  }
}

// Dynamic proxy for easier custom endpoint access
export const custom = new Proxy(
  {} as Record<string, (params?: Record<string, any>) => Promise<any>>,
  {
    get: (target, prop) => {
      if (typeof prop !== "string") return undefined;

      return (params?: Record<string, any>) => {
        return callCustomEndpoint(prop, params);
      };
    },
  },
);
