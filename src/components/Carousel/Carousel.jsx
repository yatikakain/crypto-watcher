import React from 'react';
import { CarouselRight } from '../../assets';
import { KEY_EVENTS_DETAILS } from '../../mocks';
import { cn } from '../../libs/classnames';

export const Carousel = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === KEY_EVENTS_DETAILS.length - 1 ? 0 : prevIndex + 1,
    );
  };
  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? KEY_EVENTS_DETAILS.length - 1 : prevIndex - 1,
    );
  };

  const carouselStyle = {
    transform: `translateX(-${activeIndex * (456 + 14)}px)`,
    transition: 'transform 0.5s ease-in-out',
  };

  return (
    <div className="relative">
      {activeIndex !== 0 && (
        <button
          onClick={prevSlide}
          className="absolute z-10 rotate-180 left-0 bottom-[40%]"
        >
          <img src={CarouselRight} alt="" className="w-12 h-12" />
        </button>
      )}

      <div className="flex overflow-x-auto">
        <div
          className="flex gap-[14px] transition-transform"
          style={carouselStyle}
        >
          {KEY_EVENTS_DETAILS.map((item) => {
            return (
              <div
                className={cn(
                  'px-[18px] pt-[18px] pb-[38px] rounded-xl flex gap-2 max-w-[456px] w-full flex-shrink-0',
                )}
                style={{ backgroundColor: item.bg_color }}
                key={item.id}
              >
                <img src={item.icon} alt="" className="w-11 h-11" />
                <div className="flex flex-col gap-2 max-w-[368px] w-full text-sm leading-5">
                  <h3 className="font-medium text-[var(--black-200)]">
                    {item.title}
                  </h3>
                  <p className="text-[#3E5765]">{item.para}</p>
                </div>
              </div>
            );
          })}
        </div>

        {activeIndex !== KEY_EVENTS_DETAILS?.length - 1 && (
          <button onClick={nextSlide} className="absolute right-0 bottom-[40%]">
            <img src={CarouselRight} alt="" className="w-12 h-12" />
          </button>
        )}
      </div>
    </div>
  );
};
