import { f } from "./get";
import { SearchResponse } from "./types";

/**
 * Search image on google
 * @param query - The image want to search (eg, image sasuke)
 * @returns The data image result
 */
export async function GoogleImage(query: string): Promise<SearchResponse> {
  const data = await f<SearchResponse>(`/search/googleimg?t=${encodeURIComponent(query)}`);
  return data as SearchResponse;
}

/**
 * Search Mods APK on HappyMod
 * @param query - The given app
 * @returns The result
 */
export async function HappyMods(query: string): Promise<SearchResponse> {
  const data = await f<SearchResponse>(`/search/happymood?t=${encodeURIComponent(query)}`);
  return data as SearchResponse;
}

/**
 * Search anything on Media Wiki
 * @param query - The given search
 * @returns The data result
 */
export async function MediaWiki(query: string): Promise<SearchResponse> {
  const data = await f<SearchResponse>(`/search/wiki?t=${encodeURIComponent(query)}`);
  return data as SearchResponse;
}

/**
 * Search wallpaper 
 * @param query - The wallpaper want to search (eg, cat)
 * @returns The data result
 */
export async function Wallpaper(query: string): Promise<SearchResponse> {
  const data = await f<SearchResponse>(`/search/wallpaper?t=${encodeURIComponent(query)}`);
  return data as SearchResponse;
}