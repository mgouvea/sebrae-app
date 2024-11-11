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
          <pre>{JSON.stringify(data, null, 2)}</pre>
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
