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
        <Button leftIcon={<FiSettings />} aria-label='setting' variant='ghost' onClick={onOpen}>
          New Game
        </Button>
      ) : (
        <IconButton aria-label='setting' icon={<FiSettings />} variant='ghost' onClick={onOpen} />
      )}
      <Modal isOpen={isOpen} onClose={onClose} size='2xl'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Start New Game?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction='column' gap={4}>
              {!isFinished ? (
                <Alert status='warning' fontSize={{ base: 'sm', md: 'md' }}>
                  <AlertIcon />
                  <Text>{t.warning.newgame}</Text>
                </Alert>
              ) : null}
              <Box>{settings}</Box>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button variant='ghost' onClick={onClose} aria-label='cancel' mr={3}>
              Cancel
            </Button>
            <Button
              colorScheme='blue'
              onClick={() => {
                onNewGame();
                onClose();
              }}
              aria-label='new game'
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
