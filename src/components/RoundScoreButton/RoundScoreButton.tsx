import React, { FC } from 'react';
import { Button, IconButton, useBreakpointValue, useDisclosure } from '@chakra-ui/react';
import { GiPartyPopper } from 'react-icons/gi';
import { MdOutlineChangeCircle } from 'react-icons/md';
import RoundOverDialog from '../RoundOverDialog';

type RoundScoreButtonProps = {
  isFinished: boolean;
  disabled: boolean;
  result: string;
  onRoundChange: () => void;
  onRoundOver: () => void;
};

const RoundScoreButton: FC<RoundScoreButtonProps> = ({
  isFinished,
  disabled,
  result,
  onRoundChange,
  onRoundOver,
}) => {
  const isMd = useBreakpointValue({ base: false, md: true });
  return (
    <>
      {!isMd ? (
        <MobileRoundScoreButton
          isFinished={isFinished}
          disabled={disabled}
          onRoundChange={onRoundChange}
          onRoundOver={onRoundOver}
          result={result}
        />
      ) : (
        <DesktopRoundScoreButton
          isFinished={isFinished}
          disabled={disabled}
          onRoundChange={onRoundChange}
          onRoundOver={onRoundOver}
          result={result}
        />
      )}
    </>
  );
};

const DesktopRoundScoreButton: FC<RoundScoreButtonProps> = ({
  isFinished,
  disabled,
  result,
  onRoundChange,
  onRoundOver,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {!isFinished ? (
        <Button
          colorScheme={'green'}
          width={'auto'}
          onClick={() => onRoundChange()}
          disabled={disabled}
          aria-label={'round change'}
        >
          Round Change
        </Button>
      ) : (
        <>
          <Button
            colorScheme={'orange'}
            w={'auto'}
            onClick={() => onOpen()}
            aria-label={'round over'}
          >
            Round Over
          </Button>
          <RoundOverDialog
            isOpen={isOpen}
            onClose={onClose}
            onNewGame={() => {
              onRoundOver();
              onClose();
            }}
            result={result}
          />
        </>
      )}
    </>
  );
};

const MobileRoundScoreButton: FC<RoundScoreButtonProps> = ({
  isFinished,
  disabled,
  result,
  onRoundChange,
  onRoundOver,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {!isFinished ? (
        <IconButton
          icon={<MdOutlineChangeCircle />}
          colorScheme={'green'}
          size={'sm'}
          width={'auto'}
          onClick={() => onRoundChange()}
          disabled={disabled}
          aria-label={'round change'}
        />
      ) : (
        <>
          <IconButton
            icon={<GiPartyPopper />}
            colorScheme={'orange'}
            size={'sm'}
            width={'auto'}
            onClick={() => onOpen()}
            aria-label={'round over'}
          />
          <RoundOverDialog
            isOpen={isOpen}
            onClose={onClose}
            onNewGame={() => {
              onRoundOver();
              onClose();
            }}
            result={result}
          />
        </>
      )}
    </>
  );
};

export default RoundScoreButton;
