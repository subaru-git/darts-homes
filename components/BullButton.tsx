import React, { FC } from 'react'
import { css } from '@emotion/react'

type BullButtonProps = {
  onScore: (n: point) => void
  disabled?: boolean
}

const BullButton: FC<BullButtonProps> = ({ onScore, disabled = false }) => {
  return (
    <div css={styles}>
      <input
        css={outerBullStyles}
        type='button'
        onClick={() => onScore('S-BULL')}
        disabled={disabled}
      />
      <input
        css={inBullStyles}
        type='button'
        onClick={() => onScore('D-BULL')}
        disabled={disabled}
      />
      <input css={nonBullStyles} type='button' onClick={() => onScore('0')} disabled={disabled} />
    </div>
  )
}

const styles = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '50vh',
  Width: '50vh',
})
const inBullStyles = css({
  borderRadius: '100%',
  height: '20vh',
  width: '20vh',
  color: 'white',
  backgroundColor: 'black',
  zIndex: 3,
})
const outerBullStyles = css({
  position: 'absolute',
  borderRadius: '100%',
  height: '40vh',
  width: '40vh',
  color: 'white',
  verticalAlign: 'text-top',
  backgroundColor: 'red',
  zIndex: 2,
})
const nonBullStyles = css({
  position: 'absolute',
  height: '50vh',
  width: '50vh',
  backgroundColor: 'gray',
  border: 'solid 1px black',
  zIndex: 1,
})

export default BullButton
