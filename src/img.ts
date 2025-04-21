import axios from 'axios';
import { baseUrl } from './config';

/**
 * Fetches an image from the API based on the given endpoint and text prompt
 * @param endpoint - API endpoint (e.g., 'brat', 'generate', 'text2img')
 * @param prompt - Text prompt for image generation
 * @returns Promise resolving to image Buffer
 * @throws Will throw error if request fails
 */
async function fetchImage(endpoint: string, prompt: string): Promise<Buffer> {
  if (!prompt || typeof prompt !== 'string') {
    throw new Error('Prompt must be a non-empty string');
  }

  const url = `${baseUrl}/get/${endpoint}?t=${encodeURIComponent(prompt)}`;
  const response = await axios.get(url, {
    responseType: 'arraybuffer',
    timeout: 10000, // 10 seconds timeout
  });

  return Buffer.from(response.data);
}

/**
 * Get an image from Brat AI
 * @param prompt - Text prompt for the image
 * @returns Promise resolving to image Buffer
 */
export async function brat(prompt: string): Promise<Buffer> {
  return fetchImage('brat', prompt);
}

/**
 * Generate an image from text prompt
 * @param prompt - Text prompt for image generation
 * @returns Promise resolving to image Buffer
 */
export async function generate(prompt: string): Promise<Buffer> {
  return fetchImage('generate', prompt);
}

/**
 * Convert text to image
 * @param prompt - Text prompt for image generation
 * @returns Promise resolving to image Buffer
 */
export async function text2img(prompt: string): Promise<Buffer> {
  return fetchImage('text2img', prompt);
}
