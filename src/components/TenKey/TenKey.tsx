import React, { FC, useEffect, useState } from 'react';
import { AiOutlineEnter } from 'react-icons/ai';
import { RiDeleteBack2Line } from 'react-icons/ri';
import Button from '@/atoms/Button';

type TenKeyProps = {
  onCount: (value: string) => void;
  force: boolean;
  disabled?: boolean;
  display?: boolean;
  onChange?: (value: string) => void;
  keyboard?: boolean;
};

const TenKey: FC<TenKeyProps> = ({
  onCount,
  force,
  disabled = false,
  display = true,
  onChange,
  keyboard = false,
}) => {
  const [value, setValue] = useState('');
  const setScore = (score: string) => {
    setValue(score);
    onChange?.(score);
  };
  const addNumber = (n: string) => {
    let v = value + n;
    if (parseInt(v) > 180) v = '180';
    setScore(v);
  };
  const deleteNumber = () => setScore(value.slice(0, -1));
  const clearNumber = () => setScore('');
  const enter = () => {
    if (value === '' && !force) return;
    onCount(value);
    setScore('');
  };
  useEffect(() => {
    if (!keyboard) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (validNumberKeys.includes(e.key)) addNumber(e.key);
      if (e.key === 'Backspace' || e.key === 'Delete') deleteNumber();
      if (e.key === 'Escape') clearNumber();
      if (e.key === 'Enter') enter();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  });
  const rows = display ? 'gird-rows-5' : 'grid-rows-4';
  return (
    <>
      <div className={`grid min-h-[200px] grid-cols-3 gap-1 ${rows}`}>
        {display ? (
          <input
            type='text'
            className='col-span-3 rounded-md border p-2.5 text-right text-sm tracking-widest text-gray-900 focus:outline-none focus:ring-0'
            value={value}
            onChange={() => {}}
          />
        ) : null}
        <Button
          className='w-full'
          onClick={() => addNumber('1')}
          aria-label='one'
          disabled={disabled}
        >
          1
        </Button>
        <Button
          className='w-full'
          onClick={() => addNumber('2')}
          aria-label='two'
          disabled={disabled}
        >
          2
        </Button>
        <Button
          className='w-full'
          onClick={() => addNumber('3')}
          aria-label='three'
          disabled={disabled}
        >
          3
        </Button>
        <Button
          className='w-full'
          onClick={() => addNumber('4')}
          aria-label='four'
          disabled={disabled}
        >
          4
        </Button>
        <Button
          className='w-full'
          onClick={() => addNumber('5')}
          aria-label='five'
          disabled={disabled}
        >
          5
        </Button>
        <Button
          className='w-full'
          onClick={() => addNumber('6')}
          aria-label='six'
          disabled={disabled}
        >
          6
        </Button>
        <Button
          className='w-full'
          onClick={() => addNumber('7')}
          aria-label='seven'
          disabled={disabled}
        >
          7
        </Button>
        <Button
          className='w-full'
          onClick={() => addNumber('8')}
          aria-label='eight'
          disabled={disabled}
        >
          8
        </Button>
        <Button
          className='w-full'
          onClick={() => addNumber('9')}
          aria-label='nine'
          disabled={disabled}
        >
          9
        </Button>
        <Button
          className='w-full'
          onClick={() => deleteNumber()}
          aria-label='delete'
          disabled={disabled}
        >
          <RiDeleteBack2Line className='m-auto' />
        </Button>
        <Button
          className='w-full'
          onClick={() => addNumber('0')}
          aria-label='zero'
          disabled={disabled}
        >
          0
        </Button>
        <Button
          className='w-full'
          onClick={() => enter()}
          aria-label='enter'
          disabled={disabled && !force}
        >
          <AiOutlineEnter className='m-auto' />
        </Button>
      </div>
    </>
  );
};

const validNumberKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

export default TenKey;
