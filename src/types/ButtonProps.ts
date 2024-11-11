import { ReactNode } from 'react';

export type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
  color: string;
  size: string;
  padding: string;
  fontSize: string;
  background: string;
};
