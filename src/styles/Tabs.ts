import { GridProps } from '@/types';
import styled from 'styled-components';

export const Tabs = styled.div`
  display: flex;
  margin: 2rem 0;
  height: 2rem;
  gap: 0.5rem;
`;

export const Box = styled.div<GridProps>`
  display: Flex;

  width: 100%;
  border-radius: 8px;

  align-items: center;
  justify-content: center;
  cursor: pointer;

  background: ${(props) => (props.isActive ? '#005bb2' : '#cbc7c1')};
  color: white;
  font-weight: bold;

  border: 1px solid green;
`;
