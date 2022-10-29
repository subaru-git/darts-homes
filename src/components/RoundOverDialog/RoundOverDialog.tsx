import React, { FC } from 'react'
import CricketMarkUpRoundOverDialog from '../CricketMarkUpRoundOverDialog'
import EaglesEyeRoundOverDialog from '../EaglesEyeRoundOverDialog'

type RoundOverDialogProps = {
  isOpen: boolean
  onClose: () => void
  onNewGame: () => void
  kind: GameKind
}

const RoundOverDialog: FC<RoundOverDialogProps> = ({ isOpen, onClose, onNewGame, kind }) => {
  if (kind === 'Cricket MarkUp')
    return <CricketMarkUpRoundOverDialog isOpen={isOpen} onClose={onClose} onNewGame={onNewGame} />
  if (kind === 'EaglesEye')
    return <EaglesEyeRoundOverDialog isOpen={isOpen} onClose={onClose} onNewGame={onNewGame} />
  return null
}

export default RoundOverDialog
