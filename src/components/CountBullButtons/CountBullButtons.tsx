import React, { FC } from 'react'
import { css } from '@emotion/react'

type CountBullButtonsProps = {
  onCount: (n: point) => void
  disabled?: boolean
}

const CountBullButtons: FC<CountBullButtonsProps> = ({ onCount, disabled = false }) => {
  return (
    <div css={styles}>
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

export default CountBullButtons
