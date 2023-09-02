import React from "react";

interface IButton {
  title: string;
  onClick: () => void;
  className?: string;
}

const Button: React.FC<IButton> = ({ title, onClick, className }) => {
  return (
    <button
      className={`bg-secondary_color text-primary_color hover:bg-primary_color hover:text-secondary_color hover:outline px-8 py-2 capitalize rounded-2xl font-bold ${className}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
