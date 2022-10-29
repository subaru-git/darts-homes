import React, { FC } from 'react'
import { css } from '@emotion/react'

type CountBullButtonsProps = {
  onCount: (n: point) => void
  disabled?: boolean
}

const CountBullButtons: FC<CountBullButtonsProps> = ({ onCount, disabled = false }) => {
  return (
    <div css={styles}>
      <div css={[disableStyle, disabled ? null : css({ display: 'none' })]} />
      <input
        css={outerBullStyles}
        type='button'
        onClick={() => onCount('S-BULL')}
        disabled={disabled}
      />
      <input
        css={inBullStyles}
        type='button'
        onClick={() => onCount('D-BULL')}
        disabled={disabled}
      />
      <input css={nonBullStyles} type='button' onClick={() => onCount('0')} disabled={disabled} />
    </div>
  )
}

const styles = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '40vw',
  Width: '40vw',
  maxWidth: '40vh',
  maxHeight: '40vh',
})
const inBullStyles = css({
  position: 'absolute',
  borderRadius: '100%',
  height: '15vw',
  width: '15vw',
  maxWidth: '15vh',
  maxHeight: '15vh',
  color: 'white',
  '-webkit-appearance': 'none',
  backgroundImage: 'radial-gradient(circle, #111111 0% 40%, #666666 90% 100%)',
  zIndex: 3,
})
const outerBullStyles = css({
  position: 'absolute',
  borderRadius: '100%',
  height: '30vw',
  width: '30vw',
  maxWidth: '30vh',
  maxHeight: '30vh',
  color: 'white',
  verticalAlign: 'text-top',
  backgroundImage: 'radial-gradient(circle, #ff2222 0% 60%, #ff6666 90% 100%)',
  '-webkit-appearance': 'none',
  zIndex: 2,
})
const nonBullStyles = css({
  height: '40vw',
  width: '40vw',
  '-webkit-appearance': 'none',
  backgroundImage: 'radial-gradient(circle, #777777 0% 70%, #666666 90% 100%)',
  zIndex: 1,
  maxWidth: '40vh',
  maxHeight: '40vh',
})
const disableStyle = css({
  backgroundColor: '#222222',
  width: '40vw',
  height: '40vw',
  position: 'absolute',
  zIndex: 4,
  opacity: '50%',
  maxWidth: '40vh',
  maxHeight: '40vh',
})

export default CountBullButtons
