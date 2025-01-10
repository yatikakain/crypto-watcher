import { useMarketPerformance } from '../../hooks';
import { formatCurrency, formatLargeNumber } from '../../utils';
import { ArrowRight, holdingPhone, trading } from '../../assets';
import { Loader, BaseButton } from '../../components';

export const About = () => {
  const { bitcoin, isLoadingPerformance } = useMarketPerformance();

  return (
    <div className="pt-6 pl-6 pr-[26px] pb-[53.2px] bg-white w-full flex flex-col gap-[33px] rounded-lg">
      {isLoadingPerformance ? (
        <div className="grid place-items-center">
          <Loader />
        </div>
      ) : (
        <div className="flex flex-col gap-[15px]">
          <section className="flex flex-col gap-[17px] border-b border-b-[#C9CFDD] pb-[15px]">
            <a
              href="/#news_insight"
              className="text-[var(--black)] font-semibold text-2xl leading-[28.8px]"
            >
              About Bitcoin
            </a>

            <div className="flex flex-col gap-[10px] leading-[21.6px]">
              <h2 className="text-[#0B1426] text-base font-bold">
                What is Bitcoin?
              </h2>
              <p className="text-base font-medium text-[var(--gray-100)]">
                Bitcoin’s price today is US
                {formatCurrency(bitcoin?.current_price)} with a 24-hour trading
                volume of ${formatLargeNumber(Number(bitcoin?.total_volume))}.
                BTC is {bitcoin?.price_change_percentage_24h.toFixed(2)}% in the
                last 24 hours. It is currently{' '}
                {bitcoin?.ath_change_percentage.toFixed(1)}% from its 7-day
                all-time high of
                {formatCurrency(bitcoin?.ath)}, and{' '}
                {bitcoin?.atl_change_percentage.toFixed(1)}% from its 7-day
                all-time low of {formatCurrency(bitcoin?.atl)}. BTC has a
                circulating supply of{' '}
                {formatLargeNumber(Number(bitcoin?.circulating_supply))} BTC and
                a max supply of{' '}
                {formatLargeNumber(Number(bitcoin?.total_supply))} BTC.
              </p>
            </div>
          </section>
          <section className="flex flex-col gap-[17px] border-b border-b-[#C9CFDD] pb-[15px]">
            <p className="text-[var(--black)] text-2xl leading-[28.8px]">
              Lorem ipsum dolor sit amet
            </p>
            <div className="flex flex-col gap-[10px] leading-[21.6px]">
              <h2 className="text-[#0B1426] text-base font-bold">
                What is Bitcoin?
              </h2>
              <div className="text-base font-medium text-[var(--gray-100)] flex flex-col gap-4">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit
                  lobortis tristique pharetra. Diam id et lectus urna et tellus
                  aliquam dictum at. Viverra diam suspendisse enim facilisi diam
                  ut sed. Quam scelerisque fermentum sapien morbi sodales odio
                  sed rhoncus. Ultricies urna volutpat pendisse enim facilisi
                  diam ut sed. Quam scelerisque fermentum sapien morbi sodales
                  odio sed rhoncus.
                </p>
                <p>
                  Diam praesent massa dapibus magna aliquam a dictumst volutpat.
                  Egestas vitae pellentesque auctor amet. Nunc sagittis libero
                  adipiscing cursus felis pellentesque interdum. Odio cursus
                  phasellus velit in senectus enim dui. Turpis tristique
                  placerat interdum sed volutpat. Id imperdiet magna eget eros
                  donec cursus nunc. Mauris faucibus diam mi nunc praesent massa
                  turpis a. Integer dignissim augue viverra nulla et quis
                  lobortis phasellus. Integer pellentesque enim convallis
                  ultricies at.
                </p>
                <p>
                  Fermentum hendrerit imperdiet nulla viverra faucibus. Sit
                  aliquam massa vel convallis duis ac. Mi adipiscing semper
                  scelerisque porttitor pulvinar nunc risus. Fermentum potenti
                  iaculis lacinia congue ipsum fames amet dui. Purus ultrices
                  tincidunt volutpat in eget. Ullamcorper dui
                </p>
              </div>
            </div>
          </section>
          <section className="flex flex-col gap-[17px] border-b border-b-[#C9CFDD] pb-[15px]">
            <p className="text-[var(--black)] font-semibold text-2xl leading-[28.8px]">
              Already Holding Bitcoin?
            </p>
            <div className="flex flex-col gap-[10px] leading-[21.6px]">
              <div className="flex max-md:flex-col max-md:gap-[14px] gap-[14px] justify-between">
                <button
                  className="text-base cursor-pointer font-medium text-[var(--gray-100)] flex flex-col gap-4 p-3 rounded-md lg:max-w-[388px] w-full"
                  style={{
                    background:
                      'linear-gradient(to right, #79F1A4 0%, #0E5CAD 100%)',
                  }}
                >
                  <div className="flex items-center gap-7">
                    <img
                      src={holdingPhone}
                      alt=""
                      className="w-[128px] h-[128px]"
                    />
                    <div className="lg:max-w-[195px] w-full flex flex-col gap-4">
                      <h3 className="font-bold text-xl leading-7 text-white">
                        Calculate your profits
                      </h3>
                      <BaseButton
                        variant="secondary"
                        className="max-w-[132px] max-sm:max-w-[123px] max-sm:text-xs max-sm:gap-1 text-sm w-full flex gap-[9px]"
                      >
                        Check Now
                        <img src={ArrowRight} alt="" className="w-5 h-5" />
                      </BaseButton>
                    </div>
                  </div>
                </button>
                <div
                  className="text-base cursor-pointer font-medium text-[var(--gray-100)] flex flex-col gap-4 p-3 rounded-md lg:max-w-[388px] w-full"
                  style={{
                    background:
                      'linear-gradient(to right, #FF9865 5%, #EF3031 100%)',
                  }}
                >
                  <div className="flex items-center gap-7">
                    <img src={trading} alt="" className="w-[128px] h-[128px]" />
                    <div className="lg:max-w-[195px] w-full flex flex-col gap-4">
                      <h3 className="font-bold text-xl leading-7 text-white">
                        Calculate your tax liability
                      </h3>
                      <BaseButton
                        variant="secondary"
                        className="max-w-[132px] max-sm:max-w-[123px] max-sm:text-xs max-sm:gap-1 text-sm w-full flex gap-[9px]"
                      >
                        Check Now
                        <img src={ArrowRight} alt="" className="w-5 h-5" />
                      </BaseButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <p className="text-base font-medium text-[var(--gray-100)] flex flex-col gap-4">
            Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
            massa vel convallis duis ac. Mi adipiscing semper scelerisque
            porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
            congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
            eget. Ullamcorper dui
          </p>
        </div>
      )}
    </div>
  );
};
