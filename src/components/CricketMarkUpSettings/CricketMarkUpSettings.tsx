import React, { FC } from 'react'
import { Button, IconButton, useBreakpointValue, useDisclosure } from '@chakra-ui/react'
import { FiSettings } from 'react-icons/fi'
import CricketMarkUpSettingAlert from '../CricketMarkUpSettingAlert'
import CricketMarkUpSettingModal from '../CricketMarkUpSettingModal'

type CricketMarkUpSettingsProps = {
  onNewGame: (targetCount: number, save: boolean) => void
  targetCount: number
  isFinished: boolean
}

const CricketMarkUpSettings: FC<CricketMarkUpSettingsProps> = ({
  onNewGame,
  targetCount,
  isFinished,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { isOpen: isAlertOpen, onOpen: onAlertOpen, onClose: onAlertClose } = useDisclosure()
  const [innerTargetCount, setInnerTargetCount] = React.useState(targetCount)
  const isMd = useBreakpointValue({ base: false, md: true })
  return (
    <>
      {isMd ? (
        <Button leftIcon={<FiSettings />} aria-label='setting' variant='ghost' onClick={onOpen}>
          New Game
        </Button>
      ) : (
        <IconButton aria-label='New Game' icon={<FiSettings />} variant='ghost' onClick={onOpen} />
      )}
      <CricketMarkUpSettingModal
        isOpen={isOpen}
        onClose={onClose}
        targetCount={innerTargetCount}
        onNewGame={(targetCount) => {
          if (!isFinished) {
            setInnerTargetCount(targetCount)
            onAlertOpen()
            return
          }
          onNewGame(targetCount, true)
          onClose()
        }}
      />
      <CricketMarkUpSettingAlert
        isOpen={isAlertOpen}
        onClose={onAlertClose}
        onNewGame={() => {
          onNewGame(innerTargetCount, false)
          onClose()
        }}
      />
    </>
  )
}

export default CricketMarkUpSettings
