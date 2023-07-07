import React, { FC, Fragment } from 'react';

type EditableScoreBoardProps = {
  score: number[];
  onChange: (score: number[]) => void;
  setFocus?: (focus: boolean) => void;
};

const EditableScoreBoard: FC<EditableScoreBoardProps> = ({ score, onChange, setFocus }) => {
  return (
    <div className='grid grid-cols-2'>
      <div className='border bg-gray-50 text-center'>Round</div>
      <div className='border bg-gray-50 text-center'>Count</div>
      {score.map((s, i) => (
        <Fragment key={i}>
          <div className='border text-center'>{i + 1}</div>
          <input
            className='border text-center'
            type='number'
            min={0}
            max={180}
            defaultValue={s}
            onChange={(e) => {
              const newScore = [...score];
              newScore[i] = parseInt(e.target.value);
              onChange(newScore);
            }}
            onFocus={() => setFocus?.(true)}
            onBlur={() => setFocus?.(false)}
          />
        </Fragment>
      ))}
    </div>
  );
};

export default EditableScoreBoard;
