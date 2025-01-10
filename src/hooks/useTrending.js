import { useQuery } from '@tanstack/react-query';

import axios from 'axios';
import ENV_VARS from '../utils/contants';

export function useTrending() {
  const { data, isPending } = useQuery({
    queryKey: ['trending-coins'],
    queryFn: () => axios.get(`${ENV_VARS.baseURL}/search/trending`),
  });

  return { coins: data?.data?.coins, isPending };
}
