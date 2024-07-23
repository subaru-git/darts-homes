'use client';
import React, { FC } from 'react';

type CountBullButtonsProps = {
  onCount: (n: point) => void;
  disabled?: boolean;
};

const CountBullButtons: FC<CountBullButtonsProps> = ({ onCount, disabled = false }) => {
  return (
    <div className='relative flex h-[40vw] max-h-[40vh] w-[40vw] max-w-[40vh] items-center justify-center'>
      <div
        className={`absolute z-40 h-full w-full bg-gray-800 opacity-50 ${disabled ? '' : 'hidden'}`}
      />
      <button
        className={`absolute z-30 h-[37.5%] w-[37.5%] appearance-none rounded-full bg-gradient-radial from-gray-800 to-gray-500 text-white hover:from-gray-800 hover:to-gray-600`}
        onClick={() => onCount('D-BULL')}
        disabled={disabled}
        aria-label='inner bull'
      />
      <button
        className={`absolute z-20 h-[75%] w-[75%] appearance-none rounded-full bg-gradient-radial from-red-600 to-red-400 hover:from-red-700 hover:to-red-500`}
        onClick={() => onCount('S-BULL')}
        disabled={disabled}
        aria-label='outer bull'
      />
      <button
        className='absolute z-10 h-full w-full appearance-none bg-gradient-radial from-gray-600 to-gray-500 hover:from-gray-700 hover:to-gray-600'
        onClick={() => onCount('0')}
        disabled={disabled}
        aria-label='non bull'
      />
      <div
        className='pointer-events-none absolute z-50 h-full w-full opacity-30'
        style={{ backgroundImage: 'url(./noise.svg)' }}
      />
    </div>
  );
};

export default CountBullButtons;
