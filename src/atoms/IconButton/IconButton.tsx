import React, { ButtonHTMLAttributes, FC } from 'react';

type IconButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  color?: string;
  children?: React.ReactNode;
};

const IconButton: FC<IconButtonProps & ButtonHTMLAttributes<HTMLButtonElement>> = ({
  onClick,
  children,
  disabled,
  color = 'blue-fill',
  ...props
}) => {
  return (
    <button
      type='button'
      className={`${style[color]} m-auto inline-flex items-center rounded-full p-2.5 text-center text-sm font-medium focus:outline-none disabled:cursor-not-allowed`}
      onClick={(e) => onClick && onClick(e)}
      {...props}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

const style: { [key: string]: string } = {
  green: 'text-emerald-600 border-emerald-600 bg-white hover:bg-emerald-50 focus:ring-4',
  'green-fill':
    'text-white bg-emerald-600 border-emerald-200 hover:bg-emerald-500 disabled:bg-emerald-200 focus:ring-4',
  blue: 'text-blue-500 border-blue-400 bg-white hover:bg-blue-50 focus:ring-4',
  'blue-fill': 'text-white bg-blue-500 hover:bg-blue-400 disabled:bg-blue-300 focus:ring-4',
  orange: 'text-orange-400 border-orange-400 bg-white hover:bg-orange-50 focus:ring-4',
  'orange-fill':
    'text-white bg-orange-500 hover:bg-orange-400  disabled:bg-orange-200 focus:ring-4',
  ghost: 'text-gray-600 bg-transparent hover:text-gray-400 p-0 focus:ring-0 disabled:opacity-50',
} as const;

export default IconButton;
