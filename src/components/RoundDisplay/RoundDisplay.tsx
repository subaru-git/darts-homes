import React, { FC } from 'react';

type RoundDisplayProps = {
  count: number;
  round?: boolean;
  size?: 'sm' | 'md';
};

const RoundDisplay: FC<RoundDisplayProps> = ({ count, round, size = 'md' }) => {
  return (
    <div className='flex gap-2'>
      {round ? (
        <>
          <span className={`${size === 'md' ? 'text-2xl' : 'text-xl'} font-bold text-green-600`}>
            Round
          </span>
          <span className={`${size === 'md' ? 'text-2xl' : 'text-xl'} font-bold text-gray-500`}>
            {count}
          </span>
        </>
      ) : (
        <>
          <span className={`${size === 'md' ? 'text-2xl' : 'text-xl'} font-bold text-gray-500`}>
            {count}
          </span>
          <span
            className={`${size === 'md' ? 'text-2xl' : 'text-xl'} font-bold text-green-600`}
          >{`Dart${count > 1 ? 's' : ''}`}</span>
        </>
      )}
    </div>
  );
};

export default RoundDisplay;
