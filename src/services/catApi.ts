import type { Cat } from "@/types";
import axios from "axios";

const API_KEY =
  "live_TF1My6bEeOTxze1IgCkAZPaS4siEDBF86q5PkIcSQnEtKDuOAC6xjPBmFpAmmvwy";

// Create axios instance with base URL for The Dog API
const api = axios.create({
  baseURL: "https://api.thecatapi.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    if (API_KEY) {
      config.headers["x-api-key"] = API_KEY;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);

const catApi = {
  getCats: async ({
    page = 0,
    limit = 20,
    order = "ASC",
  }: {
    page?: number;
    limit?: number;
    order?: "RANDOM" | "ASC" | "DESC";
  } = {}): Promise<Array<Cat>> => {
    const response = await api.get<Array<Cat>>("/v1/images/search", {
      params: {
        page,
        limit,
        order,
        has_breeds: 1,
      },
    });
    return response.data;
  },
};

export default catApi;
