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
  kind: GameKind
}

const RoundScoreButton: FC<RoundScoreButtonProps> = ({
  isFinished,
  disabled,
  onRoundChange,
  onRoundOver,
  kind,
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
          kind={kind}
        />
      ) : (
        <DesktopRoundScoreButton
          isFinished={isFinished}
          disabled={disabled}
          onRoundChange={onRoundChange}
          onRoundOver={onRoundOver}
          kind={kind}
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
  kind,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      {!isFinished ? (
        <Button
          colorScheme='green'
          w='145px'
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
            w='145px'
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
            kind={kind}
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
  kind,
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
            kind={kind}
          />
        </>
      )}
    </>
  )
}

export default RoundScoreButton
