export interface AIOptions {
  t: string;
  model?: string;
  [key: string]: any;
}

export interface TikTokResponse {
  status: number;
  hasil: {
    status: boolean;
    taken_at: string;
    region: string;
    id: string;
    data: Array<{
      type: string;
      url: string;
    }>;
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
  hasil: Array<{
    judul: string;
    link: string;
    thumb: string;
  }>;
  from: string;
}
