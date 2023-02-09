import React, { FC, useState } from 'react';
import { AiOutlineEnter } from 'react-icons/ai';
import { RiDeleteBack2Line } from 'react-icons/ri';
import Button from '@/atoms/Button';

type TenKeyProps = {
  onCount: (value: string) => void;
};

const TenKey: FC<TenKeyProps> = ({ onCount }) => {
  const [value, setValue] = useState('');
  return (
    <>
      <div className='grid grid-cols-3 grid-rows-5 gap-1'>
        <input
          type='text'
          className='col-span-3 rounded-md border p-2.5 text-right text-sm tracking-widest text-gray-900'
          value={value}
        />
        <Button onClick={() => setValue(value + '1')} aria-label='one'>
          1
        </Button>
        <Button onClick={() => setValue(value + '2')} aria-label='two'>
          2
        </Button>
        <Button onClick={() => setValue(value + '3')} aria-label='three'>
          3
        </Button>
        <Button onClick={() => setValue(value + '4')} aria-label='four'>
          4
        </Button>
        <Button onClick={() => setValue(value + '5')} aria-label='five'>
          5
        </Button>
        <Button onClick={() => setValue(value + '6')} aria-label='six'>
          6
        </Button>
        <Button onClick={() => setValue(value + '7')} aria-label='seven'>
          7
        </Button>
        <Button onClick={() => setValue(value + '8')} aria-label='eight'>
          8
        </Button>
        <Button onClick={() => setValue(value + '9')} aria-label='nine'>
          9
        </Button>
        <Button onClick={() => setValue(value.slice(0, -1))} aria-label='delete'>
          <RiDeleteBack2Line className='m-auto' />
        </Button>
        <Button onClick={() => setValue(value + '0')} aria-label='zero'>
          0
        </Button>
        <Button
          onClick={() => {
            onCount(value);
            setValue('');
          }}
          aria-label='enter'
        >
          <AiOutlineEnter className='m-auto' />
        </Button>
      </div>
    </>
  );
};

export default TenKey;
