import axios from 'axios';
import { http } from './api';

export const GetViaCep = async (cep: string) => {
  const url = `http://viacep.com.br/ws/${cep}/json/`;
  const response = await axios.get(url);
  return response.data;
};
