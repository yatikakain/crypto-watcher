import { TEAMS_DETAILS } from '../../mocks/Teams';

export const Team = () => {
  return (
    <div className="pt-6 px-6 pb-[42.68px] bg-white w-full flex flex-col gap-6 rounded-lg">
      <a
        href="/#team"
        className="text-[var(--black)] text-2xl leading-[28.8px]"
      >
        Team
      </a>
      <p className="font-medium text-base leading-[25.6px] text-[var(--gray-100)]">
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
        nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
        quam. Facilisis purus convallis quam augue.
      </p>

      {TEAMS_DETAILS.map((team) => {
        return (
          <section
            key={team.id}
            className="flex max-md:flex-col p-[11.9px] gap-8 items-center bg-[#E8F4FD] rounded-lg"
          >
            <div className="flex flex-col gap-3 max-w-[96px] w-full">
              <img
                src={team.image}
                alt=""
                className="h-[104px] rounded-[6.68px]"
              />
              <div className="flex flex-col gap-1">
                <p className="font-semibold text-sm text-center leading-[18.15px] text-[var(--black)]">
                  {team.full_name}
                </p>
                <p className="text-[#788F9B] text-xs leading-[14.52 ]">
                  {team.position}
                </p>
              </div>
            </div>
            <p className="text-sm leading-[22.4px] text-[var(--black)] max-w-[646px] w-full">
              {team.bio}
            </p>
          </section>
        );
      })}
    </div>
  );
};
