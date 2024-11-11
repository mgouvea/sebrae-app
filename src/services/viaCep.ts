import { http } from './api';

export const GetViaCep = async () => {
  return (await http.get('ws/01001000/json/')).data;
};
