import React, { FC } from 'react';
import { css } from '@emotion/react';

type DartBoardProps = {
  onCount: (count: point) => void;
};

const DartBoard: FC<DartBoardProps> = ({ onCount }) => {
  const numbers = [20, 1, 18, 4, 13, 6, 10, 15, 2, 17, 3, 19, 7, 16, 8, 11, 14, 9, 12, 5];
  return (
    <div css={{ aspectRatio: '1', position: 'relative' }}>
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
  background:
    'radial-gradient(circle, #77000099 20% 40%, #aa000055 60% 90%), url(./noise.svg), linear-gradient(to right,#ff0000, #cc0000 );',
  '&:hover': {
    background:
      'radial-gradient(circle, #cc444499 20% 40%, #ff999999 60% 90%), url(./noise.svg), linear-gradient(to right,#ff0000, #cc0000 );',
  },
});

const blueStyle = css({
  background:
    'radial-gradient(circle, #00007799 20% 40%, #0000aa55 60% 90%), url(./noise.svg), linear-gradient(to right,#0000ff, #0000cc );',
  '&:hover': {
    background:
      'radial-gradient(circle, #8888ee99 20% 40%, #8888ff99 60% 90%), url(./noise.svg), linear-gradient(to right,#0000ff, #0000cc );',
  },
});

const blackStyle = css({
  background:
    'radial-gradient(circle, #111111aa 20% 40%, #555555aa 60% 90%), url(./noise.svg), linear-gradient(to right,#000000, #333333 );',
  '&:hover': {
    background:
      'radial-gradient(circle, #777777aa 20% 40%, #aaaaaa66 60% 90%), url(./noise.svg), linear-gradient(to right,#000000, #333333 );',
  },
});

const whiteStyle = css({
  background:
    'radial-gradient(circle, #88888833 20% 40%, #bbbbbb66 60% 90%), url(./noise.svg), linear-gradient(to right,#dddddd, #aaaaaa );',
  '&:hover': {
    background:
      'radial-gradient(circle, #eeeeee33 20% 40%, #ffffff55 60% 90%), url(./noise.svg), linear-gradient(to right,#dddddd, #cccccc );',
  },
});

const numberCircleStyle = css({
  width: '100%',
  height: '100%',
  background:
    'radial-gradient(circle, #88888833 20% 40%, #000000aa 60% 90%), url(./noise.svg), linear-gradient(to right,#000000, #111111 );',
  '&:hover': {
    background:
      'radial-gradient(circle, #eeeeee33 20% 40%, #ffffff77 60% 90%), url(./noise.svg), linear-gradient(to right,#dddddd, #cccccc );',
  },
  clipPath: 'circle(50% at 50% 50%)',
  pointerEvents: 'none',
});

const outStyle = css({
  width: '100%',
  height: '100%',
  background:
    'radial-gradient(circle, #ffffff33 20% 60%, #888888aa 80% 90%), url(./noise.svg), linear-gradient(to right,#333333, #555555 );',
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
  background:
    'radial-gradient(circle, #cc000099 2% 3%, #cc444499 5% 6%, #cc000099 9% 10%), url(./noise.svg), linear-gradient(to right,#ff0000, #cc0000 );',
  '&:hover': {
    background:
      'radial-gradient(circle, #cc444499 2% 3%, #ff999999 5% 6%, #cc444499 9% 10%), url(./noise.svg), linear-gradient(to right,#ff0000, #cc0000 );',
  },
  clipPath: 'circle(7% at 50% 50%)',
});

const innerBullStyle = css({
  aspectRatio: '1',
  background:
    'radial-gradient(circle, #11111199 0% 1%, #33333399 2% 3%, #11111199 4.5% 5%), url(./noise.svg), linear-gradient(to right,#333333, #111111 );',
  clipPath: 'circle(3% at 50% 50%)',
  '&:hover': {
    background:
      'radial-gradient(circle, #33333399 0% 1%, #77777799 2% 3%, #33333399 4.5% 5%), url(./noise.svg), linear-gradient(to right,#333333, #111111 );',
  },
});

export default DartBoard;
