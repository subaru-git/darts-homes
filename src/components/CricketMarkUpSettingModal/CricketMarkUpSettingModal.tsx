import React, { FC } from 'react'
import {
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
  Text,
} from '@chakra-ui/react'

type CricketMarkUpSettingModalProps = {
  isOpen: boolean
  onClose: () => void
  targetCount: number
  onNewGame: (targetCount: number) => void
}

const CricketMarkUpSettingModal: FC<CricketMarkUpSettingModalProps> = ({
  isOpen,
  onClose,
  targetCount,
  onNewGame,
}) => {
  const [innerTargetCount, setInnerTargetCount] = React.useState(targetCount)
  return (
    <Modal isOpen={isOpen} onClose={onClose} size='2xl'>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Cricket Mark-Up Settings</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text fontSize='sm'>Target Count</Text>
          <NumberInput
            defaultValue={innerTargetCount}
            onChange={(value) => setInnerTargetCount(parseInt(value))}
            aria-label='target count'
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </ModalBody>
        <ModalFooter>
          <Button variant='ghost' onClick={onClose} aria-label='cancel' mr={3}>
            Cancel
          </Button>
          <Button
            colorScheme='blue'
            onClick={() => {
              onNewGame(innerTargetCount)
            }}
            aria-label='new game'
          >
            New Game
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default CricketMarkUpSettingModal
