import React, { FC } from 'react'
import BullButton from '@/components/BullButton'

type CountBullButtonsProps = {
  onCount: (count: point) => void
  disabled?: boolean
}

const CountBullButtons: FC<CountBullButtonsProps> = ({ onCount, disabled = false }) => {
  return (
    <>
      <BullButton onScore={(n) => onCount(n)} disabled={disabled} />
    </>
  )
}

export default CountBullButtons
