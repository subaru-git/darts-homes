import { readFileSync } from 'fs';
import { GetStaticProps, NextPage } from 'next';
import AppSeo from '@/components/AppSeo';
import Main from '@/containers/Respect/Main';
import en from '@/lang/en';
import ja from '@/lang/ja';

type Props = {
  data: RespectResult;
  title: string;
  description: string;
  canonical: string;
};

const Respect: NextPage<Props> = ({ data, title, description, canonical }) => {
  return (
    <>
      <AppSeo title={title} description={description} canonical={canonical} />
      <Main data={data} />
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => {
  const { seo } = locale === 'ja' ? ja : en;
  const { title, description } = seo.respect;
  const canonical = `https://darts.homes${locale === 'en' ? '/en' : ''}/respect`;
  const data = JSON.parse(readFileSync('data/data.json', 'utf8'));
  return { props: { data, title, description, canonical } };
};

export default Respect;
