import React, { FC, ReactNode } from 'react';
import {
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  IconButton,
  useBreakpointValue,
} from '@chakra-ui/react';
import { GrCircleInformation } from 'react-icons/gr';

type DescriptionModalProps = {
  header: string;
  description: ReactNode | ReactNode[];
};

const DescriptionModal: FC<DescriptionModalProps> = ({ header, description }) => {
  const { isOpen, onToggle } = useDisclosure();
  const isMd = useBreakpointValue({ base: false, md: true });
  return (
    <>
      {isMd ? (
        <Button
          leftIcon={<GrCircleInformation />}
          aria-label='what is this game?'
          variant='ghost'
          onClick={onToggle}
        >
          What is this game?
        </Button>
      ) : (
        <IconButton
          aria-label='what is new game?'
          icon={<GrCircleInformation size='20px' />}
          variant='ghost'
          onClick={onToggle}
        />
      )}
      <Modal isOpen={isOpen} onClose={onToggle} size='2xl'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{header}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{description}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DescriptionModal;
