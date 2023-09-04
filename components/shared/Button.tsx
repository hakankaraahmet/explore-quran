import React from "react";

interface IButton {
  title: string;
  onClick: () => void;
  isActive?: boolean;
  className?: string;
}

const Button: React.FC<IButton> = ({ title, onClick, className, isActive }) => {
  return (
    <button
      className={`px-8 py-2 capitalize rounded-2xl font-bold ${className} ${
        isActive
          ? "bg-secondary_color text-primary_color"
          : "bg-primary_color text-secondary_color hover:outline "
      }`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
