import React, { FC } from 'react';
import { Center, Spinner } from '@chakra-ui/react';

const Loading: FC = () => {
  return (
    <Center h='80vh'>
      <Spinner
        size={'xl'}
        color={'green.300'}
        emptyColor={'gray.200'}
        speed={'1s'}
        thickness={'5px'}
      />
    </Center>
  );
};

export default Loading;
