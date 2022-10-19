import React, { FC, useRef } from 'react'
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from '@chakra-ui/react'
import useLocale from '@/hooks/locale'

type CricketNumberCountSettingAlertProps = {
  isOpen: boolean
  onClose: () => void
  onNewGame: () => void
}

const CricketNumberCountSettingAlert: FC<CricketNumberCountSettingAlertProps> = ({
  isOpen,
  onClose,
  onNewGame,
}) => {
  const cancelRef = useRef<HTMLButtonElement>(null)
  const { t } = useLocale()
  return (
    <AlertDialog
      isOpen={isOpen}
      onClose={onClose}
      leastDestructiveRef={cancelRef}
      blockScrollOnMount={false}
    >
      <AlertDialogOverlay />
      <AlertDialogContent>
        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
          Start New Game?
        </AlertDialogHeader>
        <AlertDialogCloseButton />
        <AlertDialogBody>{t.CRICKET_NUMBER_COUNT_START_NEW_GAME_WARNING}</AlertDialogBody>
        <AlertDialogFooter>
          <Button
            colorScheme='blue'
            ml={3}
            onClick={() => {
              onNewGame()
              onClose()
            }}
          >
            OK
          </Button>
          <Button onClick={onClose} ref={cancelRef} ml={3}>
            Cancel
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
export default CricketNumberCountSettingAlert
