import React, { FC } from 'react';
import { DefaultSeo } from 'next-seo';
import useLocale from '@/hooks/locale';

const AppDefaultSeo: FC = () => {
  const { t } = useLocale();
  const { title, description } = t.seo.default;
  return (
    <DefaultSeo
      defaultTitle={title}
      titleTemplate='%s - Darts Homes'
      canonical='https://darts.homes'
      description={description}
      twitter={{ cardType: 'summary' }}
      openGraph={{
        type: 'website',
        title: title,
        description: description,
        site_name: 'Darts Homes',
        url: 'https://darts.homes',
        images: [
          {
            url: 'https://darts.homes/ogp.png',
            width: 800,
            height: 600,
            alt: 'Darts Homes',
          },
        ],
      }}
    />
  );
};

export default AppDefaultSeo;
