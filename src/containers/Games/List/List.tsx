import React, { FC } from 'react';
import { Flex, Heading, HStack, Text, Box } from '@chakra-ui/react';
import Link from 'next/link';
import AppTag from '@/components/AppTag';
import Card from '@/components/Card';
import { useTranslations } from 'next-intl';
import { getGames } from '@/lib/getGames';

const List: FC = () => {
  const t = useTranslations();
  const games = getGames();
  return (
    <Box p={4}>
      <Heading as='h2' size={{ base: 'lg', md: 'xl' }} pb={4}>
        Games
      </Heading>
      <Flex flexWrap='wrap' gap={2} alignItems='stretch'>
        {games.map((game) => (
          <div key={game}>
            <Card>
              <Flex direction='column' gap={4}>
                <Link href={`/${game}`}>
                  <Heading as='h3' size={{ base: 'md', md: 'lg' }} p={{ base: 1, md: 4 }}>
                    {t(`games.${game}.title`)}
                  </Heading>
                </Link>
                <HStack>
                  {t(`games.${game}.tags`)
                    .split('#')
                    .map((tag) => (
                      <AppTag key={tag} tag={tag} />
                    ))}
                </HStack>
                <Text whiteSpace='pre-wrap' fontSize={{ base: 'sm', md: 'md' }}>
                  {t(`games.${game}.description`)}
                </Text>
              </Flex>
            </Card>
          </div>
        ))}
      </Flex>
    </Box>
  );
};

export default List;
