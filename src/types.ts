export type ModelParams = {
  system ? : string;
  temperature ? : number;
  max_tokens ? : number;
  maxtokens ? : number;
  top_p ? : number;
  frequency_penalty ? : number;
  presence_penalty ? : number;
};

export interface ApiResponse < T = unknown > {
  success: boolean;
  status ? : number;
  error ? : string;
  data ? : T;
  message ? : string;
  request ? : unknown;
}

export interface ErApiResponse {
  status: number;
  from: string;
  hasil ? : string;
  data ? : string[];
}

export interface RawToolResponse {
  status: number;
  from: string;
  hasil: {
    original: string;
    raw: string;
    status: string;
  };
}

export interface TikTokResponse {
  status: number;
  hasil: {
    status: boolean;
    taken_at: string;
    region: string;
    id: string;
    data: Array < {
      type: string;
      url: string;
    } > ;
    song_info: {
      author: string;
      album: string | null;
      url: string;
    };
    stats: {
      views: string;
      likes: string;
      comment: string;
      share: string;
      download: string;
    };
    author: {
      nickname: string;
      fullname: string;
      avatar: string;
    };
    response_time: string;
    api_license: string;
  };
  from: string;
}

export interface XnxxResponse {
  status: number;
  hasil: {
    judul: string;
    dl_link: string;
    rating: string;
    penonton: string;
    likes: string;
  };
  from: string;
}

export interface SpotifyResponse {
  status: number;
  hasil: Array < {
    judul: string;
    link: string;
    thumb: string;
  } > ;
  from: string;
}

export interface PrimbonResponse {
  status: number;
  message: string;
  hasil: Record < string,
  string | number | boolean > ;
}

export interface ModelResponse {
  content: string;
  model: string;
  usage ? : {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
  [key: string]: unknown;
}

export interface StreamChunk {
  content ? : string;
  done ? : boolean;
  error ? : string;
  [key: string]: unknown;
}

export interface DownloadResponse {
  status: number;
  hasil: DownloadItem[];
  from: string;
}

interface DownloadItem {
  judul: string;
  thumbnail ? : string;
  link_download ? : string;
  kualitas ? : string;
}

export interface SearchResponse {
  status: number;
  hasil: (string | SearchItem | WallpaperItem | AppItem)[];
  from: string;
}

interface WallpaperItem {
  title: string;
  type: string;
  source: string;
  image: string | string[];
}

interface AppItem {
  judul ? : string;
  title ? : string;
  icon ? : string;
  link ? : string;
  rating ? : string;
  sumber ? : string;
  image ? : string | string[];
}

type SearchItem = AppItem | WallpaperItem;

export interface CodeResponse {
  status: number;
  run: string[];
  output: string;
  from: string;
}

export interface LuminaiResponse {
  status: number;
  creator: string;
  data: {
    result: string;
  }
}

export interface ErAiResponse {
  status: number;
  from: string;
  message: string;
}

export interface AIResponse {
  status: number;
  hasil: string;
  from: string;
}

export interface ModelInfo {
  id: string;
  name: string;
  provider: string;
  pricing ? : {
    prompt: number;
    completion: number;
  };
  context_length ? : number;
  [key: string]: unknown;
}

export interface ModelsResponse {
  models: ModelInfo[];
  [key: string]: unknown;
}

export type GameEndpoint = |
  'tebakkata' |
  'tebakkabupaten' |
  'asahotak' |
  'tebaklirik' |
  'caklontong' |
  'family100' |
  'siapakahaku' |
  'susunkata' |
  'tebakbendera' |
  'tebakgambar' |
  'tebakkimia' |
  'tebaktebakan' |
  'tekateki' |
  'truth' |
  'dare';