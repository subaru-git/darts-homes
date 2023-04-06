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
  className,
  ...props
}) => {
  return (
    <button
      className={`${style[color]} w-fit rounded-lg border p-2 text-sm font-bold subpixel-antialiased disabled:cursor-not-allowed md:px-3 md:text-base ${className}`}
      {...props}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

const style: { [key: string]: string } = {
  green: 'text-emerald-600 border-emerald-600 bg-white hover:bg-emerald-50 disabled:opacity-50',
  'green-fill':
    'text-white bg-emerald-600 border-emerald-200 hover:bg-emerald-500 disabled:bg-emerald-200',
  blue: 'text-blue-400 border-blue-400 bg-white hover:bg-blue-50',
  'blue-fill': 'text-white bg-blue-500 hover:bg-blue-400 disabled:bg-blue-300',
  red: 'text-red-400 border-red-400 bg-white hover:bg-red-50',
  'red-fill': 'text-white bg-red-500 hover:bg-red-400 disabled:bg-red-300',
  indigo: 'text-indigo-400 border-indigo-400 bg-white hover:bg-indigo-50',
  'indigo-fill': 'text-white bg-indigo-700 hover:bg-indigo-500 disabled:bg-indigo-300',
  orange: 'text-orange-400 border-orange-400 bg-white hover:bg-orange-50',
  'orange-fill': 'text-white bg-orange-500 hover:bg-orange-400  disabled:bg-orange-200',
  cyan: 'text-cyan-400 border-cyan-400 bg-white hover:bg-cyan-50 disabled:opacity-50',
  'cyan-fill': 'text-white bg-cyan-500 hover:bg-cyan-400  disabled:bg-cyan-200',
  gray: 'text-gray-600 border-gray-300 bg-white hover:bg-gray-50 disabled:opacity-50',
  'gray-fill': 'text-white bg-gray-500 hover:bg-gray-400  disabled:bg-gray-200',
  pink: 'text-pink-600 border-pink-500 bg-white hover:bg-pink-50 disabled:opacity-50',
  'pink-fill': 'text-white bg-pink-500 hover:bg-pink-400  disabled:bg-pink-200',
  fuchsia: 'text-fuchsia-600 border-fuchsia-300 bg-white hover:bg-fuchsia-50 disabled:opacity-50',
  'fuchsia-fill': 'text-white bg-fuchsia-500 hover:bg-fuchsia-400  disabled:bg-fuchsia-200',
  rose: 'text-rose-600 border-rose-300 bg-white hover:bg-rose-50 disabled:opacity-50',
  'rose-fill': 'text-white bg-rose-500 hover:bg-rose-400  disabled:bg-rose-200',
} as const;

export default Button;
