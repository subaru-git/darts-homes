import React, { FC } from 'react'
import { Button, IconButton, useBreakpointValue, useDisclosure } from '@chakra-ui/react'
import { GiPartyPopper } from 'react-icons/gi'
import { MdOutlineChangeCircle } from 'react-icons/md'
import RoundOverDialog from '../RoundOverDialog'

type RoundScoreButtonProps = {
  isFinished: boolean
  disabled: boolean
  onRoundChange: () => void
  onRoundOver: () => void
}

const RoundScoreButton: FC<RoundScoreButtonProps> = ({
  isFinished,
  disabled,
  onRoundChange,
  onRoundOver,
}) => {
  const isMd = useBreakpointValue({ base: false, md: true })
  return (
    <>
      {!isMd ? (
        <MobileRoundScoreButton
          isFinished={isFinished}
          disabled={disabled}
          onRoundChange={onRoundChange}
          onRoundOver={onRoundOver}
        />
      ) : (
        <DesktopRoundScoreButton
          isFinished={isFinished}
          disabled={disabled}
          onRoundChange={onRoundChange}
          onRoundOver={onRoundOver}
        />
      )}
    </>
  )
}

const DesktopRoundScoreButton: FC<RoundScoreButtonProps> = ({
  isFinished,
  disabled,
  onRoundChange,
  onRoundOver,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      {!isFinished ? (
        <Button
          colorScheme='green'
          w='100%'
          onClick={() => {
            onRoundChange()
          }}
          disabled={disabled}
        >
          Round Change
        </Button>
      ) : (
        <>
          <Button
            colorScheme='orange'
            w='100%'
            onClick={() => {
              onOpen()
            }}
          >
            Round Over
          </Button>
          <RoundOverDialog
            isOpen={isOpen}
            onClose={onClose}
            onNewGame={() => {
              onRoundOver()
              onClose()
            }}
          />
        </>
      )}
    </>
  )
}

const MobileRoundScoreButton: FC<RoundScoreButtonProps> = ({
  isFinished,
  disabled,
  onRoundChange,
  onRoundOver,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      {!isFinished ? (
        <IconButton
          aria-label='Round Change'
          icon={<MdOutlineChangeCircle />}
          colorScheme='green'
          size='sm'
          width='100%'
          onClick={() => {
            onRoundChange()
          }}
          disabled={disabled}
        />
      ) : (
        <>
          <IconButton
            aria-label='Round Over'
            icon={<GiPartyPopper />}
            colorScheme='orange'
            size='sm'
            width='100%'
            onClick={() => {
              onOpen()
            }}
          />
          <RoundOverDialog
            isOpen={isOpen}
            onClose={onClose}
            onNewGame={() => {
              onRoundOver()
              onClose()
            }}
          />
        </>
      )}
    </>
  )
}

export default RoundScoreButton
