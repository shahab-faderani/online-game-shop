import axios, { AxiosRequestConfig } from "axios";

const axiosINstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1b0f4e193ed14e81913d8f54526de649",
  },
});

export interface FetchResponse<T> {
  count: number;
  results: T[];
  next: string | null;
  previous: string | null;
}

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = async (config: AxiosRequestConfig = {}) => {
    return axiosINstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  get = async (id: string) => {
    return axiosINstance
      .get<T>(`${this.endpoint}/${id}`)
      .then((res) => res.data);
  };
}

export default APIClient;
