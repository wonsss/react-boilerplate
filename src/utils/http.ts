import Axios, { AxiosRequestConfig } from 'axios';

const axios = Axios.create();

export const http = {
  get: async function get<Response = unknown>(
    url: string,
    options?: AxiosRequestConfig,
  ) {
    const res = await axios.get<Response>(url, options);
    return res.data;
  },
};
