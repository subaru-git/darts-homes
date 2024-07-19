'use client';
import React, { FC, useState } from 'react';
import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
} from '@chakra-ui/react';
import NewGameModal from '@/components/NewGameModal';

type NewGameProps = {
  onNewGame: (targetCount: number) => void;
  currentTargetCount: number;
  isFinished?: boolean;
};

const NewGame: FC<NewGameProps> = ({ onNewGame, currentTargetCount, isFinished = false }) => {
  const [targetCount, setTargetCount] = useState(currentTargetCount);
  const format = (n: number) =>
    n === 10 ? `${n} - (recommended)` : n === currentTargetCount ? `${n} - (current)` : n;
  const parse = (s: string) => Number(s.replace(/\D/g, ''));
  return (
    <NewGameModal
      onNewGame={() => onNewGame(targetCount)}
      settings={
        <>
          <Text fontSize='sm'>Target Count</Text>
          <NumberInput
            defaultValue={targetCount}
            onChange={(value) => setTargetCount(parse(value))}
            value={format(targetCount)}
            aria-label='target count'
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </>
      }
      isFinished={isFinished}
    />
  );
};

export default NewGame;
