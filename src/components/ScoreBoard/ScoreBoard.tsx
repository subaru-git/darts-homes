import React, { FC } from 'react';

type ScoreBoardProps = {
  data: GameScore[];
};

const ScoreBoard: FC<ScoreBoardProps> = ({ data }) => {
  return (
    <table className='table-fixed border-collapse'>
      <thead>
        <tr>
          <th className='border-collapse border border-gray-400 px-6 py-3'>Scored</th>
          <th className='border-collapse border border-gray-400 px-6 py-3'>To Go</th>
          <th className='border-collapse border border-gray-400 px-6 py-3'>Darts</th>
          <th className='border-collapse border border-gray-400 px-6 py-3'>Hits</th>
        </tr>
      </thead>
      <tbody>
        {data.map((d, i) => {
          return (
            <tr key={`${d.Scored}-${i}`}>
              <td className='border-collapse border border-gray-400 px-6 py-3 text-center'>
                {d.Scored}
              </td>
              <td className='border-collapse border border-gray-400 px-6 py-3 text-center'>
                {d.ToGo}
              </td>
              <td className='border-collapse border border-gray-400 px-6 py-3 text-center'>
                {3 * i || ''}
              </td>
              <td className='border-collapse border border-gray-400 px-6 py-3 text-center'>
                {d.Hits?.join(', ')}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ScoreBoard;
