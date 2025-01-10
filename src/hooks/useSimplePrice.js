import { useQuery } from '@tanstack/react-query';
import { useEffect,useState } from 'react';
import axios from 'axios';
import ENV_VARS from '../utils/contants';

export function useSimplePrice() {
  const [coinId, setCoinId] = useState(null);
  
    useEffect(() => {
      // Retrieve the coinId from local storage or set default to 'bitcoin'
      const storedCoinId = localStorage.getItem("coinId");
      setCoinId(storedCoinId ? storedCoinId : "bitcoin");  // Use 'bitcoin' as default if not found
    }, []);
    
  const { data, isPending } = useQuery({
    queryKey: ['simple_price'],
    queryFn: () =>
      axios.get(
        `${ENV_VARS.baseURL}/simple/price?ids=${coinId}&vs_currencies=inr%2Cusd&include_24hr_change=true`,
      ),
  });

  return { simplePrice: data?.data?.bitcoin, isPending };
}
