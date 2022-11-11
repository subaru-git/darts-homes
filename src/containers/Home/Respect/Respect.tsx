import React, { FC } from 'react';
import { Box, Center, Flex, Grid, Heading, Text, useBreakpointValue } from '@chakra-ui/react';
import LiteYoutubeEmbed from 'react-lite-youtube-embed';
import useLocale from '@/hooks/locale';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

const Respect: FC = () => {
  const isMd = useBreakpointValue({ base: false, md: true });
  return <>{isMd ? <DesktopRespect /> : <MobileRespect />}</>;
};

const DesktopRespect: FC = () => {
  const { t } = useLocale();
  return (
    <Grid templateColumns='repeat(2, 1fr)' justifyContent='center' gap={8}>
      <Box height='360px' width='640px'>
        <LiteYoutubeEmbed
          id='HiNOjEYbUXc'
          title='【ダーツ】友達にダーツをさせる方法【菊地山口】'
          webp
        />
      </Box>
      <Flex direction='column' gap={4} justifyContent='center'>
        <Heading as={'h2'} size={'lg'}>
          {t.home.respect.title}
        </Heading>
        <Text fontSize={'md'} whiteSpace='pre-wrap'>
          {t.home.respect.description.join('\n')}
        </Text>
      </Flex>
    </Grid>
  );
};

const MobileRespect: FC = () => {
  const { t } = useLocale();
  return (
    <Flex direction='column' gap={4}>
      <Center>
        <Box width='320px' height='180px'>
          <LiteYoutubeEmbed
            id='HiNOjEYbUXc'
            title='【ダーツ】友達にダーツをさせる方法【菊地山口】'
            webp
          />
        </Box>
      </Center>
      <Flex direction='column' gap={4}>
        <Heading as={'h2'} size={'md'} textAlign='center'>
          {t.home.respect.title}
        </Heading>
        <Text fontSize={'sm'} whiteSpace='pre-wrap'>
          {t.home.respect.description.join('\n')}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Respect;
