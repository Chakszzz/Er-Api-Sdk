[**ER-API SDK Documentation v1.0.0**](../../../../README.md)

***

[ER-API SDK Documentation](../../../../globals.md) / [dl](../README.md) / ttdl

# Function: ttdl()

> **ttdl**(`u`): `Promise`\<`any`\>

Defined in: [dl.ts:48](https://github.com/ErBots/Er-Api-Sdk/blob/d22ccb9660609171ce2e445efde8af74d36b3c66/src/dl.ts#L48)

Download TikTok video without watermark using TikTok Downloader endpoint.

## Parameters

### u

`string`

The TikTok video URL.

## Returns

`Promise`\<`any`\>

The response data including video URL and info.

## Example

```ts
const result = await ttdl("https://www.tiktok.com/@user/video/12345");
console.log(result); // fallback json
```
