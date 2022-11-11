import React, { FC } from 'react';
import { Button, Center, Flex, Heading, Text } from '@chakra-ui/react';
import { css } from '@emotion/react';
import Router from 'next/router';
import useLocale from '@/hooks/locale';

const Title: FC = () => {
  const { t } = useLocale();
  return (
    <Flex
      direction='column'
      height={{ base: '220px', md: '400px' }}
      gap={{ base: 4, md: 8 }}
      justifyContent='center'
      css={style}
    >
      <Heading
        as={'h1'}
        size={{ base: 'lg', md: '2xl' }}
        textAlign='center'
        lineHeight='1.25em'
        whiteSpace='pre-wrap'
      >
        {t.home.title.title.join('\n')}
      </Heading>
      <Text fontSize={{ base: 'sm', md: 'lg' }} textAlign='center'>
        {t.home.title.description.join('\n')}
      </Text>
      <Center>
        <Button
          variant='outline'
          colorScheme='whatsapp'
          bg='#fefefe'
          width='fit-content'
          size={{ base: 'sm', md: 'md' }}
          onClick={() => Router.push('/games')}
        >
          {t.home.title.button}
        </Button>
      </Center>
    </Flex>
  );
};

const style = css({
  background: 'linear-gradient(#f5f5f5, #ededed, #f5f5f5)',
});
export default Title;
