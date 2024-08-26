import React, { FC, Fragment } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { Box, Center, Flex, Heading, Link, Image, Text } from '@chakra-ui/react';
import replace from 'react-string-replace';
import Card from '@/components/Card';

type CardViewProps = {
  data: RespectResult;
};

const CardView: FC<CardViewProps> = ({ data }) => {
  return (
    <Flex direction='column' p={4}>
      <Box>
        <Heading as='h2' pb={4}>
          Companies
        </Heading>
        <Flex wrap={'wrap'} gap={2}>
          {data.companies.map((item) => (
            <div key={item.title}>
              <Card>
                <CardContent data={item} />
              </Card>
            </div>
          ))}
        </Flex>
      </Box>
      <Box pt={4}>
        <Heading as='h2' pb={4}>
          Professional
        </Heading>
        <Flex wrap={'wrap'} gap={2}>
          {data.professionals.map((item) => (
            <div key={item.title}>
              <Card>
                <CardContent data={item} />
              </Card>
            </div>
          ))}
        </Flex>
      </Box>
      <Box pt={4}>
        <Heading as='h2' pb={4}>
          Youtube
        </Heading>
        <Flex wrap={'wrap'} gap={2}>
          {data.youtube.map((item) => (
            <div key={item.title}>
              <Card>
                <CardContent data={item} />
              </Card>
            </div>
          ))}
        </Flex>
      </Box>
    </Flex>
  );
};

const CardContent: FC<{ data: WebsiteResult }> = ({ data }) => {
  return (
    <>
      <Center>
        <Link href={data.url ?? '#'} isExternal>
          <Image
            src={data.image ?? ''}
            alt={`${data.title} image`}
            fallbackSrc='/fallback.webp'
            height='150px'
            maxWidth='400px'
          />
        </Link>
      </Center>
      <Heading as='h3' size={{ base: 'md', md: 'lg' }} py={2}>
        {data.title}
      </Heading>
      <Text fontSize={{ base: 'sm', md: 'md' }} wordBreak='break-word'>
        {replaceDescription(data.description ?? '')}
      </Text>
    </>
  );
};

const replaceDescription = (description: string) => {
  const urlReplaced = replace(
    description,
    /(https?:\/\/[\w/:%#\$&\?\(\)~\.=\+\-]+)/g,
    (match, i) => {
      return (
        <Fragment key={i}>
          <br />
          <Link href={match} isExternal color='teal.700' fontStyle='italic'>
            {match} <FiExternalLink />
          </Link>
          <br />
        </Fragment>
      );
    },
  );
  return urlReplaced;
};

export default CardView;
