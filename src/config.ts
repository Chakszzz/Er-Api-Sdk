import dotenv from 'dotenv';
dotenv.config();

// Default base URL with fallback
export let baseUrl = process.env.ERAPI_BASE_URL || 'https://er-api.biz.id';

// Store custom endpoints
export const customEndpoints: Record<string, string> = {};

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
