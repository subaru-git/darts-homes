import React, { FC, ReactNode } from 'react';
import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useBreakpointValue,
} from '@chakra-ui/react';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import IconButton from '@/atoms/IconButton';

type DescriptionModalProps = {
  header: string;
  description: ReactNode | ReactNode[];
  game?: boolean;
};

const DescriptionModal: FC<DescriptionModalProps> = ({ header, description, game = true }) => {
  const { isOpen, onToggle } = useDisclosure();
  const isMd = useBreakpointValue({ base: false, md: true });
  return (
    <div className='flex h-fit w-fit flex-nowrap items-start p-1'>
      {isMd ? (
        <IconButton aria-label='what is this game?' color='ghost' onClick={onToggle}>
          <div className='flex items-center gap-1'>
            <AiOutlineInfoCircle size={20} />
            <span>{`What is this${game ? ' game' : ''}?`}</span>
          </div>
        </IconButton>
      ) : (
        <IconButton aria-label='what is new game?' color='ghost' onClick={onToggle}>
          <div className='flex items-start'>
            <AiOutlineInfoCircle size={20} />
          </div>
        </IconButton>
      )}
      <Modal isOpen={isOpen} onClose={onToggle} size='2xl'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{header}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{description}</ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default DescriptionModal;
