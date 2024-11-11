import { GetViaCep } from '@/services';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { afterEach, describe, it } from 'node:test';

const mock = new MockAdapter(axios);

describe('fetchCep', () => {
  afterEach(() => {
    mock.reset();
  });

  it('deve retornar dados de endereço para um CEP válido', async () => {
    const cep = '01001000';
    const mockData = {
      cep: '01001-000',
      logradouro: 'Praça da Sé',
      complemento: 'lado ímpar',
      bairro: 'Sé',
      localidade: 'São Paulo',
      uf: 'SP',
      ibge: '3550308',
      gia: '1004',
      ddd: '11',
      siafi: '7107',
    };

    mock.onGet(`http://viacep.com.br/ws/${cep}/json/`).reply(200, mockData);

    const data = await GetViaCep(cep);

    data.toEqual(mockData);
  });

  it('deve lançar um erro para um CEP inválido', async () => {
    const cep = '00000000';

    // Configura o mock para retornar um erro 400 para o CEP inválido
    mock.onGet(`http://viacep.com.br/ws/${cep}/json/`).reply(400);

    await expect(GetViaCep(cep)).rejects.toThrow();
  });
});
