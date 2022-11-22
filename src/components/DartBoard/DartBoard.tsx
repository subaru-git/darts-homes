import React, { FC } from 'react';
import { css } from '@emotion/react';

type DartBoardProps = {
  onCount: (count: point) => void;
};

const DartBoard: FC<DartBoardProps> = ({ onCount }) => {
  const numbers = [20, 1, 18, 4, 13, 6, 10, 15, 2, 17, 3, 19, 7, 16, 8, 11, 14, 9, 12, 5];
  return (
    <div css={{ aspectRatio: '1', position: 'relative', overflow: 'hidden' }}>
      <button onClick={() => onCount('OUT')} css={outStyle} aria-label={`out board`}>
        <div css={numberCircleStyle}>
          {numbers.map((n, i) => (
            <div key={n} css={[numberStyle, { rotate: `${i * 18}deg` }]}>
              {n}
            </div>
          ))}
        </div>
      </button>
      {numbers.map((n, i) => (
        <div key={n} css={[boardStyle, { rotate: `${i * 18}deg`, pointerEvents: 'none' }]}>
          <button
            onClick={() => onCount(`${n}` as point)}
            css={[buttonStyle, innerSingleStyle, i % 2 === 0 ? blackStyle : whiteStyle]}
            aria-label={`${n} inner single`}
            onLoadStart={() => console.log('loaded')}
          />
          <button
            onClick={() => onCount(`${n}` as point)}
            css={[buttonStyle, outerSingleStyle, i % 2 === 0 ? blackStyle : whiteStyle]}
            aria-label={`${n} outer single`}
          />
          <button
            onClick={() => onCount(`${n}D` as point)}
            css={[buttonStyle, doubleStyle, i % 2 === 0 ? redStyle : blueStyle]}
            aria-label={`${n} double`}
          />
          <button
            onClick={() => onCount(`${n}T` as point)}
            css={[buttonStyle, tripleStyle, i % 2 === 0 ? redStyle : blueStyle]}
            aria-label={`${n} triple`}
          />
        </div>
      ))}
      <button
        onClick={() => onCount('S-BULL')}
        css={[boardStyle, outerBullStyle]}
        aria-label={`single bull`}
      />
      <button
        onClick={() => onCount('D-BULL')}
        css={[boardStyle, innerBullStyle]}
        aria-label={`double bull`}
      />
      <div
        css={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          background: 'url(./noise.svg)',
          opacity: 0.5,
          pointerEvents: 'none',
        }}
      />
      <svg height='0' viewBox='0 0 1000 1000' width='0'>
        <clipPath id='triple' clipPathUnits='objectBoundingBox'>
          <path
            transform='scale(0.001,0.001)'
            d='M500 175C482.69 175 465.703 176.394 449.125 179L455 216.031C469.665 213.725 484.687 212.5 500 212.5C515.313 212.5 530.335 213.725 545 216.031L550.875 179C534.297 176.394 517.31 175 500 175Z'
          />
        </clipPath>
        <clipPath id='double' clipPathUnits='objectBoundingBox'>
          <path
            transform='scale(0.001,0.001)'
            d='M500 2.27374e-12C473.367 3.54636e-06 447.225 2.11439 421.719 6.12501L427.594 43.1875C451.188 39.4774 475.364 37.5 500 37.5C524.636 37.5 548.812 39.4774 572.406 43.1875L578.281 6.12499C552.775 2.11438 526.633-3.54636e-06 500 2.27374e-12Z'
          />
        </clipPath>
        <clipPath id='innerSingle' clipPathUnits='objectBoundingBox'>
          <path
            transform='scale(0.001,0.001)'
            d='M500 212.5C484.687 212.5 469.665 213.725 455 216.031L500 500L545 216.031C530.335 213.725 515.313 212.5 500 212.5Z'
          />
        </clipPath>
        <clipPath id='outerSingle' clipPathUnits='objectBoundingBox'>
          <path
            transform='scale(0.001,0.001)'
            d='M500 37.5C475.364 37.5 451.188 39.4774 427.594 43.1875L449.125 179C465.703 176.394 482.69 175 500 175C517.31 175 534.297 176.394 550.875 179L572.406 43.1875C548.812 39.4774 524.636 37.5 500 37.5Z'
          />
        </clipPath>
      </svg>
    </div>
  );
};

const buttonStyle = css({
  width: '100%',
  height: '100%',
  position: 'absolute',
  pointerEvents: 'fill',
  WebkitTapHighlightColor: 'transparent',
});

const redStyle = css({
  background: 'radial-gradient(circle, #aa0000 20% 40%, #cc0000 60% 90%);',
  '&:hover': {
    background: 'radial-gradient(circle, #ff4444 20% 40%, #ff5555 60% 90%);',
  },
});

const blueStyle = css({
  background: 'radial-gradient(circle, #000099 20% 40%, #0000aa 60% 90%);',
  '&:hover': {
    background: 'radial-gradient(circle, #4444ff 20% 40%, #6666ff 60% 90%);',
  },
});

const blackStyle = css({
  background: 'radial-gradient(circle, #111111 20% 40%, #444444 60% 90%);',
  '&:hover': {
    background: 'radial-gradient(circle, #555555 20% 40%, #777777 60% 90%);',
  },
});

const whiteStyle = css({
  background: 'radial-gradient(circle, #999999 20% 40%, #bbbbbb 60% 90%);',
  '&:hover': {
    background: 'radial-gradient(circle, #bbbbbb 20% 40%, #cccccc 60% 90%);',
  },
});

const numberCircleStyle = css({
  width: '100%',
  height: '100%',
  background: 'radial-gradient(circle, #aaaaaa 20% 40%, #000000 60% 90%);',
  clipPath: 'circle(50% at 50% 50%)',
  pointerEvents: 'none',
});

const outStyle = css({
  width: '100%',
  height: '100%',
  background: 'radial-gradient(circle, #666666 20% 60%, #888888 80% 90%);',
  position: 'relative',
});

const innerSingleStyle = css({
  clipPath: 'url(#innerSingle)',
});

const outerSingleStyle = css({
  clipPath: 'url(#outerSingle)',
});

const doubleStyle = css({
  clipPath: 'url(#double)',
});

const tripleStyle = css({
  clipPath: 'url(#triple)',
});

const boardStyle = css({
  position: 'absolute',
  width: 'calc(100% - 3em)',
  height: 'calc(100% - 3em)',
  top: '1.5em',
  left: '1.5em',
});

const numberStyle = css({
  position: 'absolute',
  width: '100%',
  height: '100%',
  pointerEvents: 'none',
  textAlign: 'center',
  color: 'white',
});

const outerBullStyle = css({
  aspectRatio: '1',
  background: 'radial-gradient(circle, #cc0000 2% 3%, #cc3333 5% 6%, #cc0000 9% 10%);',
  '&:hover': {
    background: 'radial-gradient(circle, #cc0000 2% 3%, #ff5555 5% 6%, #cc0000 9% 10%);',
  },
  clipPath: 'circle(7% at 50% 50%)',
});

const innerBullStyle = css({
  aspectRatio: '1',
  background: 'radial-gradient(circle, #111111 0% 1%, #333333 2% 3%, #111111 4.5% 5%);',
  clipPath: 'circle(3% at 50% 50%)',
  '&:hover': {
    background: 'radial-gradient(circle, #333333 0% 1%, #777777 2% 3%, #333333 4.5% 5%);',
  },
});

export default DartBoard;
