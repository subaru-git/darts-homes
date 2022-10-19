import React, { FC, useRef } from 'react'
import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  useDisclosure,
  Text,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogCloseButton,
  AlertDialogBody,
  AlertDialogFooter,
} from '@chakra-ui/react'
import { FiSettings } from 'react-icons/fi'
import CricketNumberCountDescription from '@/components/CricketNumberCountDescription'
import useLocale from '@/hooks/locale'

type CricketNumberCountSettingsProps = {
  onNewGame: (targetCount: number, save: boolean) => void
  isFinished: boolean
}

const CricketNumberCountSettings: FC<CricketNumberCountSettingsProps> = ({
  onNewGame,
  isFinished,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { isOpen: isAlertOpen, onOpen: onAlertOpen, onClose: onAlertClose } = useDisclosure()
  const cancelRef = useRef<HTMLButtonElement>(null)
  const [targetCount, setTargetCount] = React.useState(10)
  const { t } = useLocale()
  return (
    <>
      <Button leftIcon={<FiSettings />} aria-label='setting' variant='ghost' onClick={onOpen}>
        New Game
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size='2xl'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Cricket Number Count Settings</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box py={4}>
              <CricketNumberCountDescription />
            </Box>
            <Text fontSize='sm'>Target Count</Text>
            <NumberInput
              defaultValue={targetCount}
              onChange={(value) => setTargetCount(parseInt(value))}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme='blue'
              mr={3}
              onClick={() => {
                if (!isFinished) {
                  onAlertOpen()
                  return
                }
                onNewGame(targetCount, true)
                onClose()
              }}
            >
              New Game
            </Button>
            <Button variant='ghost' onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
          <AlertDialog
            isOpen={isAlertOpen}
            onClose={onAlertClose}
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
                    onNewGame(targetCount, false)
                    onAlertClose()
                    onClose()
                  }}
                >
                  OK
                </Button>
                <Button onClick={onAlertClose} ref={cancelRef} ml={3}>
                  Cancel
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </ModalContent>
      </Modal>
    </>
  )
}

export default CricketNumberCountSettings
