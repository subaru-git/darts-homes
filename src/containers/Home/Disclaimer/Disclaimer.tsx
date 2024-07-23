import React, { FC } from 'react';
import { FiAlertTriangle } from 'react-icons/fi';
import { useTranslations } from 'next-intl';

const Description: FC = () => {
  const t = useTranslations('Home.disclaimer');
  return (
    <div className='flex items-center justify-around gap-2 bg-yellow-50 p-2 text-xs text-gray-500 md:p-4 md:text-sm'>
      <FiAlertTriangle size={32} />
      <p className='whitespace-pre-wrap'>{t('description')}</p>
    </div>
  );
};

export default Description;
