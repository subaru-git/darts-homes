'use client';
import React, { FC, useState } from 'react';
import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from '@chakra-ui/react';
import NewGameModal from '@/components/NewGameModal';

type NewGameProps = {
  onNewGame: (round: number) => void;
  currentRound: number;
  isFinished?: boolean;
};

const NewGame: FC<NewGameProps> = ({ onNewGame, currentRound, isFinished = false }) => {
  const [round, setRound] = useState(currentRound);
  const format = (n: number) =>
    n === 20 ? `${n} - (recommended)` : n === currentRound ? `${n} - (current)` : n;
  const parse = (s: string) => Number(s.replace(/\D/g, ''));
  return (
    <NewGameModal
      onNewGame={() => onNewGame(round)}
      settings={
        <>
          <span className='text-sm'>Round</span>
          <NumberInput
            defaultValue={round}
            onChange={(value) => setRound(parse(value))}
            value={format(round)}
            min={1}
            aria-label='round setting'
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
