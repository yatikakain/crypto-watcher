import { Pie } from '../../components';

export const Tokenomics = () => {
  return (
    <div className="pt-6 px-6 pb-[60.2px] bg-white w-full flex flex-col gap-6 rounded-lg">
      <a
        href="/#tokenomics"
        className="text-[var(--black)] text-2xl leading-[28.8px]"
      >
        Tokenomics
      </a>
      <section className="flex flex-col gap-4">
        <div className="flex gap-[6px] font-semibold text-xl leading-9">
          <h2 className="text-[#1D1D1D]">Initial Distribution</h2>
        </div>
        <div className="flex gap-[6px] font-semibold text-lg leading-5">
          <div className="flex items-center gap-6 max-sm:flex-col">
            <Pie percentage={80} colour={'#0082FF'} />
            <div className="flex flex-col gap-4 text-base font-normal leading-4 text-[#202020]">
              <div className="flex gap-1">
                <div className="w-4 h-4 rounded-full bg-[#0082FF]"></div>
                <p>Crowdsale investors: 80%</p>
              </div>
              <div className="flex gap-1">
                <div className="w-4 h-4 rounded-full bg-[#FAA002]"></div>
                <p>Foundation: 20%</p>
              </div>
            </div>
          </div>
        </div>
        <p className="font-medium text-base  leading-[25.6px] text-[var(--gray-100)]">
          Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare
          vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum
          amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus
          eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse
          urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet
          bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel
          ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit
          mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.
        </p>
      </section>
    </div>
  );
};
