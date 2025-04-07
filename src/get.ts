import axios, { AxiosError } from "axios";
import { baseUrl } from "./config";

/**
 * Helper Fetch to the API endpoints with detailed error handling
 * @param path - Path to the API endpoint
 * @returns Response data or error object
 */
export async function f(path: string): Promise<any> {
  try {
    const res = await axios.get(`${baseUrl}${path}`);
    return res.data;
  } catch (err) {
    const error = err as AxiosError;
    
    if (error.response) {
      // Server responded with a status code outside the 2xx range
      console.error("[API ERROR] Response error:", {
        url: `${baseUrl}${path}`,
        status: error.response.status,
        data: error.response.data,
        headers: error.response.headers,
      });
      
      return {
        success: false,
        status: error.response.status,
        error: "Server responded with an error",
        data: error.response.data,
      };
    } else if (error.request) {
      // Request was made but no response received
      console.error("[API ERROR] No response received:", {
        url: `${baseUrl}${path}`,
        request: error.request,
      });
      
      return {
        success: false,
        error: "No response received from server",
        request: error.request,
      };
    } else {
      // Something else happened while setting up the request
      console.error("[API ERROR] Request setup error:", {
        url: `${baseUrl}${path}`,
        message: error.message,
      });
      
      return {
        success: false,
        error: "Request setup error",
        message: error.message,
      };
    }
  }
}