import { useNavigate } from 'react-router';
import { LessThanArrows } from '../../assets';

export const Breadcrumbs = ({ breadcrumbs }) => {
  const navigate = useNavigate();

  function handleClick(app) {
    navigate(app);
  }

  return (
    <div className="flex items-center gap-1">
      {breadcrumbs.map((breadcrumbs, index) => {
        return (
          <span
            key={breadcrumbs.id}
            className="flex shrink-0 gap-[6px] text-sm leading-[16.94px] text-[#3E5765] items-center"
          >
            {index > 0 && (
              <img
                src={LessThanArrows}
                className="w-[10px] h-[10px]"
                alt="less than arrows icon"
              />
            )}
            {breadcrumbs.active ? (
              <button
                className={
                  breadcrumbs.active ? 'text-[var(--black)] font-medium' : ''
                }
                onClick={() => handleClick(breadcrumbs.route)}
              >
                {breadcrumbs.label}
              </button>
            ) : (
              <span>{breadcrumbs.label}</span>
            )}
          </span>
        );
      })}
    </div>
  );
};
