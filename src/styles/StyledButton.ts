import { ButtonProps } from '@/types';
import styled from 'styled-components';

export const StyledButton = styled.button<ButtonProps>`
  padding: ${(props) =>
    props.fontSize === 'large' ? '12px 24px' : '8px 16px'};
  font-size: ${(props) => (props.fontSize === 'large' ? '1.2em' : '1em')};
  color: ${(props) => props.color ?? '#005bb2'};
  background: ${(props) => props.background ?? '#fff'};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background: rgba(0, 91, 178, 0.8);
  }
`;
