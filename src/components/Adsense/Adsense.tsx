import React, { FC, useEffect } from 'react';
import { useRouter } from 'next/router';

const Adsense: FC = () => {
  const { asPath } = useRouter();
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.error(error);
    }
  }, [asPath]);
  return (
    <div key={asPath}>
      <ins
        className='adsbygoogle'
        style={{ display: 'block' }}
        data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_ID}
        data-ad-slot='7065957525'
        data-ad-format='auto'
        data-full-width-responsive='true'
        data-adtest={process.env.NODE_ENV === 'production' ? 'off' : 'on'}
      />
    </div>
  );
};

export default Adsense;
