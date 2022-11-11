import React, { FC } from 'react';
import { Center, Flex, Grid, Heading, Img, Text, useBreakpointValue } from '@chakra-ui/react';
import useLocale from '@/hooks/locale';

const History: FC = () => {
  const isMd = useBreakpointValue({ base: false, md: true });
  return <>{isMd ? <DesktopHistory /> : <MobileHistory />}</>;
};

const DesktopHistory: FC = () => {
  const { t } = useLocale();
  return (
    <Grid templateColumns='repeat(2, 1fr)' justifyContent='center' gap={8}>
      <Img src='/history.webp' alt='history image' objectFit='cover' width='640px' height='360px' />
      <Flex direction='column' gap={4} justifyContent='center'>
        <Heading as={'h2'} size={'lg'}>
          {t.home.history.title}
        </Heading>
        <Text fontSize={'md'} whiteSpace='pre-wrap'>
          {t.home.history.description.join('\n')}
        </Text>
        <Text fontSize={'md'} whiteSpace='pre-wrap'>
          {t.home.history.disclaimer.join('\n')}
        </Text>
      </Flex>
    </Grid>
  );
};

const MobileHistory: FC = () => {
  const { t } = useLocale();
  return (
    <Flex direction='column' gap={4}>
      <Center>
        <Img src='/history.webp' alt='history image' objectFit='cover' height='180px' />
      </Center>
      <Flex direction='column' gap={4}>
        <Heading as={'h2'} size={'md'} textAlign='center'>
          {t.home.history.title}
        </Heading>
        <Text fontSize={'sm'} whiteSpace='pre-wrap'>
          {t.home.history.description.join('\n')}
        </Text>
        <Text fontSize={'xs'} whiteSpace='pre-wrap'>
          {t.home.history.disclaimer.join('\n')}
        </Text>
      </Flex>
    </Flex>
  );
};

export default History;
