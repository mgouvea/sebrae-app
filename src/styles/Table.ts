import styled from 'styled-components';

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  display: flex;
  flex: 1;
  background: rgba(0, 91, 178, 0.8);
  /* border: 1px solid #ccc; */
  color: white;
  padding: 10px;
`;

export const Cell = styled.div`
  flex: 1;
  padding: 7px;
  border-bottom: 1px solid #ccc;
  box-sizing: border-box;
`;
