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
import { GameResultModel } from '@/db/db'
import { deleteGameHistory } from '@/lib/GameHistoryManager/GameHistory'

type HistoryDeleteAlertProps = {
  history: GameResultModel | undefined
  isOpen: boolean
  onClose: () => void
}

const HistoryDeleteAlert: FC<HistoryDeleteAlertProps> = ({ history, isOpen, onClose }) => {
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
            <Text mt={4}>
              {history.game}:{' '}
              {new Date(history.playedAt).toLocaleString('ja-JP', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
              })}
            </Text>
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button colorScheme='gray' ml={3} onClick={onClose} ref={cancelRef}>
              Cancel
            </Button>
            <Button
              colorScheme='red'
              onClick={() => {
                deleteGameHistory(history.id)
                onClose()
              }}
              ml={3}
            >
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  )
}

export default HistoryDeleteAlert
