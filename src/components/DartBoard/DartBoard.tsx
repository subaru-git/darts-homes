import React, { FC } from 'react';
import { css } from '@emotion/react';
import isEven from 'is-even';

type DartBoardProps = {
  onCount: (count: point) => void;
  hard?: boolean;
};

const DartBoard: FC<DartBoardProps> = ({ onCount, hard = false }) => {
  return hard ? <HardBoard onCount={onCount} /> : <SoftDartBoard onCount={onCount} />;
};
const SoftDartBoard: FC<DartBoardProps> = ({ onCount }) => {
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
            css={[buttonStyle, innerSingleStyle, isEven(i) ? blackStyle : whiteStyle]}
            aria-label={`${n} inner single`}
          />
          <button
            onClick={() => onCount(`${n}` as point)}
            css={[buttonStyle, outerSingleStyle, isEven(i) ? blackStyle : whiteStyle]}
            aria-label={`${n} outer single`}
          />
          <button
            onClick={() => onCount(`D${n}` as point)}
            css={[buttonStyle, doubleStyle, isEven(i) ? redStyle : blueStyle]}
            aria-label={`${n} double`}
          />
          <button
            onClick={() => onCount(`T${n}` as point)}
            css={[buttonStyle, tripleStyle, isEven(i) ? redStyle : blueStyle]}
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
      <div css={dressStyle} />
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

const HardBoard: FC<DartBoardProps> = ({ onCount }) => {
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
            css={[buttonStyle, innerSingleStyle, isEven(i) ? blackStyle : whiteStyle]}
            aria-label={`${n} inner single`}
          />
          <button
            onClick={() => onCount(`${n}` as point)}
            css={[buttonStyle, outerSingleStyle, isEven(i) ? blackStyle : whiteStyle]}
            aria-label={`${n} outer single`}
          />
          <button
            onClick={() => onCount(`D${n}` as point)}
            css={[buttonStyle, doubleStyle, isEven(i) ? redStyle : greenStyle]}
            aria-label={`${n} double`}
          />
          <button
            onClick={() => onCount(`T${n}` as point)}
            css={[buttonStyle, tripleStyle, isEven(i) ? redStyle : greenStyle]}
            aria-label={`${n} triple`}
          />
        </div>
      ))}
      <button
        onClick={() => onCount('S-BULL')}
        css={[boardStyle, hardOuterBullStyle]}
        aria-label={`single bull`}
      />
      <button
        onClick={() => onCount('D-BULL')}
        css={[boardStyle, hardInnerBullStyle]}
        aria-label={`double bull`}
      />
      <div css={dressStyle} />
      <svg height='0' viewBox='0 0 3410 3410' width='0'>
        <clipPath id='triple' clipPathUnits='objectBoundingBox'>
          <path
            transform='scale(0.00029326,0.00029326)'
            d='M1705 640C1648.28 640 1592.61 644.49 1538.28 653.031L1553.94 751.812C1603.16 744.074 1653.6 740.001 1705 740C1756.39 740 1806.84 744.074 1856.06 751.812L1871.72 653.031C1817.39 644.49 1761.72 640 1705 640Z'
          />
        </clipPath>
        <clipPath id='double' clipPathUnits='objectBoundingBox'>
          <path
            transform='scale(0.00029326,0.00029326)'
            d='M1705 0C1614.18 0 1525.04 7.16693 1438.06 20.8438L1453.72 119.625C1535.59 106.751 1619.51 100 1705 100C1790.49 100 1874.41 106.751 1956.28 119.625L1971.94 20.8438C1884.96 7.16694 1795.82 0 1705 0Z'
          />
        </clipPath>
        <clipPath id='innerSingle' clipPathUnits='objectBoundingBox'>
          <path
            transform='scale(0.00029326,0.00029326)'
            d='M1705 740C1653.61 740 1603.16 744.073 1553.94 751.812L1679.25 1542.19C1687.66 1540.87 1696.22 1540 1705 1540C1713.78 1540 1722.34 1540.87 1730.75 1542.19L1856.06 751.812C1806.84 744.074 1756.4 740 1705 740Z'
          />
        </clipPath>
        <clipPath id='outerSingle' clipPathUnits='objectBoundingBox'>
          <path
            transform='scale(0.00029326,0.00029326)'
            d='M1705 100C1619.51 100 1535.59 106.751 1453.72 119.625L1538.28 653.031C1592.61 644.49 1648.28 640 1705 640C1761.72 640 1817.4 644.49 1871.72 653.031L1956.28 119.625C1874.41 106.751 1790.49 100 1705 100Z'
          />
        </clipPath>
        <clipPath id='outerBull' clipPathUnits='objectBoundingBox'>
          <path
            transform='scale(0.00029326,0.00029326)'
            d='M1705 1540C1613.87 1540 1540 1613.87 1540 1705C1540 1796.13 1613.87 1870 1705 1870C1796.13 1870 1870 1796.13 1870 1705C1870 1613.87 1796.13 1540 1705 1540ZM1705 1635C1743.66 1635 1775 1666.34 1775 1705C1775 1743.66 1743.66 1775 1705 1775C1666.34 1775 1635 1743.66 1635 1705C1635 1666.34 1666.34 1635 1705 1635Z'
          />
        </clipPath>
        <clipPath id='innerBull' clipPathUnits='objectBoundingBox'>
          <path
            transform='scale(0.00029326,0.00029326)'
            d='M1635 1705C1635 1666.34 1666.34 1635 1705 1635C1743.66 1635 1775 1666.34 1775 1705C1775 1743.66 1743.66 1775 1705 1775C1666.34 1775 1635 1743.66 1635 1705Z'
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

const greenStyle = css({
  background: 'radial-gradient(circle, #009900 20% 40%, #00aa00 60% 90%);',
  '&:hover': {
    background: 'radial-gradient(circle, #44ff44 20% 40%, #66ff66 60% 90%);',
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

const hardOuterBullStyle = css({
  aspectRatio: '1',
  background: 'radial-gradient(circle, #009900 20% 40%, #00aa00 60% 90%);',
  '&:hover': {
    background: 'radial-gradient(circle, #44ff44 20% 40%, #66ff66 60% 90%);',
  },
  clipPath: 'url(#outerBull)',
  WebkitTapHighlightColor: 'transparent',
});

const innerBullStyle = css({
  aspectRatio: '1',
  background: 'radial-gradient(circle, #111111 0% 1%, #333333 2% 3%, #111111 4.5% 5%);',
  '&:hover': {
    background: 'radial-gradient(circle, #333333 0% 1%, #777777 2% 3%, #333333 4.5% 5%);',
  },
  clipPath: 'url(#innerBull)',
  WebkitTapHighlightColor: 'transparent',
});

const hardInnerBullStyle = css({
  aspectRatio: '1',
  background: 'radial-gradient(circle, #aa0000 20% 40%, #cc0000 60% 90%);',
  '&:hover': {
    background: 'radial-gradient(circle, #ff4444 20% 40%, #ff5555 60% 90%);',
  },
  clipPath: 'url(#innerBull)',
  WebkitTapHighlightColor: 'transparent',
});

const dressStyle = css({
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  background: 'url(./noise.svg)',
  opacity: 0.5,
  pointerEvents: 'none',
});

export default DartBoard;
