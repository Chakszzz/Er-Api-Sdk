import { f } from "./get";
import { RawToolResponse } from "./types";

/**
 * Get raw GitHub link from a regular GitHub file URL
 * @param url - The GitHub file URL
 * @returns Object containing original and raw URLs
 */
export async function Raw(url: string): Promise<RawToolResponse> {
  const encodedUrl = encodeURIComponent(url);
  const data = await f<RawToolResponse>(`/tools/raw?u=${encodedUrl}`);
  return data as RawToolResponse;
}