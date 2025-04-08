import dotenv from "dotenv";
dotenv.config();

// API keys for different providers
const apiKeys: Record<string, string> = {
  deepseek: process.env.DEEPSEEK_API_KEY || "",
  openai: process.env.OPENAI_API_KEY || "",
  anthropic: process.env.ANTHROPIC_API_KEY || "",
  gemini: process.env.GEMINI_API_KEY || "",
  mistral: process.env.MISTRAL_API_KEY || "",
  perplexity: process.env.PERPLEXITY_API_KEY || "",
  cohere: process.env.COHERE_API_KEY || "",
  groq: process.env.GROQ_API_KEY || "",
  together: process.env.TOGETHER_API_KEY || "",
  nlpc: process.env.NLPC_API_KEY || "",
  hf: process.env.HF_API_KEY || "",
};

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
 * Get API key for a provider
 * @param provider - Provider name
 * @returns The API key or undefined if not set
 */
export function getApiKey(provider: string): string | undefined {
  return apiKeys[provider];
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

// List of allowed providers
export const allowedProviders = Object.keys(apiKeys);
