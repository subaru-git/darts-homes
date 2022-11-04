import React, { FC } from 'react';
import { Center, Flex, Img, Text, useBreakpointValue } from '@chakra-ui/react';
import useLocale from '@/hooks/locale';

const Description: FC = () => {
  const isMd = useBreakpointValue({ base: false, md: true });
  return <>{isMd ? <DesktopDescription /> : <MobileDescription />}</>;
};

const DesktopDescription: FC = () => {
  const { t } = useLocale();
  return (
    <Flex justifyContent='center' gap={4}>
      <Img src='/darts.webp' alt='darts homes' boxSize={450} objectFit='cover' />
      <Center h='100%'>
        <Text fontSize={'xl'} whiteSpace='pre-wrap'>
          {t.home.description.join('\n')}
        </Text>
      </Center>
    </Flex>
  );
};

const MobileDescription: FC = () => {
  const { t } = useLocale();
  return (
    <>
      <Center>
        <Img src='/darts.webp' alt='darts homes' boxSize={200} objectFit='cover' loading='lazy' />
      </Center>
      <Center h='100%'>
        <Text fontSize={'md'} whiteSpace='pre-wrap'>
          {t.home.description.join('\n')}
        </Text>
      </Center>
    </>
  );
};
export default Description;
