import { readFileSync } from 'fs';
import Main from '@/containers/Respect/Main';

const Respect = () => {
  const data = JSON.parse(readFileSync('data/data.json', 'utf8'));

  return <Main data={data} />;
};

export default Respect;
