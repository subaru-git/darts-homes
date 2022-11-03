import React, { FC, useRef } from 'react';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Flex,
  Text,
} from '@chakra-ui/react';
import { TwitterShareButton, TwitterIcon, LineShareButton, LineIcon } from 'react-share';
import { useDoubleTroubleGame } from '@/contexts/DoubleTroubleGameContext';

type DoubleTroubleRoundOverDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  onNewGame: () => void;
};

const DoubleTroubleRoundOverDialog: FC<DoubleTroubleRoundOverDialogProps> = ({
  isOpen,
  onClose,
  onNewGame,
}) => {
  const cancelRef = useRef<HTMLButtonElement>(null);
  const game = useDoubleTroubleGame();
  if (!game) return null;
  const result = `Total: ${game.getGameResult().result}`;
  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      size={{ base: 'xs', md: 'md' }}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize='lg' fontWeight='bold'>
            Congratulations 🎉
          </AlertDialogHeader>
          <AlertDialogBody>
            <Flex direction='column' gap={3}>
              <Text whiteSpace='pre-wrap'>{result}</Text>
              <Flex justify='center' gap={2}>
                <TwitterShareButton title={result} url='http://darts.homes'>
                  <TwitterIcon size={32} round />
                </TwitterShareButton>
                <LineShareButton title={result} url='http://darts.homes'>
                  <LineIcon size={32} round />
                </LineShareButton>
              </Flex>
            </Flex>
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button colorScheme='gray' ml={3} onClick={onClose} ref={cancelRef} aria-label='cancel'>
              Cancel
            </Button>
            <Button colorScheme='teal' ml={3} onClick={onNewGame} aria-label='new game'>
              New Game
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default DoubleTroubleRoundOverDialog;
