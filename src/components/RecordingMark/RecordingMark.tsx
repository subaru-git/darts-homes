import React, { FC } from 'react';
import { css } from '@emotion/react';

type RecordingMarkProps = {
  recording?: boolean;
};

const RecordingMark: FC<RecordingMarkProps> = ({ recording = false }) => {
  return <div css={[style, recording ? recordingStyle : notRecordingStyle]} />;
};

const style = css({
  width: '100%',
  height: '100%',
  backgroundColor: 'red',
  border: 0,
  borderRadius: '100%',
  outline: 'none',
});

const notRecordingStyle = css({
  backgroundColor: 'darkred',
});

const recordingStyle = css({
  animationName: 'pulse',
  animationDuration: '1.5s',
  animationIterationCount: 'infinite',
  animationTimingFunction: 'linear',
  '@keyframes pulse': {
    '0%': {
      boxShadow: '0px 0px 0.14em 0px rgba(173,0,0,.3)',
    },
    '65%': {
      boxShadow: '0px 0px 0.14em 0.37em rgba(173,0,0,.3)',
    },
    '90%': {
      boxShadow: '0px 0px 0.14em 0.37em rgba(173,0,0,0)',
    },
  },
});

export default RecordingMark;
