'use client';

import Contas from '@/components/Contas/Contas';
import { http } from '@/services';
import { Box, Cell, Container, Row, Table, Tabs, Title } from '@/styles';
import { ViaCep } from '@/types';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Home() {
  const url = 'http://viacep.com.br/ws/01001000/json/';

  const [data, setData] = useState<ViaCep>();
  const [tab, setTab] = useState<Number>(0);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      setError('Erro ao buscar dados da API');
    }
  };

  useEffect(() => {
    if (tab === 1) {
      fetchData();
    }
  }, [tab]);

  const handleTabChange = (type: number) => {
    setTab(type);
  };

  let content;

  if (tab === 0) {
    content = (
      <Table>
        <Row>
          <Title>NOME</Title>
          <Title>DESCRIÇÃO</Title>
        </Row>

        <Row>
          <Cell>1</Cell>
          <Cell>2</Cell>
        </Row>
        <Row>
          <Cell>3</Cell>
          <Cell>4</Cell>
        </Row>
      </Table>
    );
  } else if (tab === 1) {
    content = (
      <div>
        {error ? (
          <p>{error}</p>
        ) : data ? (
          <ul
            style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
          >
            <li>CEP: {data.cep}</li>
            <li>LOGRADOURO: {data.logradouro}</li>
            <li>COMPLEMENTO: {data.complemento}</li>
            <li>UNIDADE: {data.unidade}</li>
            <li>BAIRRO: {data.bairro}</li>
            <li>LOCALIDADE: {data.localidade}</li>
            <li>UF: {data.uf}</li>
            <li> ESTADO: {data.estado}</li>
            <li>REGIÃO: {data.regiao}</li>
            <li>IBGE: {data.ibge}</li>
            <li>GIA: {data.gia}</li>
            <li>DDD: {data.ddd}</li>
            <li>SIAFE: {data.siafi}</li>
          </ul>
        ) : (
          <p>Carregando dados...</p>
        )}
      </div>
    );
  } else {
    content = <Contas />;
  }

  return (
    <Container>
      <h1>Desafio Sebrae</h1>

      <Tabs>
        <Box isActive={tab === 0} onClick={() => handleTabChange(0)}>
          Tabela Responsiva
        </Box>
        <Box isActive={tab === 1} onClick={() => handleTabChange(1)}>
          Via CEP
        </Box>
        <Box isActive={tab === 2} onClick={() => handleTabChange(2)}>
          CRUD
        </Box>
      </Tabs>
      {content}
    </Container>
  );
}
