import { f } from "./get";
import { PrimbonResponse, ErApiResponse } from "./types";

/**
 * Get the meaning of a name according to Indonesian primbon tradition.
 * @param name - The name to analyze
 * @returns The analysis result
 */
export async function artinama(name: string): Promise<PrimbonResponse> {
  const data = await f<PrimbonResponse>(`/get/artinama?t=${encodeURIComponent(name)}`);
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

/**
 * Get description of your khodam
 * @param name - The given name
 * @returns The descriptive result
 */
export async function Khodam(name: number): Promise<ErApiResponse> {
  const data = await f<ErApiResponse>(`/get/nomorhoki?t=${encodeURIComponent(name)}`);
  return data as ErApiResponse;
}
