import axios from "axios";
import { baseUrl } from "./config";

/**
 * Fetch image buffer from Brat endpoint.
 * @param t - Text input for Brat
 * @returns Image buffer
 */
export async function brat(t: string): Promise < Buffer > {
  const url = `${baseUrl}/get/brat?t=${encodeURIComponent(t)}`;
  const res = await axios.get(url, { responseType: "arraybuffer" });
  return Buffer.from(res.data);
}