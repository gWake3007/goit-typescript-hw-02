import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

const ACCESS_KEY = "qz_oKJwZpo3COUV3FvPGVWR9rLo7Tof8kbJXhmvCS2U";

export const unsplashAPI = async (searchQuery, page) => {
  const { data } = await axios.get("/search/photos", {
    params: {
      query: searchQuery,
      per_page: 12,
      page,
    },
    headers: {
      Authorization: `Client-ID ${ACCESS_KEY}`,
    },
  });
  return data.results;
};
