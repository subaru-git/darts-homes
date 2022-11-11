import React, { FC } from 'react';
import { Flex, Heading, HStack, Text, Box } from '@chakra-ui/react';
import Link from 'next/link';
import AppTag from '@/components/AppTag';
import Card from '@/components/Card';
import useLocale from '@/hooks/locale';

const List: FC = () => {
  const { t } = useLocale();
  const data = Object.entries(t.games);
  return (
    <Box p={4}>
      <Heading as='h2' size={{ base: 'lg', md: 'xl' }} pb={4}>
        Games
      </Heading>
      <Flex flexWrap='wrap' gap={2} alignItems='stretch'>
        {data.map(([key, value]) => (
          <div key={key}>
            <Card>
              <Flex direction='column' gap={4}>
                <Link href={`/${key}`}>
                  <a>
                    <Heading as='h3' size={{ base: 'md', md: 'lg' }} p={{ base: 1, md: 4 }}>
                      {value.title}
                    </Heading>
                  </a>
                </Link>
                <HStack>
                  {value.tags.map((tag) => (
                    <AppTag key={tag} tag={tag} />
                  ))}
                </HStack>
                <Text whiteSpace='pre-wrap' fontSize={{ base: 'sm', md: 'md' }}>
                  {value.description.join('\n')}
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
