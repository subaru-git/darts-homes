import React, { FC, useRef } from 'react';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from '@chakra-ui/react';
import { LineIcon, LineShareButton, XIcon, TwitterShareButton } from 'react-share';

type RoundOverDialogProps = {
  isOpen: boolean;
  result: string;
  onClose: () => void;
  onNewGame: () => void;
};

const RoundOverDialog: FC<RoundOverDialogProps> = ({ isOpen, result, onClose, onNewGame }) => {
  const cancelRef = useRef<HTMLButtonElement>(null);
  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      size={{ base: 'xs', md: 'md' }}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize={'lg'} fontWeight={'bold'}>
            Congratulations 🎉
          </AlertDialogHeader>
          <AlertDialogBody>
            <div className='flex flex-col gap-3'>
              <span className='whitespace-pre-wrap'>{result}</span>
              <div className='flex justify-center gap-2'>
                <TwitterShareButton title={`${result}\n`} url={'http://darts.homes'}>
                  <XIcon size={32} round />
                </TwitterShareButton>
                <LineShareButton title={`${result}\n`} url={'http://darts.homes'}>
                  <LineIcon size={32} round />
                </LineShareButton>
              </div>
            </div>
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button
              colorScheme={'gray'}
              ml={3}
              onClick={onClose}
              ref={cancelRef}
              aria-label={'cancel'}
            >
              Cancel
            </Button>
            <Button colorScheme='teal' ml={3} onClick={onNewGame} aria-label={'new game'}>
              New Game
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default RoundOverDialog;
