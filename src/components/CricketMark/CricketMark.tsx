'use client';
import React, { FC } from 'react';
import { useBreakpointValue } from '@chakra-ui/react';
import { css } from '@emotion/react';

type CricketMarkProps = {
  count: number;
};

const CricketMark: FC<CricketMarkProps> = ({ count }) => {
  const isMd = useBreakpointValue({ base: false, md: true });
  return (
    <>
      {count === 3 ? (
        <div css={[threeMarkStyles, isMd ? threeMarkStylesMd : null]} />
      ) : count === 2 ? (
        <div css={[twoMarkStyles, isMd ? twoMarkStylesMd : null]} />
      ) : count === 1 ? (
        <div css={[oneMarkStyles, isMd ? oneMarkStylesMd : null]} />
      ) : null}
    </>
  );
};

const oneMarkStyles = css({
  display: 'inline-block',
  position: 'relative',
  width: '16px',
  height: '16px',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '2.5px',
    height: '22px',
    background: 'black',
    borderRadius: '1.25px',
    transform: 'translate(-50%, -50%) rotate(-45deg)',
  },
});
const oneMarkStylesMd = css({
  width: '32px',
  height: '32px',
  '&::after': {
    width: '5px',
    height: '44px',
    borderRadius: '2.5px',
  },
});

const twoMarkStyles = css({
  display: 'inline-block',
  position: 'relative',
  width: '16px',
  height: '16px',
  '&::before, &::after': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '2.5px',
    height: '22px',
    background: 'black',
    borderRadius: '1.25px',
  },
  '&::before': {
    transform: 'translate(-50%, -50%) rotate(45deg)',
  },
  '&::after': {
    transform: 'translate(-50%, -50%) rotate(-45deg)',
  },
});
const twoMarkStylesMd = css({
  width: '32px',
  height: '32px',
  '&::before, &::after': {
    width: '5px',
    height: '44px',
    borderRadius: '2.5px',
  },
});

const threeMarkStyles = css({
  display: 'inline-block',
  position: 'relative',
  width: '16px',
  height: '16px',
  borderRadius: '100%',
  border: '2.5px solid black',
  '&::before, &::after': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '2.5px',
    height: '22px',
    background: 'black',
    borderRadius: '1.25px',
  },
  '&::before': {
    transform: 'translate(-50%, -50%) rotate(45deg)',
  },
  '&::after': {
    transform: 'translate(-50%, -50%) rotate(-45deg)',
  },
});
const threeMarkStylesMd = css({
  width: '32px',
  height: '32px',
  border: '5px solid black',
  '&::before, &::after': {
    width: '5px',
    height: '44px',
    borderRadius: '2.5px',
  },
});

export default CricketMark;
