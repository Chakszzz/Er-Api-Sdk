import { f } from "./get";
import { SearchResponse } from "./types";

/**
 * Search image on google
 * @param query - The image want to search (eg, image sasuke)
 * @returns The data image result
 */
export async function GoogleImage(query: string): Promise<SearchResponse> {
  const data = await f<SearchResponse>(`/search/googleimg?t=${encodeURIComponent(t)}`);
  return data as SearchResponse;
}