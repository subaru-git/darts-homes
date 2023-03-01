import React, { FC, useEffect } from 'react';
import { Grid, GridItem, Text, IconButton } from '@chakra-ui/react';
import { VscTrash } from 'react-icons/vsc';
import RoundScoreButton from '@/components/RoundScoreButton';

type RoundScoreProps = {
  scores: string[];
  isFinished: boolean;
  result: string;
  keyboard?: boolean;
  onClear: () => void;
  onRoundChange: () => void;
  onRoundOver: () => void;
};

const RoundScore: FC<RoundScoreProps> = ({
  scores,
  isFinished,
  result,
  keyboard = false,
  onClear,
  onRoundChange,
  onRoundOver,
}) => {
  useEffect(() => {
    if (!keyboard) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Backspace' || e.key === 'Delete' || e.key === 'Escape') onClear();
      if (e.key === 'Enter' && !isFinished) onRoundChange();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [keyboard, onClear, onRoundChange, isFinished]);
  return (
    <Grid
      templateColumns={'repeat(4, 1fr)'}
      alignItems={'center'}
      gap={2}
      height={{ base: 30, md: 54 }}
    >
      {[...Array(3)].map((_, i) => (
        <Text
          key={i}
          fontSize={{ base: 'xl', md: '4xl' }}
          textAlign={'center'}
          color={'gray.500'}
          fontStyle={'italic'}
          fontWeight={'bold'}
        >
          {scores[i] === '0' ? '-' : scores[i]}
        </Text>
      ))}
      <Grid templateColumns='repeat(2, auto)' columnGap={2}>
        <GridItem>
          <IconButton
            size={{ base: 'sm', md: 'md' }}
            icon={<VscTrash />}
            colorScheme={'blue'}
            onClick={() => onClear()}
            disabled={scores.length === 0}
            aria-label={'clear scores'}
          ></IconButton>
        </GridItem>
        <RoundScoreButton
          onRoundChange={onRoundChange}
          onRoundOver={onRoundOver}
          result={result}
          isFinished={isFinished}
          disabled={scores.length !== 3}
        />
      </Grid>
    </Grid>
  );
};

export default RoundScore;
