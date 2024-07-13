import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

const ACCESS_KEY = "qz_oKJwZpo3COUV3FvPGVWR9rLo7Tof8kbJXhmvCS2U";

export interface UnsplashPhoto {
  id: string;
  description: string | null;
  alt_description: string | undefined;
  urls: {
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  user: {
    name: string;
    username: string;
  };
  likes?: number;
}

export interface UnsplashAPIResponse {
  results: UnsplashPhoto[];
  total: number;
  total_pages: number;
}

export const unsplashAPI = async (
  searchQuery: string,
  page: number
): Promise<UnsplashAPIResponse> => {
  const { data } = await axios.get<UnsplashAPIResponse>("/search/photos", {
    params: {
      query: searchQuery,
      per_page: 12,
      page,
    },
    headers: {
      Authorization: `Client-ID ${ACCESS_KEY}`,
    },
  });
  return data;
};
