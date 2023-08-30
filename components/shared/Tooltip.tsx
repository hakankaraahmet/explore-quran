import React, { FC } from "react";

interface ITooltip {
  children: JSX.Element | string;
  tooltipValue: string;
  tooltipCheckValue: string;
  className?:string 
}

const Tooltip: FC<ITooltip> = ({
  tooltipValue,
  tooltipCheckValue,
  children,
  className
}) => {
  return (
    <div className={`absolute  top-7 w-16 ${className ? className : 'left-[50%] translate-x-[-50%]'}`}>
      <div
        className={`bg-primary_color border-primary_color shadow-2xl text-secondary_color relative  text-[8px] capitalize rounded-lg  border-t ${
          tooltipValue === tooltipCheckValue ? "block" : "hidden"
        } ${typeof children === 'string' ? 'px-2' : 'px-5' }`}
      >
        <span
          className={`absolute -top-2  w-0 h-0 
          border-l-[5px] border-l-transparent
          border-b-[7px] border-b-primary_color
          border-r-[5px] border-r-transparent ${className ? className : 'left-[50%] translate-x-[-50%]'}`}
        ></span>
        <span className="flex justify-center">
        {children}
        </span>
      </div>
    </div>
  );
};

export default Tooltip;
