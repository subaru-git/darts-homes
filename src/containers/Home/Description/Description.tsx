import React, { FC } from 'react';
import { Center, Flex, Grid, Heading, Img, Text, useBreakpointValue } from '@chakra-ui/react';
import useLocale from '@/hooks/locale';

const Description: FC = () => {
  const isMd = useBreakpointValue({ base: false, md: true });
  return <>{isMd ? <DesktopDescription /> : <MobileDescription />}</>;
};

const DesktopDescription: FC = () => {
  const { t } = useLocale();
  return (
    <Grid templateColumns='repeat(2, 1fr)' justifyContent='center' gap={8}>
      <Img
        src='/darts.webp'
        alt='description image'
        objectFit='contain'
        width='640px'
        height='360px'
      />
      <Flex direction='column' gap={4} justifyContent='center'>
        <Heading as={'h2'} size={'lg'}>
          {t.home.description.title}
        </Heading>
        <Text fontSize={'md'} whiteSpace='pre-wrap'>
          {t.home.description.description.join('\n')}
        </Text>
      </Flex>
    </Grid>
  );
};

const MobileDescription: FC = () => {
  const { t } = useLocale();
  return (
    <Flex direction='column' gap={4}>
      <Center>
        <Img
          src='/darts.webp'
          alt='darts homes'
          objectFit='contain'
          loading='lazy'
          height='180px'
        />
      </Center>
      <Flex direction='column' gap={4}>
        <Heading as={'h2'} size={'md'} textAlign='center'>
          {t.home.description.title}
        </Heading>
        <Text fontSize={'sm'} whiteSpace='pre-wrap'>
          {t.home.description.description.join('\n')}
        </Text>
      </Flex>
    </Flex>
  );
};
export default Description;
