import React, { FC } from 'react';
import { useBreakpointValue } from '@chakra-ui/react';
import { css } from '@emotion/react';

type CricketMarkProps = {
  count: number;
};

const CricketMark: FC<CricketMarkProps> = ({ count }) => {
  const isMd = useBreakpointValue({ base: false, md: true });
  const oneMark = isMd ? oneMarkStylesMd : oneMarkStyles;
  const twoMarks = isMd ? twoMarkStylesMd : twoMarkStyles;
  const threeMarks = isMd ? threeMarkStylesMd : threeMarkStyles;
  return (
    <>
      {count === 3 ? (
        <div css={threeMarks} />
      ) : count === 2 ? (
        <div css={twoMarks} />
      ) : count === 1 ? (
        <div css={oneMark} />
      ) : null}
    </>
  );
};

const oneMarkStylesMd = css({
  display: 'inline-block',
  position: 'relative',
  width: '32px',
  height: '32px',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '5px',
    height: '44px',
    background: 'black',
    borderRadius: '2.5px',
    transform: 'translate(-50%, -50%) rotate(-45deg)',
  },
});

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

const twoMarkStylesMd = css({
  display: 'inline-block',
  position: 'relative',
  width: '32px',
  height: '32px',
  '&::before, &::after': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '5px',
    height: '44px',
    background: 'black',
    borderRadius: '2.5px',
  },
  '&::before': {
    transform: 'translate(-50%, -50%) rotate(45deg)',
  },
  '&::after': {
    transform: 'translate(-50%, -50%) rotate(-45deg)',
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

const threeMarkStylesMd = css({
  display: 'inline-block',
  position: 'relative',
  width: '32px',
  height: '32px',
  borderRadius: '100%',
  border: '5px solid black',
  '&::before, &::after': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '5px',
    height: '44px',
    background: 'black',
    borderRadius: '2.5px',
  },
  '&::before': {
    transform: 'translate(-50%, -50%) rotate(45deg)',
  },
  '&::after': {
    transform: 'translate(-50%, -50%) rotate(-45deg)',
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

export default CricketMark;
