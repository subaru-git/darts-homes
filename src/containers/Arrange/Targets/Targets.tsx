import React, { FC } from 'react';
import { Grid, Text } from '@chakra-ui/react';

type TargetsProps = {
  count: number;
  targets: number[];
  isFinished?: boolean;
};

const Targets: FC<TargetsProps> = ({ count, targets, isFinished = false }) => {
  const rest = () => {
    const t = isFinished ? targets : targets.slice(0, -1);
    return new Array(count).fill(' - ').map((_, i) => t[i] ?? '-');
  };
  return (
    <Grid
      templateColumns={{
        base: `15px repeat(${count}, 27px) 15px`,
        md: `20px repeat(${count}, 38px) 20px`,
      }}
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
