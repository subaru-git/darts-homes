import React, { FC } from 'react';

type TargetsProps = {
  count: number;
  targets: number[];
  isFinished?: boolean;
};

const Targets: FC<TargetsProps> = ({ count, targets, isFinished = false }) => {
  const scores = () => {
    const t = isFinished ? targets : targets.slice(0, -1);
    return new Array(count).fill(' - ').map((_, i) => t[i] ?? '-');
  };
  const templateColumns = `grid-cols-[15px_repeat(8,_27px)_15px] md:grid-cols-[20px_repeat(8,_38px)_20px]`;
  return (
    <div className={`grid gap-1 text-center ${templateColumns}`}>
      <span className='text-sm font-bold text-gray-500 md:text-lg'>{'['}</span>
      {scores().map((t, i) => (
        <span key={i} className='text-sm font-bold text-gray-500 md:text-lg'>
          {t}
        </span>
      ))}
      <span className='text-sm font-bold text-gray-500 md:text-lg'>{']'}</span>
    </div>
  );
};

export default Targets;
