import React, { FC } from 'react';
import { NextSeo, NextSeoProps } from 'next-seo';

type AppSetProps = {
  title: string;
  description: string;
  canonical: string;
};

const AppSeo: FC<NextSeoProps & AppSetProps> = (props) => {
  const { title, description, canonical } = props;
  return <NextSeo {...props} title={title} description={description} canonical={canonical} />;
};

export default AppSeo;
