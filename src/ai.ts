import { f } from "./get";
import { AIResponse, ErAiResponse, LuminaiResponse } from "./types";

/**
 * Get response from Muslim Ai
 * @param text - The text given to ai
 * @returns The result
 */
export async function MuslimAi(text: string): Promise<AIResponse> {
  const data = await f<AIResponse>(`/muslimai?t=${encodeURIComponent(text)}`);
  return data as AIResponse;
}

/**
 * Get response from Meta Ai
 * @param text - The text given to ai
 * @returns The result
 */
export async function MetaAi(text: string): Promise<AIResponse> {
  const data = await f<AIResponse>(`/get/metaai?t=${encodeURIComponent(text)}`);
  return data as AIResponse;
}

/**
 * Get response from Er Ai
 * @param text - The text given to ai
 * @returns The result
 */
export async function ErAi(text: string): Promise<ErAiResponse> {
  const data = await f<ErAiResponse>(`/get/erai?t=${encodeURIComponent(text)}`);
  return data as ErAiResponse;
}

/**
 * Get response from Lumin Ai
 * @param text - The text given to ai
 * @returns The result
 */
export async function LuminAi(text: string): Promise<LuminaiResponse> {
  const data = await f<LuminaiResponse>(`/luminai?text=${encodeURIComponent(text)}`);
  return data as LuminaiResponse;
}