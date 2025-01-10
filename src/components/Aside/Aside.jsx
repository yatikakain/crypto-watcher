import { BaseButton, Loader } from '../../components';
import { ArrowRight, ladyVirtualImage } from '../../assets';
import { useTrending } from '../../hooks';
import { cn } from '../../libs/classnames';

export const Aside = () => {
  const { coins, isPending } = useTrending();

  return (
    <section className="flex flex-col gap-5 lg:max-w-[426px] w-full">
      {/* Get started for free */}
      <div className="flex flex-col gap-[19px] justify-center items-center rounded-2xl pt-[31px] pb-[49.5px] bg-[var(--blue)]">
        <div className="flex flex-col gap-[14px] text-white lg:text-center lg:max-w-[327px] w-full">
          <h1 className="font-bold text-2xl leading-10 text-center lg:max-w-[268px] w-full mx-auto md:order-2">
            Get Started with KoinX for FREE
          </h1>
          <p className="text-sm leading-6 text-center mx-auto max-w-[359px] w-full lg:max-w-[268px] font-medium text-[var(--white-100)] md:order-3">
            With our range of features that you can equip for free, KoinX allows
            you to be more educated and aware of your tax reports.
          </p>
        </div>
        <img
          src={ladyVirtualImage}
          alt=""
          className="w-[178.66px] h-[166.22px] mx-auto lg:-order-none order-[-1]"
        />
        <BaseButton
          variant="secondary"
          className="max-w-[237px] w-full flex gap-[6px] py-[10px] md:order-4"
        >
          Get Started for FREE
          <img src={ArrowRight} alt="" className="w-5 h-5" />
        </BaseButton>
      </div>

      {/* Trendong Coins */}
      <div className="flex flex-col bg-white gap-[26px] p-6 rounded-lg">
        <h2 className="text-[var(--black)] text-2xl font-semibold leading-[28.8px]">
          Trending Coins (24h)
        </h2>
        {isPending ? (
          <div className="grid place-items-center">
            <Loader />
          </div>
        ) : (
          <>
            {coins?.slice(0, 3).map((coin) => {
              return (
                <div
                  className="flex flex-col gap-[20px]"
                  key={coin?.item?.coin_id}
                >
                  <div className="flex justify-between">
                    <div className="flex gap-[6px]">
                      <img src={coin?.item?.small} alt="" className="w-6 h-6" />
                      <p className="tex-base leading-6 font-medium text-[var(--black)]">
                        {coin?.item?.name} ({coin?.item?.symbol})
                      </p>
                    </div>
                    <div
                      className={cn(
                        'py-[4.5px] max-w-[90px] w-full flex items-center justify-center gap-[5.5px] rounded',
                        coin?.item?.data?.price_change_percentage_24h?.btc < 0
                          ? 'bg-[#EE68551A] text-[#E96975]'
                          : 'bg-[var(--green)] text-[var(--green-50)]',
                      )}
                    >
                      <svg
                        width="11"
                        height="8"
                        viewBox="0 0 11 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={cn(
                          '',
                          coin?.item?.data?.price_change_percentage_24h?.btc < 0
                            ? 'rotate-180'
                            : '',
                        )}
                      >
                        <path d="M5.5 0L11 8H0L5.5 0Z" fill="currentColor" />
                      </svg>

                      <p className="text-sm leading-[19.36px]">
                        {coin?.item?.data?.price_change_percentage_24h?.btc.toFixed(
                          2,
                        )}
                        %
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </section>
  );
};
