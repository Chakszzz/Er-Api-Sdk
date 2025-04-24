import { f } from "./get";
import { CodeResponse } from "./types";

/**
 * Execute any code language
 * @param code - The code to execute
 * @param lang - The programming language
 * @returns The data result
 */
export async function Runcode(code: string, lang: string): Promise<CodeResponse> {
  if (!code) {
    throw new Error("Please fill the code");
  }
  if (!lang) {
    throw new Error("Please specify the lang code")
  }
  
  const data = await f<CodeResponse>(`/code/runner?c=${encodeURIComponent(code)}&bhs=${encodeURIComponent(lang)}`);
  return data as CodeResponse;
}