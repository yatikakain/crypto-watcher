import TradingViewWidget from '../TradingViewWidget/TradingViewWidget';
import { useSimplePrice } from '../../hooks';
import { bitcoin } from '../../assets';
import { formatCurrency } from '../../utils';
import { useEffect,useState } from 'react';

export const Graph = () => {
  const { simplePrice } = useSimplePrice();
  const [coinId, setCoinId] = useState(null);
  
    useEffect(() => {
      // Retrieve the coinId from local storage or set default to 'bitcoin'
      const storedCoinId = localStorage.getItem("coinId");
      setCoinId(storedCoinId ? storedCoinId : "bitcoin");  // Use 'bitcoin' as default if not found
    }, []);
    

  return (
    <div className="pt-6 pl-6 pr-[26px] pb-[53.2px] bg-white w-full flex flex-col gap-6 rounded-lg">
      <div className="flex flex-col gap-10">
        <div className="flex items-center gap-2">
          <img src={bitcoin} alt="" className="w-9 h-9" />
          <div className="flex items-center gap-1">
            <p className="font-medium text-2xl leading-[28.8px] text-[#0B1426]">
              {coinId}
            </p>
            <p className="font-medium text-base leading-[19.2px] text-[#5D667B]">
              Btc
            </p>
          </div>
        </div>

        <div className="border-b border-b-[#DEE1E6] pb-6 flex gap-8">
          <div className="text-[#0B1426]">
            <h1 className="font-semibold text-[28px] leading-[38.4px]">
              {formatCurrency(simplePrice?.usd)}
            </h1>
            <p className="font-medium text-base leading-[27px]">
              {formatCurrency(simplePrice?.inr, 0, 'INR', 'en-IN')}
            </p>
          </div>
          <div className="flex gap-3">
            <div className="bg-[var(--green)] max-h-[28px] rounded px-[10px] h-full flex justify-center items-center">
              <p className="text-[var(--green-50)] text-base leading-[19.36px]">
                {simplePrice?.inr_24h_change.toFixed(2)}%
              </p>
            </div>
            <p className="text-sm font-medium leading-[27px] text-[#768396]">
              (24H)
            </p>
          </div>
        </div>
        <div className="h-[460px]">
          <TradingViewWidget />
        </div>
      </div>
    </div>
  );
};
