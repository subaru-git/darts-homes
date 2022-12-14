import React, { FC, ReactNode } from 'react';
import {
  Button,
  IconButton,
  useBreakpointValue,
  useDisclosure,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Flex,
  Alert,
  AlertIcon,
  Box,
} from '@chakra-ui/react';
import { FiSettings } from 'react-icons/fi';
import useLocale from '@/hooks/locale';

type NewGameModalProps = {
  onNewGame: () => void;
  settings: ReactNode;
  isFinished: boolean;
};

const NewGameModal: FC<NewGameModalProps> = ({ onNewGame, settings, isFinished }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMd = useBreakpointValue({ base: false, md: true });
  const { t } = useLocale();
  return (
    <>
      {isMd ? (
        <Button leftIcon={<FiSettings />} variant={'ghost'} onClick={onOpen} aria-label={'setting'}>
          New Game
        </Button>
      ) : (
        <IconButton
          icon={<FiSettings />}
          variant={'ghost'}
          onClick={onOpen}
          aria-label={'setting'}
        />
      )}
      <Modal isOpen={isOpen} onClose={onClose} size={'2xl'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Start New Game?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction={'column'} gap={4}>
              {!isFinished ? (
                <Alert status={'warning'} fontSize={{ base: 'sm', md: 'md' }}>
                  <AlertIcon />
                  <Text>{t.warning.newgame}</Text>
                </Alert>
              ) : null}
              <Box>{settings}</Box>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button variant={'ghost'} onClick={onClose} mr={3} aria-label={'cancel'}>
              Cancel
            </Button>
            <Button
              colorScheme={'blue'}
              onClick={() => {
                onNewGame();
                onClose();
              }}
              aria-label={'new game'}
            >
              New Game
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default NewGameModal;
