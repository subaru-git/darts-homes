import React, { FC } from 'react';
// eslint-disable-next-line import/named
import { NextSeo, NextSeoProps } from 'next-seo';
import useLocale from '@/hooks/locale';

type AppSetProps = {
  page: string;
};

const AppSeo: FC<NextSeoProps & AppSetProps> = (props) => {
  const { t } = useLocale();
  const p = Object.entries(t.seo).find((entry) => entry[0] === props.page);
  const title = p ? p[1].title : '';
  const description = p ? p[1].description : '';
  return <NextSeo {...props} title={title} description={description} />;
};

export default AppSeo;
