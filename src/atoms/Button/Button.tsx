import React, { FC } from 'react';

type ButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  color?: string;
};

const Button: FC<ButtonProps> = ({ onClick, children, color = 'green' }) => {
  return (
    <button
      className={`${style[color]} rounded-lg border py-2 px-3 text-base font-bold subpixel-antialiased md:text-base`}
      onClick={(e) => onClick && onClick(e)}
    >
      {children}
    </button>
  );
};

const style: { [key: string]: string } = {
  green: 'text-emerald-600 border-emerald-600 bg-white hover:bg-emerald-50',
} as const;

export default Button;
