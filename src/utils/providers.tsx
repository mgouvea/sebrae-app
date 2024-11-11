'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Providers = ({ children }: Props) => {
  const queryClien = new QueryClient();

  return (
    <QueryClientProvider client={queryClien}>{children}</QueryClientProvider>
  );
};
