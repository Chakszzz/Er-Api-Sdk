import dotenv from "dotenv";
dotenv.config();

const apiKeys: Record < string, string > = {
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
  hf: process.env.HF_API_KEY || ""
};

export let baseUrl = process.env.ERAPI_BASE_URL || "https://er-api.biz.id";

export function setApiKey(provider: string, key: string) {
  apiKeys[provider] = key;
}

export function getApiKey(provider: string): string | undefined {
  return apiKeys[provider];
}

export function setBaseUrl(url: string) {
  baseUrl = url;
}

export const allowedProviders = Object.keys(apiKeys);