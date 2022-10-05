import React, { FC } from 'react'
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
} from '@chakra-ui/react'
import { FiSettings } from 'react-icons/fi'
import CricketNumberCountDescription from './CricketNumberCountDescription'

type CricketNumberCountSettingsProps = {
  onNewGame: (targetCount: number) => void
}

const CricketNumberCountSettings: FC<CricketNumberCountSettingsProps> = ({ onNewGame }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [targetCount, setTargetCount] = React.useState(10)
  return (
    <>
      <Button leftIcon={<FiSettings />} aria-label='setting' variant='ghost' onClick={onOpen}>
        Settings
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
                onNewGame(targetCount)
                onClose()
              }}
            >
              New Game
            </Button>
            <Button variant='ghost' onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default CricketNumberCountSettings
