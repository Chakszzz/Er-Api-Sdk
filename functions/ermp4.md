[**ER-API SDK Documentation v1.0.0**](../README.md)

***

[ER-API SDK Documentation](../globals.md) / ermp4

# Function: ermp4()

> **ermp4**(`u`): `Promise`\<`any`\>

Defined in: [dl.ts:32](https://github.com/ErBots/Er-Api-Sdk/blob/d22ccb9660609171ce2e445efde8af74d36b3c66/src/dl.ts#L32)

Download video in MP4 format using ER-MP4 endpoint.

## Parameters

### u

`string`

The URL of the video source to be downloaded as MP4.

## Returns

`Promise`\<`any`\>

The response data containing download links and metadata.

## Example

```ts
const result = await ermp4("https://youtube.com/watch?v=xxxx");
console.log(result.videoUrl);
```
