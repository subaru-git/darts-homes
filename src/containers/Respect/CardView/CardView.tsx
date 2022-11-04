import React, { FC } from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';
import Card from '@/containers/Respect/Card';

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
              <Card data={item} />
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
              <Card data={item} />
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
              <Card data={item} />
            </div>
          ))}
        </Flex>
      </Box>
    </Flex>
  );
};

export default CardView;
