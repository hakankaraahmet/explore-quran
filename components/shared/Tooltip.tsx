import React, { FC } from "react";

interface ITooltip {
  children: JSX.Element | string;
  tooltipValue: string;
  tooltipCheckValue: string;
}

const Tooltip: FC<ITooltip> = ({
  tooltipValue,
  tooltipCheckValue,
  children,
}) => {
  return (
    <div className="absolute left-[50%] translate-x-[-50%] top-7 ">
      <span
        className={`bg-primary_color text-xs border-primary_color shadow-2xl text-secondary_color relative px-4 text-md capitalize rounded-lg  border-t ${
          tooltipValue === tooltipCheckValue ? "block" : "hidden"
        }`}
      >
        <span
          className="absolute -top-2 left-[50%] translate-x-[-50%] w-0 h-0 
                        border-l-[5px] border-l-transparent
                        border-b-[7px] border-b-primary_color
                        border-r-[5px] border-r-transparent"
        ></span>
        {children}
      </span>
    </div>
  );
};

export default Tooltip;
