import React, { FC } from 'react';

const Loading: FC = () => {
  return (
    <div className='flex h-[80vh] items-center justify-center'>
      <div className='h-12 w-12 animate-spin rounded-full border-x-4 border-solid border-green-600 border-t-transparent'></div>
    </div>
  );
};

export default Loading;
