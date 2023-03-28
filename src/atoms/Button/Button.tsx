import React, { ButtonHTMLAttributes, FC } from 'react';

type ButtonProps = {
  disabled?: boolean;
  color?: string;
  children?: React.ReactNode;
};

const Button: FC<ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>> = ({
  disabled = false,
  color = 'green',
  children,
  ...props
}) => {
  return (
    <button
      className={`${style[color]} w-fit rounded-lg border p-2 text-sm font-bold subpixel-antialiased disabled:cursor-not-allowed md:px-3 md:text-base`}
      {...props}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

const style: { [key: string]: string } = {
  green: 'text-emerald-600 border-emerald-600 bg-white hover:bg-emerald-50',
  'green-fill':
    'text-white bg-emerald-600 border-emerald-200 hover:bg-emerald-500 disabled:bg-emerald-200',
  blue: 'text-blue-400 border-blue-400 bg-white hover:bg-blue-50',
  'blue-fill': 'text-white bg-blue-500 hover:bg-blue-400 disabled:bg-blue-300',
  orange: 'text-orange-400 border-orange-400 bg-white hover:bg-orange-50',
  'orange-fill': 'text-white bg-orange-500 hover:bg-orange-400  disabled:bg-orange-200',
} as const;

export default Button;
