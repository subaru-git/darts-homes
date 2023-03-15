import React, { FC } from 'react';

type ScoreBoardProps = {
  data: GameScore[];
};

const ScoreBoard: FC<ScoreBoardProps> = ({ data }) => {
  return (
    <table className='table-fixed border-collapse'>
      <thead>
        <tr>
          <th className='border-collapse whitespace-nowrap border border-gray-400 px-2 py-1 text-sm md:px-6 md:py-3 md:text-base'>
            Scored
          </th>
          <th className='border-collapse whitespace-nowrap border border-gray-400 px-2 py-1 text-sm md:px-6 md:py-3 md:text-base'>
            To Go
          </th>
          <th className='border-collapse whitespace-nowrap border border-gray-400 px-2 py-1 text-sm md:px-6 md:py-3 md:text-base'>
            Darts
          </th>
          <th className='border-collapse whitespace-nowrap border border-gray-400 p-1 text-sm md:px-6 md:py-3 md:text-base'>
            Hits
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((d, i) => {
          return (
            <tr key={`${d.Scored}-${i}`}>
              <td className='border-collapse whitespace-nowrap border border-gray-400 px-2 py-1 text-center text-sm md:px-6 md:py-3 md:text-base'>
                {d.Scored}
              </td>
              <td className='border-collapse whitespace-nowrap border border-gray-400 px-2 py-1 text-center text-sm md:px-6 md:py-3 md:text-base'>
                {d.ToGo}
              </td>
              <td className='border-collapse whitespace-nowrap border border-gray-400 px-2 py-1 text-center text-sm md:px-6 md:py-3 md:text-base'>
                {3 * i || ''}
              </td>
              <td className='border-collapse whitespace-nowrap border border-gray-400 p-1 text-center text-sm md:px-6 md:py-3 md:text-base'>
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
