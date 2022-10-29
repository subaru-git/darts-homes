import React, { FC, useRef } from 'react'
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Text,
} from '@chakra-ui/react'

type HistoryDeleteAlertProps = {
  message: string
  isOpen: boolean
  onClose: () => void
  onDelete: () => void
}

const HistoryDeleteAlert: FC<HistoryDeleteAlertProps> = ({
  message,
  isOpen,
  onClose,
  onDelete,
}) => {
  const cancelRef = useRef<HTMLButtonElement>(null)
  if (!history) return null
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
            {"Are you sure? You can't undo this action afterward."}
            <Text mt={4}>{message}</Text>
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button colorScheme='gray' ml={3} onClick={onClose} ref={cancelRef}>
              Cancel
            </Button>
            <Button colorScheme='red' onClick={onDelete} ml={3}>
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  )
}

export default HistoryDeleteAlert
