export const ColoredBar = ({ background, percentage, label }) => {
  const validPercentage = Math.min(100, Math.max(0, percentage));
  const width = `${validPercentage}%`;
  return (
    <div className="font-medium text-sm leading-[22px] text-[#7C7E8C] flex gap-[7px] items-center">
      <p>{label}</p>
      <div
        style={{ width: width, background: background }}
        className={`h-2 rounded-sm`}
      ></div>
      <p>{percentage}%</p>
    </div>
  );
};
