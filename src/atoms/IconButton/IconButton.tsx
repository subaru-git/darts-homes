import React, { FC } from 'react';

type IconButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
};

const IconButton: FC<IconButtonProps> = ({ onClick, children, ...props }) => {
  return (
    <button
      type='button'
      className='m-auto inline-flex items-center rounded-full bg-blue-500 p-2.5 text-center text-sm font-medium text-white hover:bg-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-300'
      onClick={(e) => onClick && onClick(e)}
      {...props}
    >
      {children}
    </button>
  );
};

export default IconButton;
