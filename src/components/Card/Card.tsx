import React, { FC, ReactNode } from 'react';

type CardProps = {
  children?: ReactNode;
};

const Card: FC<CardProps> = ({ children }) => {
  return (
    <div className='h-full max-w-md rounded-xl border border-gray-200 bg-gray-50 p-5 shadow-md'>
      {children}
    </div>
  );
};

export default Card;
