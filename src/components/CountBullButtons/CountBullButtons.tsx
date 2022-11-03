import React, { FC } from 'react';
import { css } from '@emotion/react';

type CountBullButtonsProps = {
  onCount: (n: point) => void;
  disabled?: boolean;
};

const CountBullButtons: FC<CountBullButtonsProps> = ({ onCount, disabled = false }) => {
  return (
    <div css={styles}>
      <div css={[disableStyle, disabled ? null : css({ display: 'none' })]} />
      <button
        css={outerBullStyles}
        onClick={() => onCount('S-BULL')}
        disabled={disabled}
        aria-label='outer bull'
      />
      <button
        css={innerBullStyles}
        onClick={() => onCount('D-BULL')}
        disabled={disabled}
        aria-label='inner bull'
      />
      <button
        css={nonBullStyles}
        onClick={() => onCount('0')}
        disabled={disabled}
        aria-label='non bull'
      />
    </div>
  );
};

const styles = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '40vw',
  Width: '40vw',
  maxWidth: '40vh',
  maxHeight: '40vh',
});
const innerBullStyles = css({
  position: 'absolute',
  borderRadius: '100%',
  height: '15vw',
  width: '15vw',
  maxWidth: '15vh',
  maxHeight: '15vh',
  color: 'white',
  backgroundImage: 'radial-gradient(circle, #111111 0% 40%, #666666 90% 100%)',
  zIndex: 3,
  WebkitAppearance: 'none',
  '&:hover': {
    backgroundImage: 'radial-gradient(circle, #111111 0% 40%, #444444 90% 100%)',
  },
  '&:active::after': {
    content: '""',
    position: 'absolute',
    borderRadius: '100%',
    height: '15vw',
    width: '15vw',
    maxWidth: '15vh',
    maxHeight: '15vh',
    marginTop: '-50%',
    marginLeft: '-50%',
    verticalAlign: 'text-top',
    background: '#777777',
    opacity: 0,
    animation: 'ripple-in 0.3s ease-out',
  },
  '@keyframes ripple-in': {
    '0%': {
      opacity: 0.8,
      transform: 'scale(1.3)',
    },
    '100%': {
      opacity: 0,
      transform: 'scale(0.0)',
    },
  },
});
const outerBullStyles = css({
  position: 'absolute',
  borderRadius: '100%',
  height: '30vw',
  width: '30vw',
  maxWidth: '30vh',
  maxHeight: '30vh',
  verticalAlign: 'text-top',
  backgroundImage: 'radial-gradient(circle, #ff2222 0% 60%, #ff6666 90% 100%)',
  WebkitAppearance: 'none',
  zIndex: 2,
  '&:hover': {
    backgroundImage: 'radial-gradient(circle, #ff0000 0% 60%, #ff4444 90% 100%)',
  },
  '&:active::after': {
    content: '""',
    position: 'absolute',
    borderRadius: '100%',
    height: '30vw',
    width: '30vw',
    maxWidth: '30vh',
    maxHeight: '30vh',
    marginTop: '-50%',
    marginLeft: '-50%',
    verticalAlign: 'text-top',
    background: '#dd7777',
    opacity: 0,
    animation: 'ripple-out 0.3s ease-out',
  },
  '@keyframes ripple-out': {
    '0%': {
      opacity: 0.8,
      transform: 'scale(0.6)',
    },
    '100%': {
      opacity: 0,
      transform: 'scale(1.3)',
    },
  },
});
const nonBullStyles = css({
  height: '40vw',
  width: '40vw',
  WebkitAppearance: 'none',
  backgroundImage: 'radial-gradient(circle, #777777 0% 70%, #666666 90% 100%)',
  zIndex: 1,
  maxWidth: '40vh',
  maxHeight: '40vh',
  '&:hover': {
    backgroundImage: 'radial-gradient(circle, #666666 0% 70%, #555555 90% 100%)',
  },
});
const disableStyle = css({
  backgroundColor: '#222222',
  width: '40vw',
  height: '40vw',
  position: 'absolute',
  zIndex: 4,
  opacity: '50%',
  maxWidth: '40vh',
  maxHeight: '40vh',
});

export default CountBullButtons;
