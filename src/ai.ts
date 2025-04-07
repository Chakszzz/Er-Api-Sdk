import axios from "axios";
import { baseUrl, getApiKey, allowedProviders } from "./config";
import { MissingApiKeyError, InvalidProviderError } from "./errors";

/**
 * Generate AI response using any supported provider
 * @param provider - Name of AI provider (e.g., deepseek, openai)
 * @param t - Input prompt
 * @param model - Optional model name
 */
export async function generateAI(provider: string, t: string, model ? : string) {
  if (!allowedProviders.includes(provider)) {
    throw new InvalidProviderError(provider);
  }
  
  const key = getApiKey(provider);
  if (!key) throw new MissingApiKeyError(provider);
  
  const url = `${baseUrl}/ai/${provider}?t=${encodeURIComponent(t)}&key=${key}${model ? `&model=${model}` : ""}`;
  const res = await axios.get(url);
  return res.data;
}

export const deepseek = (t: string, model ? : string) => generateAI("deepseek", t, model);
export const openai = (t: string, model ? : string) => generateAI("openai", t, model);
export const cohere = (t: string, model ? : string) => generateAI("cohere", t, model);
export const gemini = (t: string, model ? : string) => generateAI("gemini", t, model);
export const anthropic = (t: string, model ? : string) => generateAI("anthropic", t, model);
export const mistral = (t: string, model ? : string) => generateAI("mistral", t, model);
export const perplexity = (t: string, model ? : string) => generateAI("perplexity", t, model);
export const nlpc = (t: string, model ? : string) => generateAI("nlpc", t, model);
export const groq = (t: string, model ? : string) => generateAI("groq", t, model);
export const huggingface = (t: string, model ? : string) => generateAI("hf", t, model);
export const together = (t: string, model ? : string) => generateAI("together", t, model);