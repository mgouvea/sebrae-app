import { ContasActionContainer, ContasContainer } from '@/styles';
import { useEffect, useState } from 'react';
import { ButtonComponent } from '../Button/Button';

const getLocalData = () => {
  const data = localStorage.getItem('contas');
  try {
    const parseData = data ? JSON.parse(data) : [];
    return Array.isArray(parseData) ? parseData : [];
  } catch (error) {
    return [];
  }
};

export default function Contas() {
  const [contas, setContas] = useState(() => getLocalData());
  const [nome, setNome] = useState<string>('');
  const [descricao, setDescricao] = useState<string>('');
  const [editIndex, setEditIndex] = useState<number | null>(null);

  useEffect(() => {
    localStorage.setItem('contas', JSON.stringify(contas));
  }, [contas]);

  const handleClick = () => {
    const novaConta = { nome, descricao };

    if (editIndex !== null) {
      const contasAtualizadas = [...contas];
      contasAtualizadas[editIndex] = novaConta;
      setContas(contasAtualizadas);
      setEditIndex(null);
    } else {
      setContas([...contas, novaConta]);
    }

    setNome('');
    setDescricao('');
  };

  const handleEdit = (index: number) => {
    const conta = contas[index];
    setNome(conta.nome);
    setDescricao(conta.descricao);
    setEditIndex(index);
  };

  const handleDelete = (index: number) => {
    const contasAtualizadas = contas.filter((_: any, i: number) => i !== index);
    setContas(contasAtualizadas);
  };

  return (
    <>
      <ContasContainer>
        <h3>Contas</h3>

        <form style={{ display: 'flex', gap: '1rem' }}>
          <input
            required
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            style={{ width: '300px' }}
          />
          <input
            required
            type="text"
            placeholder="Descrição"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            style={{ width: '300px' }}
          />
          <ButtonComponent
            onClick={handleClick}
            color="#fff"
            background="#005bb2"
            size="medium"
            padding="5px"
            fontSize="medium"
          >
            Salvar
          </ButtonComponent>
        </form>
      </ContasContainer>
      <ContasActionContainer>
        <ul>
          {contas?.map((conta: any, index: number) => (
            <li key={index}>
              <div
                style={{ display: 'flex', margin: '2rem 1rem', gap: '1rem' }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                  }}
                >
                  <strong>Nome:</strong>
                  <p>{conta.nome}</p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                  }}
                >
                  <strong>Descrição:</strong>
                  <p>{conta.descricao}</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <ButtonComponent
                  onClick={() => handleEdit(index)}
                  color="#fff"
                  background="#f77500"
                  size="medium"
                  padding="5px"
                  fontSize="medium"
                >
                  Editar
                </ButtonComponent>
                <ButtonComponent
                  onClick={() => handleDelete(index)}
                  color="#fff"
                  background="#f70000"
                  size="medium"
                  padding="5px"
                  fontSize="medium"
                >
                  Deletar
                </ButtonComponent>
              </div>
            </li>
          ))}
        </ul>
      </ContasActionContainer>
    </>
  );
}
