[**ER-API SDK Documentation v1.0.0**](../README.md)

***

[ER-API SDK Documentation](../globals.md) / er

# Variable: er

> `const` **er**: `object` = `ErApiSdk`

Defined in: [er.ts:42](https://github.com/ErBots/Er-Api-Sdk/blob/d22ccb9660609171ce2e445efde8af74d36b3c66/src/er.ts#L42)

## Type declaration

### ai

> **ai**: [`ai`](../ER-API-SDK-Documentation/namespaces/ai/README.md)

### anthropic()

> **anthropic**: (`t`, `model`?) => `Promise`\<`any`\> = `ai.anthropic`

#### Parameters

##### t

`string`

##### model?

`string`

#### Returns

`Promise`\<`any`\>

### brat()

> **brat**: (`prompt`) => `Promise`\<`Buffer`\<`ArrayBufferLike`\>\> = `img.brat`

Get an image from Brat AI

#### Parameters

##### prompt

`string`

Text prompt for the image

#### Returns

`Promise`\<`Buffer`\<`ArrayBufferLike`\>\>

Promise resolving to image Buffer

### cohere()

> **cohere**: (`t`, `model`?) => `Promise`\<`any`\> = `ai.cohere`

#### Parameters

##### t

`string`

##### model?

`string`

#### Returns

`Promise`\<`any`\>

### custom

> **custom**: `Record`\<`string`, (`params`?) => `Promise`\<`any`\>\>

### deepseek()

> **deepseek**: (`t`, `model`?) => `Promise`\<`any`\> = `ai.deepseek`

#### Parameters

##### t

`string`

##### model?

`string`

#### Returns

`Promise`\<`any`\>

### dl

> **dl**: [`dl`](../ER-API-SDK-Documentation/namespaces/dl/README.md)

### ermp3()

> **ermp3**: (`u`) => `Promise`\<`any`\> = `dl.ermp3`

Download audio in MP3 format using ER-MP3 endpoint.

#### Parameters

##### u

`string`

The URL of the video/audio source to be converted to MP3.

#### Returns

`Promise`\<`any`\>

The response data containing download links and metadata.

#### Example

```ts
const result = await ermp3("https://youtube.com/watch?v=xxxx");
console.log(result.audioUrl);
```

### ermp4()

> **ermp4**: (`u`) => `Promise`\<`any`\> = `dl.ermp4`

Download video in MP4 format using ER-MP4 endpoint.

#### Parameters

##### u

`string`

The URL of the video source to be downloaded as MP4.

#### Returns

`Promise`\<`any`\>

The response data containing download links and metadata.

#### Example

```ts
const result = await ermp4("https://youtube.com/watch?v=xxxx");
console.log(result.videoUrl);
```

### games

> **games**: [`games`](../ER-API-SDK-Documentation/namespaces/games/README.md)

### gemini()

> **gemini**: (`t`, `model`?) => `Promise`\<`any`\> = `ai.gemini`

#### Parameters

##### t

`string`

##### model?

`string`

#### Returns

`Promise`\<`any`\>

### generate()

> **generate**: (`prompt`) => `Promise`\<`Buffer`\<`ArrayBufferLike`\>\> = `img.generate`

Generate an image from text prompt

#### Parameters

##### prompt

`string`

Text prompt for image generation

#### Returns

`Promise`\<`Buffer`\<`ArrayBufferLike`\>\>

Promise resolving to image Buffer

### getBaseUrl()

> **getBaseUrl**: () => `string`

Get the current base URL

#### Returns

`string`

Current base URL

### getCustomEndpoints()

> **getCustomEndpoints**: () => `CustomEndpointMap`

Get all registered custom endpoints

#### Returns

`CustomEndpointMap`

Object with all custom endpoints

### groq()

> **groq**: (`t`, `model`?) => `Promise`\<`any`\> = `ai.groq`

#### Parameters

##### t

`string`

##### model?

`string`

#### Returns

`Promise`\<`any`\>

### huggingface()

> **huggingface**: (`t`, `model`?) => `Promise`\<`any`\> = `ai.huggingface`

#### Parameters

##### t

`string`

##### model?

`string`

#### Returns

`Promise`\<`any`\>

### img

> **img**: [`img`](../ER-API-SDK-Documentation/namespaces/img/README.md)

### mistral()

> **mistral**: (`t`, `model`?) => `Promise`\<`any`\> = `ai.mistral`

#### Parameters

##### t

`string`

##### model?

`string`

#### Returns

`Promise`\<`any`\>

### nlpc()

> **nlpc**: (`t`, `model`?) => `Promise`\<`any`\> = `ai.nlpc`

#### Parameters

##### t

`string`

##### model?

`string`

#### Returns

`Promise`\<`any`\>

### openai()

> **openai**: (`t`, `model`?) => `Promise`\<`any`\> = `ai.openai`

#### Parameters

##### t

`string`

##### model?

`string`

#### Returns

`Promise`\<`any`\>

### perplexity()

> **perplexity**: (`t`, `model`?) => `Promise`\<`any`\> = `ai.perplexity`

#### Parameters

##### t

`string`

##### model?

`string`

#### Returns

`Promise`\<`any`\>

### primbon

> **primbon**: [`primbon`](../ER-API-SDK-Documentation/namespaces/primbon/README.md)

### registerCustomEndpoint()

> **registerCustomEndpoint**: (`name`, `path`) => `void`

Register a custom endpoint that can be called with the custom method

#### Parameters

##### name

`string`

Name of the custom endpoint

##### path

`string`

Path to the endpoint (relative to baseUrl)

#### Returns

`void`

### setApiKey()

> **setApiKey**: (`provider`, `key`) => `void`

Set API key for a provider

#### Parameters

##### provider

`string`

Provider name (e.g., 'openai', 'deepseek')

##### key

`string`

API key for the provider

#### Returns

`void`

### setBaseUrl()

> **setBaseUrl**: (`url`) => `void`

Change the base URL for all API requests

#### Parameters

##### url

`string`

New base URL

#### Returns

`void`

### spotify()

> **spotify**: (`u`) => `Promise`\<`any`\> = `dl.spotify`

Download spotify from 'u' input

#### Parameters

##### u

`string`

The given url spotify to get downloaded

#### Returns

`Promise`\<`any`\>

Fallback response data json

### text2img()

> **text2img**: (`prompt`) => `Promise`\<`Buffer`\<`ArrayBufferLike`\>\> = `img.text2img`

Convert text to image

#### Parameters

##### prompt

`string`

Text prompt for image generation

#### Returns

`Promise`\<`Buffer`\<`ArrayBufferLike`\>\>

Promise resolving to image Buffer

### together()

> **together**: (`t`, `model`?) => `Promise`\<`any`\> = `ai.together`

#### Parameters

##### t

`string`

##### model?

`string`

#### Returns

`Promise`\<`any`\>

### ttdl()

> **ttdl**: (`u`) => `Promise`\<`any`\> = `dl.ttdl`

Download TikTok video without watermark using TikTok Downloader endpoint.

#### Parameters

##### u

`string`

The TikTok video URL.

#### Returns

`Promise`\<`any`\>

The response data including video URL and info.

#### Example

```ts
const result = await ttdl("https://www.tiktok.com/@user/video/12345");
console.log(result); // fallback json
```

### xnxx()

> **xnxx**: (`t`) => `Promise`\<`any`\> = `dl.xnxx`

Get content 18+ from xnxx service

#### Parameters

##### t

`string`

the given text to search ur need

#### Returns

`Promise`\<`any`\>

the response data json
