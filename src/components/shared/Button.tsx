import React from "react";

interface IButton {
  title: string;
  onClick: () => void;
  className?: string;
}

const Button: React.FC<IButton> = ({ title, onClick, className }) => {
  return (
    <button
      className={`bg-primary_color text-secondary_color w-fit px-8 py-2 rounded-2xl font-bold ${className}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
