import { f } from './get';

/**
 * Get the meaning of a name according to Indonesian primbon tradition.
 * @param t - The name to analyze
 * @returns The analysis result
 */
export async function artinama(t: string): Promise<any> {
  return await f(`/get/artinama?t=${encodeURIComponent(t)}`);
}

/**
 * Analyze a lucky number according to Indonesian numerology.
 * @param n - The number to analyze
 * @returns The analysis result
 */
export async function nomorhoki(n: number): Promise<any> {
  return await f(`/get/nomorhoki?n=${encodeURIComponent(n)}`);
}
