import { readFileSync } from 'fs';
import { GetStaticProps, NextPage } from 'next';
import AppSeo from '@/components/AppSeo';
import Main from '@/containers/Respect/Main';

type Props = {
  data: RespectResult;
};

const Respect: NextPage<Props> = ({ data }) => {
  return (
    <>
      <AppSeo page='respect' />
      <Main data={data} />
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  return { props: { data: JSON.parse(readFileSync('data/data.json', 'utf8')) } };
};

export default Respect;
