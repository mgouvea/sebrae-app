import { GetViaCep } from '@/services';
import { useQuery } from '@tanstack/react-query';

export const useViaCep = () => {
  return useQuery({
    queryKey: ['viacep'],
    queryFn: () => GetViaCep,
  });
};
