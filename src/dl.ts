import { f } from './get';
import { TikTokResponse, SpotifyResponse, XnxxResponse,
  DownloadResponse } from './types';

/**
 * Download audio in MP3 format using ER-MP3 endpoint.
 *
 * @param u - The URL of the video/audio source to be converted to MP3.
 * @returns The response data containing download links and metadata.
 *
 * @example
 * ```ts
 * const result = await ermp3("https://youtube.com/watch?v=xxxx");
 * console.log(result.audioUrl);
 * ```
 */
export async function ermp3(u: string): Promise < DownloadResponse > {
  const data = await f(`/dl/ermp3?u=${encodeURIComponent(u)}`);
  return data as DownloadResponse;
}

/**
 * Download video in MP4 format using ER-MP4 endpoint.
 *
 * @param u - The URL of the video source to be downloaded as MP4.
 * @returns The response data containing download links and metadata.
 *
 * @example
 * ```ts
 * const result = await ermp4("https://youtube.com/watch?v=xxxx");
 * console.log(result.videoUrl);
 * ```
 */
export async function ermp4(u: string): Promise < DownloadResponse > {
  const data = await f(`/dl/ermp4?u=${encodeURIComponent(u)}`);
  return data as DownloadResponse;
}

/**
 * Download TikTok video without watermark using TikTok Downloader endpoint.
 *
 * @param u - The TikTok video URL.
 * @returns The response data including video URL and info.
 *
 * @example
 * ```ts
 * const result = await ttdl("https://www.tiktok.com/@user/video/12345");
 * console.log(result); // fallback json
 * ```
 */
export async function ttdl(u: string): Promise < TikTokResponse > {
  const data = await f(`/dl/ttdl?u=${encodeURIComponent(u)}`);
  return data as TikTokResponse;
}

/**
 * Get content 18+ from xnxx service
 * @param t - the given text to search ur need
 * @returns the response data json
 */
export async function xnxx(t: string): Promise < XnxxResponse > {
  const data = await f(`/dl/xnxx?t=${encodeURIComponent(t)}`);
  return data as XnxxResponse;
}

/**
 * Download spotify from 'u' input
 * @param u - The given url spotify to get downloaded
 * @returns Fallback response data json
 */
export async function spotify(u: string): Promise < SpotifyResponse > {
  const data = await f(`/dl/spotify?u=${encodeURIComponent(u)}`);
  return data as SpotifyResponse;
}