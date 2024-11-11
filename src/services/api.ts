import axios from 'axios';

const api = process.env.NEXT_PUBLIC_APP_API;

export const http = axios.create({
  baseURL: api,
  timeout: 30000,
});
