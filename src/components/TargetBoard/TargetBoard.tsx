import React, { FC } from 'react';

type TargetBoardProps = {
  target?: string;
  message: string;
  size?: 'sm' | 'md';
};

const TargetBoard: FC<TargetBoardProps> = ({ target, message, size = 'md' }) => {
  const messageFontSize =
    size === 'md' ? 'text-[24px] md:text-[32px]' : 'text-[18px] md:text-[24px]';
  const targetFontSize =
    size === 'md' ? 'text-[48px] md:text-[96px]' : 'text-[32px] md:text-[64px]';
  return (
    <div aria-label='target board'>
      <p
        className={`pl-1 pt-1 font-bold text-green-600 md:pl-4 md:pt-4 ${messageFontSize}`}
        aria-label={`message ${message}`}
      >
        {message}
      </p>
      <p
        className={`min-w-[110px] py-1 text-center font-[roboto,_sans-serif] font-bold text-gray-700 md:min-w-[260px] md:py-8 ${targetFontSize}`}
        aria-label={`target ${message}`}
      >
        {target}
      </p>
    </div>
  );
};

export default TargetBoard;
