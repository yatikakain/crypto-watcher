import React from 'react';
import { useTrending } from '../../hooks';
import { Loader } from '../Loader';
import { CarouselRight } from '../../assets';
import { prevSlide, nextSlide } from '../../utils';
import { cn } from '../../libs/classnames';

export const Footer = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [activeIndexTrending, setActiveIndexTrending] = React.useState(0);
  const { coins, isPending } = useTrending();

  const mayAlsoLikeStyle = {
    transform: `translateX(-${activeIndex * (252 + 10)}px)`,
    transition: 'transform 0.5s ease-in-out',
  };

  const trendingStyle = {
    transform: `translateX(-${activeIndexTrending * (252 + 10)}px)`,
    transition: 'transform 0.5s ease-in-out',
  };

  const scrollbarHidingStyle = {
    msOverflowStyle: 'none', // IE 10+
    scrollbarWidth: 'none',  // Firefox
  };

  return (
    <div className="flex flex-col gap-[30px] pt-[68px] pb-[97.89px] overflow-x-hidden">
      <div className="relative">
        {activeIndex !== 0 && (
          <button
            onClick={() => prevSlide(setActiveIndex, coins)}
            className="absolute z-10 rotate-180 left-[40px] bottom-[40%] border rounded-full"
          >
            <img src={CarouselRight} alt="" className="w-8 h-8" />
          </button>
        )}
        <div className="wrapper">
          <div className="flex flex-col gap-5">
            <h1 className="font-medium text-2xl leading-9 text-[#202020]">
              You May Also Like
            </h1>

            {isPending ? (
              <div className="grid place-items-center">
                <Loader />
              </div>
            ) : (
              <div className="flex overflow-x-auto gap-[10px]"
               style={scrollbarHidingStyle}
              >
                {coins?.map((coin) => {
                  const price_btc = Number(coin?.item?.data?.price_btc);

                  return (
                    <div
                      key={coin?.item?.coin_id}
                      className="rounded-[10px] border border-[#E3E3E3] p-[17px] max-w-[252px] w-full flex flex-col flex-shrink-0 gap-3"
                      style={mayAlsoLikeStyle}
                    >
                      <div className="flex items-center gap-1">
                        <img
                          src={coin?.item?.small}
                          alt=""
                          className="w-[26px] h-[26px]"
                        />
                        <div className="flex items-center">
                          <p className="text-base text-[#202020] leading-[19.36px]">
                            {coin?.item?.symbol}
                          </p>
                          <div
                            className={cn(
                              'max-w-[50px] w-full flex items-center justify-center rounded-sm  p-[2.75px] text-xs leading-[14.52px]',
                              coin?.item?.data?.price_change_percentage_24h
                                ?.btc < 0
                                ? 'bg-[#EE68551A] text-[#E96975]'
                                : 'bg-[var(--green)] text-[var(--green-50)]',
                            )}
                          >
                            {coin?.item?.data?.price_change_percentage_24h?.btc.toFixed(
                              2,
                            )}
                            %
                          </div>
                        </div>
                      </div>
                      <h1 className="font-medium text-xl text-[#171717]">
                        {price_btc.toFixed(15)}
                      </h1>
                      <img src={coin?.item?.data?.sparkline} alt="" />
                    </div>
                  );
                })}
              </div>
            )}

            {activeIndex !== coins?.length - 1 && (
              <button
                onClick={() => nextSlide(setActiveIndex, coins)}
                className="absolute left-[94%] top-[50%] border rounded-full z-10"
              >
                <img src={CarouselRight} alt="" className="w-8 h-8" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Trending */}
      <div className="relative">
        {activeIndex !== 0 && (
          <button
            onClick={() => prevSlide(setActiveIndexTrending, coins)}
            className="absolute z-10 rotate-180 left-[40px] top-[50%] border rounded-full"
          >
            <img src={CarouselRight} alt="" className="w-8 h-8" />
          </button>
        )}
        <div className="wrapper">
          <div className="flex flex-col gap-5">
            <h1 className="font-medium text-2xl leading-9 text-[#202020]">
              Trending Coins
            </h1>

            {isPending ? (
              <div className="grid place-items-center">
                <Loader />
              </div>
            ) : (
              <div className="flex overflow-x-auto gap-[10px]"
               style={scrollbarHidingStyle}
              >
                {coins?.map((coin) => {
                  const price_btc = Number(coin?.item?.data?.price_btc);

                  return (
                    <div
                      key={coin?.item?.coin_id}
                      className="rounded-[10px] border border-[#E3E3E3] p-[17px] max-w-[252px] w-full flex flex-col flex-shrink-0 gap-3"
                      style={trendingStyle}
                    >
                      <div className="flex items-center gap-1">
                        <img
                          src={coin?.item?.small}
                          alt=""
                          className="w-[26px] h-[26px]"
                        />
                        <div className="flex items-center">
                          <p className="text-base text-[#202020] leading-[19.36px]">
                            {coin?.item?.symbol}
                          </p>
                          <div className="p-[2.75px] bg-[var(--green)] text-[#32BE88] text-xs leading-[14.52px]">
                            {coin?.item?.data?.price_change_percentage_24h?.btc.toFixed(
                              2,
                            )}
                            %
                          </div>
                        </div>
                      </div>
                      <h1 className="font-medium text-xl text-[#171717]">
                        {price_btc.toFixed(15)}
                      </h1>
                      <img src={coin?.item?.data?.sparkline} alt="" />
                    </div>
                  );
                })}
              </div>
            )}

            {activeIndex !== coins?.length - 1 && (
              <button
                onClick={() => nextSlide(setActiveIndexTrending, coins)}
                className="absolute left-[94%] top-[50%] border rounded-full z-10"
              >
                <img src={CarouselRight} alt="" className="w-8 h-8" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
