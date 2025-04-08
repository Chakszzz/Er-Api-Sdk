[**ER-API SDK Documentation v1.0.0**](../README.md)

***

[ER-API SDK Documentation](../globals.md) / ermp3

# Function: ermp3()

> **ermp3**(`u`): `Promise`\<`any`\>

Defined in: [dl.ts:16](https://github.com/ErBots/Er-Api-Sdk/blob/d22ccb9660609171ce2e445efde8af74d36b3c66/src/dl.ts#L16)

Download audio in MP3 format using ER-MP3 endpoint.

## Parameters

### u

`string`

The URL of the video/audio source to be converted to MP3.

## Returns

`Promise`\<`any`\>

The response data containing download links and metadata.

## Example

```ts
const result = await ermp3("https://youtube.com/watch?v=xxxx");
console.log(result.audioUrl);
```
