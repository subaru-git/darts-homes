'use client';
import React, { FC, useEffect, useState } from 'react';
import { FiRss } from 'react-icons/fi';
import { VscTrash } from 'react-icons/vsc';
import Button from '@/atoms/Button';
import RoundScoreButton from '@/components/RoundScoreButton';

type RoundScoreProps = {
  scores: string[];
  isFinished: boolean;
  result: string;
  keyboard?: boolean;
  pro?: boolean;
  onClear: () => void;
  onRoundChange: () => void;
  onRoundOver: () => void;
};

const RoundScore: FC<RoundScoreProps> = ({
  scores,
  isFinished,
  result,
  keyboard = false,
  pro = false,
  onClear,
  onRoundChange,
  onRoundOver,
}) => {
  const [isChecking, setIsChecking] = useState(false);
  useEffect(() => {
    if (!keyboard) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Backspace' || e.key === 'Delete' || e.key === 'Escape') onClear();
      if (e.key === 'Enter' && !isFinished) onRoundChange();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [keyboard, onClear, onRoundChange, isFinished]);
  return (
    <div className='grid grid-cols-4 gap-2'>
      <div className='relative col-span-3 grid grid-cols-3'>
        {[...Array(3)].map((_, i) => (
          <span
            key={i}
            className={`text-center text-xl font-bold italic text-gray-500 md:text-3xl ${
              !pro || isChecking ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-150`}
          >
            {scores[i] === '0' ? '-' : scores[i]}
          </span>
        ))}
        {pro && (
          <button
            type='button'
            className='absolute z-10 col-span-3 size-full select-none rounded border text-center text-xl font-bold italic text-gray-500 outline-none md:text-4xl'
            onMouseDown={() => setIsChecking(true)}
            onMouseUp={() => setIsChecking(false)}
            onMouseLeave={() => setIsChecking(false)}
            onTouchStart={() => setIsChecking(true)}
            onTouchEnd={() => setIsChecking(false)}
            onTouchCancel={() => setIsChecking(false)}
          >
            <div
              className={`flex items-center justify-center gap-2 transition-opacity duration-150 ${
                isChecking ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <FiRss className='rotate-45 -scale-100' />
              Check
            </div>
          </button>
        )}
      </div>
      <div className='grid auto-cols-auto grid-flow-col items-center gap-2'>
        <div>
          <Button
            onClick={() => onClear()}
            color={'blue-fill'}
            disabled={scores.length === 0}
            aria-label={'clear scores'}
          >
            <VscTrash className='md:text-2xl' />
          </Button>
        </div>
        <RoundScoreButton
          onRoundChange={onRoundChange}
          onRoundOver={onRoundOver}
          result={result}
          isFinished={isFinished}
          disabled={scores.length !== 3}
        />
      </div>
    </div>
  );
};

export default RoundScore;
