import React, { FC, useEffect, useState } from 'react';
import { AiOutlineEnter } from 'react-icons/ai';
import { RiDeleteBack2Line } from 'react-icons/ri';
import Button from '@/atoms/Button';

type TenKeyProps = {
  onCount: (value: string) => void;
  keyboard?: boolean;
};

const TenKey: FC<TenKeyProps> = ({ onCount, keyboard = false }) => {
  const [value, setValue] = useState('');
  const addNumber = (n: string) => {
    let v = value + n;
    if (v.length > 3) v = '180';
    setValue(v);
  };
  const deleteNumber = () => setValue(value.slice(0, -1));
  const clearNumber = () => setValue('');
  const enter = () => {
    if (value === '') return;
    onCount(value);
    setValue('');
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
  return (
    <>
      <div className='grid grid-cols-3 grid-rows-5 gap-1'>
        <input
          type='text'
          className='col-span-3 rounded-md border p-2.5 text-right text-sm tracking-widest text-gray-900 focus:outline-none focus:ring-0'
          value={value}
        />
        <Button onClick={() => addNumber('1')} aria-label='one'>
          1
        </Button>
        <Button onClick={() => addNumber('2')} aria-label='two'>
          2
        </Button>
        <Button onClick={() => addNumber('3')} aria-label='three'>
          3
        </Button>
        <Button onClick={() => addNumber('4')} aria-label='four'>
          4
        </Button>
        <Button onClick={() => addNumber('5')} aria-label='five'>
          5
        </Button>
        <Button onClick={() => addNumber('6')} aria-label='six'>
          6
        </Button>
        <Button onClick={() => addNumber('7')} aria-label='seven'>
          7
        </Button>
        <Button onClick={() => addNumber('8')} aria-label='eight'>
          8
        </Button>
        <Button onClick={() => addNumber('9')} aria-label='nine'>
          9
        </Button>
        <Button onClick={() => deleteNumber()} aria-label='delete'>
          <RiDeleteBack2Line className='m-auto' />
        </Button>
        <Button onClick={() => addNumber('0')} aria-label='zero'>
          0
        </Button>
        <Button onClick={() => enter()} aria-label='enter'>
          <AiOutlineEnter className='m-auto' />
        </Button>
      </div>
    </>
  );
};

const validNumberKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

export default TenKey;
