import React, { FC } from 'react';
import { Grid, Text } from '@chakra-ui/react';

type TargetsProps = {
  count: number;
  targets: number[];
  isFinished: boolean;
};

const Targets: FC<TargetsProps> = ({ count, targets, isFinished }) => {
  const rest = () => {
    const t = isFinished ? targets : targets.slice(0, -1);
    return new Array(count).fill(' - ').map((_, i) => t[i] ?? '-');
  };
  return (
    <Grid
      templateColumns={{ base: `repeat(${count + 2}, 25px)`, md: `repeat(${count + 2}, 38px)` }}
      gap={1}
      textAlign='center'
    >
      <Text fontWeight='bold' fontSize={{ base: 'sm', md: 'lg' }} color='gray.500'>
        {'['}
      </Text>
      {rest().map((t, i) => (
        <Text key={i} fontWeight='bold' fontSize={{ base: 'sm', md: 'lg' }} color='gray.500'>
          {t}
        </Text>
      ))}
      <Text fontWeight='bold' fontSize={{ base: 'sm', md: 'lg' }} color='gray.500'>
        {']'}
      </Text>
    </Grid>
  );
};

export default Targets;
