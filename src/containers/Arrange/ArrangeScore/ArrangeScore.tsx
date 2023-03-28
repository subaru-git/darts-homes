import React, { FC, useState } from 'react';
import { FiRss } from 'react-icons/fi';
import Button from '@/atoms/Button';
import TargetBoard from '@/components/TargetBoard';

type ArrangeScoreProps = {
  score: string;
  round: string;
  pro?: boolean;
};

const ArrangeScore: FC<ArrangeScoreProps> = ({ score, round, pro = false }) => {
  const [isRest, setIsRest] = useState(false);
  return (
    <div className='flex h-full w-full'>
      <div className='relative h-full w-full'>
        <div
          className={`absolute inset-0 flex h-full w-full items-center justify-center ${
            !pro || isRest ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-150`}
        >
          <TargetBoard message={!pro ? 'Target' : 'Rest'} target={score} />
        </div>
        {pro && (
          <div
            className={`absolute inset-0 z-10 flex h-full w-full items-center justify-center ${
              isRest ? 'opacity-0' : 'opacity-100'
            } transition-opacity duration-150`}
          >
            <TargetBoard message='Target' target={round} />
          </div>
        )}
      </div>
      {pro && (
        <div className='flex items-center'>
          <Button
            type='button'
            color='blue'
            onMouseDown={() => setIsRest(true)}
            onMouseUp={() => setIsRest(false)}
            onMouseLeave={() => setIsRest(false)}
            onTouchStart={() => setIsRest(true)}
            onTouchEnd={() => setIsRest(false)}
            onTouchCancel={() => setIsRest(false)}
          >
            <div className='flex items-center gap-2'>
              <FiRss className='rotate-45 -scale-100' />
              <span className='hidden md:inline'>Left</span>
            </div>
          </Button>
        </div>
      )}
    </div>
  );
};

export default ArrangeScore;
