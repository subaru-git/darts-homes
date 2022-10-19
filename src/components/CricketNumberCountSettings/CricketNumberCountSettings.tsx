import React, { FC } from 'react'
import { Button, useDisclosure } from '@chakra-ui/react'
import { FiSettings } from 'react-icons/fi'
import CricketNumberCountSettingAlert from '../CricketNumberCountSettingAlert'
import CricketNumberCountSettingModal from '../CricketNumberCountSettingModal'

type CricketNumberCountSettingsProps = {
  onNewGame: (targetCount: number, save: boolean) => void
  targetCount: number
  isFinished: boolean
}

const CricketNumberCountSettings: FC<CricketNumberCountSettingsProps> = ({
  onNewGame,
  targetCount,
  isFinished,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { isOpen: isAlertOpen, onOpen: onAlertOpen, onClose: onAlertClose } = useDisclosure()
  return (
    <>
      <Button leftIcon={<FiSettings />} aria-label='setting' variant='ghost' onClick={onOpen}>
        New Game
      </Button>
      <CricketNumberCountSettingModal
        isOpen={isOpen}
        onClose={onClose}
        targetCount={targetCount}
        onNewGame={(targetCount) => {
          if (!isFinished) {
            onAlertOpen()
            return
          }
          onNewGame(targetCount, true)
          onClose()
        }}
      />
      <CricketNumberCountSettingAlert
        isOpen={isAlertOpen}
        onClose={onAlertClose}
        onNewGame={() => {
          onNewGame(targetCount, false)
          onClose()
        }}
      />
    </>
  )
}

export default CricketNumberCountSettings
