const cleanPercentage = (percentage) => {
  const isNegativeOrNaN = !Number.isFinite(+percentage) || percentage < 0;
  const isTooHigh = percentage > 100;
  return isNegativeOrNaN ? 0 : isTooHigh ? 100 : +percentage;
};

const Circle = ({ colour, percentage }) => {
  const r = 90;
  const circ = 2 * Math.PI * r;
  const strokePct = ((100 - percentage) * circ) / 100;
  return (
    <circle
      r={r}
      cx={100}
      cy={100}
      fill="transparent"
      stroke={strokePct !== circ ? colour : ''}
      strokeWidth={'20px'}
      strokeDasharray={circ}
      strokeDashoffset={percentage ? strokePct : 0}
    ></circle>
  );
};

export function Pie({ percentage, colour }) {
  const pct = cleanPercentage(percentage);
  return (
    <svg width={200} height={200}>
      <g transform={`rotate(-90 ${'100 100'})`}>
        <Circle colour="#FAA002" />
        <Circle colour={colour} percentage={pct} />
      </g>
    </svg>
  );
}
