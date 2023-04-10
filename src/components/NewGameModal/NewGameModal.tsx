import React, { FC, ReactNode } from 'react';
import {
  useBreakpointValue,
  useDisclosure,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { FiSettings } from 'react-icons/fi';
import { TbAlertTriangle } from 'react-icons/tb';
import Button from '@/atoms/Button';
import IconButton from '@/atoms/IconButton';
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
    <div className='flex h-fit w-fit flex-nowrap items-start p-[9px]'>
      {isMd ? (
        <IconButton color='ghost' onClick={onOpen} aria-label='setting'>
          <div className='flex items-center gap-1'>
            <FiSettings size={18} />
            <span>New Game</span>
          </div>
        </IconButton>
      ) : (
        <IconButton color='ghost' onClick={onOpen} aria-label='setting'>
          <FiSettings size={18} />
        </IconButton>
      )}
      <Modal isOpen={isOpen} onClose={onClose} size={'2xl'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Start New Game?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className='flex flex-col gap-4'>
              {!isFinished ? (
                <div
                  className='items-center rounded-full bg-yellow-100 p-2 text-sm leading-none text-gray-600'
                  role='warning'
                >
                  <div className='flex items-center gap-1'>
                    <TbAlertTriangle className='text-orange-600' size={20} />
                    <span className='text-sm'>{t.warning.newgame}</span>
                  </div>
                </div>
              ) : null}
              <div>{settings}</div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button className='mr-3' color='ghost' onClick={onClose} aria-label='cancel'>
              Cancel
            </Button>
            <Button
              color='blue-fill'
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
    </div>
  );
};

export default NewGameModal;
