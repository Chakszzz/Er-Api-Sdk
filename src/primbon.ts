import axios from "axios"
import { badeUrl } from "./config"
import { f } from "./get"

export async function artinama(t: string): Promise < any > {
  return await f(`/get/artinama?t=${encodeURIComponent(t)}`);
}

export async function nomorhoki(n: number): Promise < any > {
  return await f(`/get/nomorhoki?n=${encodeURIComponent(n)}`);
}