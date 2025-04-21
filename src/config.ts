import dotenv from "dotenv";
dotenv.config();

// Default base URL with fallback
export let baseUrl = process.env.ERAPI_BASE_URL || "https://er-api.biz.id";

// Store custom endpoints
export const customEndpoints: Record<string, string> = {};

/**
 * Set API key for a provider
 * @param provider - Provider name (e.g., 'openai', 'deepseek')
 * @param key - API key for the provider
 */
export function setApiKey(provider: string, key: string) {
  apiKeys[provider] = key;
}

/**
 * Change the base URL for all API requests
 * @param url - New base URL
 */
export function setBaseUrl(url: string) {
  baseUrl = url;
}

/**
 * Get the current base URL
 * @returns Current base URL
 */
export function getBaseUrl(): string {
  return baseUrl;
}