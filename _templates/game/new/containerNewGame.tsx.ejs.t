---
to: src/containers/<%= name %>/NewGame/NewGame.tsx
---
import React, { FC } from 'react';
import { Button, IconButton, useBreakpointValue, useDisclosure } from '@chakra-ui/react';
import { FiSettings } from 'react-icons/fi';
import NewGameAlert from '@/components/NewGameAlert';

type NewGameProps = {
  onNewGame: () => void;
};

const NewGame: FC<NewGameProps> = ({ onNewGame }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMd = useBreakpointValue({ base: false, md: true });
  return (
    <>
      {isMd ? (
        <Button leftIcon={<FiSettings />} aria-label='setting' variant='ghost' onClick={onOpen}>
          New Game
        </Button>
      ) : (
        <IconButton aria-label='New Game' icon={<FiSettings />} variant='ghost' onClick={onOpen} />
      )}
      <NewGameAlert isOpen={isOpen} onClose={onClose} onNewGame={onNewGame} />
    </>
  );
};

export default NewGame;
