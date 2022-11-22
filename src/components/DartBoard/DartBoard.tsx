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
      <svg height='0' viewBox='0 0 3900 3900' width='0'>
        <clipPath id='triple' clipPathUnits='objectBoundingBox'>
          <path
            transform='scale(0.00025641,0.00025641)'
            d='M1950 720C1884.53 720 1820.27 725.176 1757.56 735.031L1785.72 912.812C1839.25 904.401 1894.11 900 1950 900C2005.89 900 2060.75 904.401 2114.28 912.812L2142.44 735.031C2079.73 725.178 2015.47 720 1950 720Z'
          />
        </clipPath>
        <clipPath id='double' clipPathUnits='objectBoundingBox'>
          <path
            transform='scale(0.00025641,0.00025641)'
            d='M1950 0C1846.21 0 1744.34 8.19425 1644.94 23.8125L1674.66 211.5C1764.38 197.403 1856.32 190 1950 190C2043.68 190 2135.62 197.403 2225.34 211.5L2255.06 23.8125C2155.66 8.19425 2053.79 0 1950 0Z'
          />
        </clipPath>
        <clipPath id='innerSingle' clipPathUnits='objectBoundingBox'>
          <path
            transform='scale(0.00025641,0.00025641)'
            d='M1950 900C1894.12 900 1839.27 904.404 1785.75 912.812L1915.59 1732.69C1926.81 1730.93 1938.29 1730 1950 1730C1961.71 1730 1973.19 1730.93 1984.41 1732.69L2114.25 912.812C2060.73 904.404 2005.88 900 1950 900Z'
          />
        </clipPath>
        <clipPath id='outerSingle' clipPathUnits='objectBoundingBox'>
          <path
            transform='scale(0.00025641,0.00025641)'
            d='M1950 190C1856.32 190 1764.38 197.403 1674.66 211.5L1757.56 735.031C1820.27 725.177 1884.53 720 1950 720C2015.47 720 2079.73 725.177 2142.44 735.031L2225.34 211.5C2135.62 197.403 2043.68 190 1950 190Z'
          />
        </clipPath>
        <clipPath id='outerBull' clipPathUnits='objectBoundingBox'>
          <path
            transform='scale(0.00025641,0.00025641)'
            d='M1950 1730C1828.5 1730 1730 1828.5 1730 1950C1730 2071.5 1828.5 2170 1950 2170C2071.5 2170 2170 2071.5 2170 1950C2170 1828.5 2071.5 1730 1950 1730ZM1950 1860C1999.71 1860 2040 1900.29 2040 1950C2040 1999.71 1999.71 2040 1950 2040C1900.29 2040 1860 1999.71 1860 1950C1860 1900.29 1900.29 1860 1950 1860Z'
          />
        </clipPath>
        <clipPath id='innerBull' clipPathUnits='objectBoundingBox'>
          <path
            transform='scale(0.00025641,0.00025641)'
            d='M1860 1950C1860 1900.29 1900.29 1860 1950 1860C1999.71 1860 2040 1900.29 2040 1950C2040 1999.71 1999.71 2040 1950 2040C1900.29 2040 1860 1999.71 1860 1950Z'
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
  fontSize: '1rem',
});

const outerBullStyle = css({
  aspectRatio: '1',
  background: 'radial-gradient(circle, #cc0000 2% 3%, #cc3333 5% 6%, #cc0000 9% 10%);',
  '&:hover': {
    background: 'radial-gradient(circle, #cc0000 2% 3%, #ff5555 5% 6%, #cc0000 9% 10%);',
  },
  clipPath: 'url(#outerBull)',
  WebkitTapHighlightColor: 'transparent',
});

const innerBullStyle = css({
  aspectRatio: '1',
  background: 'radial-gradient(circle, #111111 0% 1%, #333333 2% 3%, #111111 4.5% 5%);',
  clipPath: 'url(#innerBull)',
  '&:hover': {
    background: 'radial-gradient(circle, #333333 0% 1%, #777777 2% 3%, #333333 4.5% 5%);',
  },
  WebkitTapHighlightColor: 'transparent',
});

export default DartBoard;
