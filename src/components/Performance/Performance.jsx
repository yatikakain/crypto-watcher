import React from 'react';
import { useMarketPerformance } from '../../hooks';
import { Infographic } from '../../assets';
import { formatCurrency, formatDate } from '../../utils';
import { Loader } from '../../components';

export const Performance = () => {
  const { bitcoin, isLoadingPerformance } = useMarketPerformance();

  function formatDateToString(dateString) {
    return new Date(dateString).toLocaleDateString();
  }

  const currentDate = new Date();

  const athDate = new Date(formatDateToString(bitcoin?.ath_date));
  const atlDate = new Date(formatDateToString(bitcoin?.atl_date));

  return (
    <div className="pt-6 pl-6 pr-[26px] pb-[53.2px] bg-white w-full flex flex-col gap-6 rounded-lg">
      <h2 className="text-[var(--black)] text-2xl leading-[28.8px]">
        Performance
      </h2>
      {isLoadingPerformance ? (
        <div className="grid place-items-center">
          <Loader />
        </div>
      ) : (
        <>
          <section className="flex flex-col gap-[15px]">
            <div className="flex gap-2 justify-between items-center">
              <div className="flex flex-col gap-[10px] text-[var(--gray)] max-w-[90px] w-full">
                <p className="text-[13.78px] leading-5">Today's Lows</p>
                <p className="text-[15.63px] font-medium leading-[22px]">
                  {bitcoin?.low_24h}
                </p>
              </div>
              <div className="max-w-[582px] w-full relative">
                <div
                  className="w-full h-[4.63px] relative"
                  style={{
                    background:
                      'linear-gradient(to right, #FF4949 0%, #FF4E11 16.67%, #FC870A 33.33%, #FFAF11 50%, #C2CB21 66.67%, #11EB68 83.3%, #11EB68 100%)',
                  }}
                ></div>
              </div>

              <div className="flex flex-col gap-[10px] text-[var(--gray)] max-w-[90px] w-full">
                <p className="text-[13.78px] leading-5">Today's High</p>
                <p className="text-[15.63px] font-medium leading-[22px]">
                  {bitcoin?.high_24h}
                </p>
              </div>
            </div>
            <div className="flex gap-2 justify-between items-center">
              <div className="flex flex-col gap-[10px] text-[var(--gray)] max-w-[90px] w-full">
                <p className="text-[13.78px] leading-5">52W Lows</p>
                <p className="text-[15.63px] font-medium leading-[22px]">
                  {bitcoin?.low_24h}
                </p>
              </div>
              <div
                className="max-w-[582px] w-full h-[4.63px]"
                style={{
                  background:
                    'linear-gradient(to right, #FF4949 0%, #FF4E11 16.67%, #FC870A 33.33%, #FFAF11 50%, #C2CB21 66.67%, #11EB68 83.3%, #11EB68 100%)',
                }}
              ></div>

              <div className="flex flex-col gap-[10px] text-[var(--gray)] max-w-[90px] w-full">
                <p className="text-[13.78px] leading-5">52W High</p>
                <p className="text-[15.63px] font-medium leading-[22px]">
                  {bitcoin?.high_24h}
                </p>
              </div>
            </div>
          </section>
          <section>
            <div className="flex gap-[6px] font-semibold text-lg leading-5">
              <h2 className="text-[var(--gray)]">Fundamentals</h2>
              <img
                src={Infographic}
                alt=""
                className="w-[16.67px] h-[16.67px]"
              />
            </div>
            <div className="flex max-md:flex-col max-md:gap-0 justify-between gap-[98.83px]">
              <div className="lg:max-w-[344px] w-full">
                <div className="flex justify-between py-4 text-sm font-medium leading-5 pr-3 border-b border-b-[#D3E0E6]">
                  <p className="text-[#768396]">Bitcoin Price</p>
                  <p className="text-[#111827]">
                    {formatCurrency(bitcoin?.current_price)}
                  </p>
                </div>
                <div className="flex justify-between py-4 text-sm font-medium leading-5 pr-3 border-b border-b-[#D3E0E6]">
                  <p className="text-[#768396]">24h Low / 24h High</p>
                  <p className="text-[#111827]">
                    {formatCurrency(bitcoin?.high_24h)} /{' '}
                    {formatCurrency(bitcoin?.low_24h)}
                  </p>
                </div>
                <div className="flex justify-between py-4 text-sm font-medium leading-5 pr-3 border-b border-b-[#D3E0E6]">
                  <p className="text-[#768396]">7d Low / 7d High</p>
                  <p className="text-[#111827]">
                    {formatCurrency(bitcoin?.high_24h)} /{' '}
                    {formatCurrency(bitcoin?.low_24h)}
                  </p>
                </div>
                <div className="flex justify-between py-4 text-sm font-medium leading-5 pr-3 border-b border-b-[#D3E0E6]">
                  <p className="text-[#768396]">Trading Volume</p>
                  <p className="text-[#111827]">
                    {' '}
                    {formatCurrency(bitcoin?.total_volume)}
                  </p>
                </div>
                <div className="flex justify-between py-4 text-sm font-medium leading-5 pr-3 border-b border-b-[#D3E0E6]">
                  <p className="text-[#768396]">Market Cap Rank</p>
                  <p className="text-[#111827]">{bitcoin?.market_cap_rank}</p>
                </div>
              </div>
              {/* Right */}
              <div className="lg:max-w-[344px] w-full">
                <div className="flex justify-between py-4 text-sm font-medium leading-5 pr-3 border-b border-b-[#D3E0E6]">
                  <p className="text-[#768396]">Market Cap</p>
                  <p className="text-[#111827]">
                    {formatCurrency(bitcoin?.market_cap)}
                  </p>
                </div>
                <div className="flex justify-between py-4 text-sm font-medium leading-5 pr-3 border-b border-b-[#D3E0E6]">
                  <p className="text-[#768396]">Market Cap Dominance</p>
                  <p className="text-[#111827]">
                    {formatCurrency(
                      bitcoin?.market_cap_change_percentage_24h,
                      3,
                    )}
                    %
                  </p>
                </div>
                <div className="flex justify-between py-4 text-sm font-medium leading-5 pr-3 border-b border-b-[#D3E0E6]">
                  <p className="text-[#768396]">Volume / Market Cap</p>
                  <p className="text-[#111827]">
                    {`${(bitcoin?.total_volume / bitcoin?.market_cap).toFixed(
                      4,
                    )}`}
                  </p>
                </div>
                <div className="flex justify-between py-[6.5px] items-center pr-3 border-b border-b-[#D3E0E6]">
                  <p className="text-[#768396]">All-Time High</p>
                  <div>
                    <div>
                      <div className="flex gap-1 text-sm font-medium leading-5 justify-end">
                        <p className="text-[#111827]">
                          {formatCurrency(bitcoin?.ath)}
                        </p>
                        <span
                          className={
                            bitcoin?.ath_change_percentage < 0
                              ? 'text-[#F7324C]'
                              : 'text-[#0FBA83]'
                          }
                        >
                          {bitcoin?.ath_change_percentage.toFixed(1)}%
                        </span>
                      </div>

                      <p className="text-[11.2px] leading-5 text-[#111827]">
                        {`${formatDate(bitcoin?.ath_date)} (about ${
                          currentDate.getFullYear() - athDate.getFullYear()
                        } ${
                          currentDate.getFullYear() - athDate.getFullYear() ===
                          1
                            ? 'year'
                            : 'years'
                        })`}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between py-[6.5px] items-center text-sm font-medium leading-5 pr-3 border-b border-b-[#D3E0E6]">
                  <p className="text-[#768396]">All-Time Low</p>
                  <div>
                    <div className="flex gap-1 justify-end">
                      <p className="text-[#111827]">
                        {formatCurrency(bitcoin?.atl)}
                      </p>
                      <span
                        className={
                          bitcoin?.atl_change_percentage < 0
                            ? 'text-[#F7324C]'
                            : 'text-[#0FBA83]'
                        }
                      >
                        {bitcoin?.atl_change_percentage.toFixed(1)}%
                      </span>
                    </div>

                    <p className="text-[11.2px] font-normal leading-5 text-[#111827]">
                      {`${formatDate(bitcoin?.atl_date)} (about ${
                        currentDate.getFullYear() - atlDate.getFullYear()
                      } ${
                        currentDate.getFullYear() - atlDate.getFullYear() === 1
                          ? 'year'
                          : 'years'
                      })`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};
