import React, { FC } from 'react';
import NewGameModal from '@/components/NewGameModal';

type NewGameProps = {
  onNewGame: () => void;
  isFinished?: boolean;
};

const NewGame: FC<NewGameProps> = ({ onNewGame, isFinished = false }) => {
  return <NewGameModal onNewGame={() => onNewGame()} settings={<></>} isFinished={isFinished} />;
};

export default NewGame;
