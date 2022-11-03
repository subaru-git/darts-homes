import React, { FC, useRef } from 'react';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Text,
} from '@chakra-ui/react';
import useLocale from '@/hooks/locale';

type HistoryDeleteAlertProps = {
  message: string;
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
};

const HistoryDeleteAlert: FC<HistoryDeleteAlertProps> = ({
  message,
  isOpen,
  onClose,
  onDelete,
}) => {
  const cancelRef = useRef<HTMLButtonElement>(null);
  const { t } = useLocale();
  if (!history) return null;
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
            Delete History
          </AlertDialogHeader>
          <AlertDialogBody>
            {t.warning.deletehistory}
            <Text mt={4}>{message}</Text>
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button colorScheme='gray' ml={3} onClick={onClose} ref={cancelRef} aria-label='cancel'>
              Cancel
            </Button>
            <Button colorScheme='red' onClick={onDelete} ml={3} aria-label='delete'>
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default HistoryDeleteAlert;
