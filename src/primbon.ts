import { f } from "./get";
import { PrimbonResponse } from "./types";

/**
 * Get the meaning of a name according to Indonesian primbon tradition.
 * @param t - The name to analyze
 * @returns The analysis result
 */
export async function artinama(t: string): Promise<PrimbonResponse> {
  const data = await f<PrimbonResponse>(`/get/artinama?t=${encodeURIComponent(t)}`);
  return data as PrimbonResponse;
}

/**
 * Analyze a lucky number according to Indonesian numerology.
 * @param n - The number to analyze
 * @returns The analysis result
 */
export async function nomorhoki(n: number): Promise<PrimbonResponse> {
  const data = await f<PrimbonResponse>(`/get/nomorhoki?n=${encodeURIComponent(n)}`);
  return data as PrimbonResponse;
}
