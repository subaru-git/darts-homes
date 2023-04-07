import React, { FC } from 'react';

type RoundBoardProps = {
  score: point[][];
};

const RoundBoard: FC<RoundBoardProps> = ({ score }) => {
  return (
    <div className='max-h-[300px] overflow-y-auto'>
      <table className='w-full table-fixed'>
        <tbody>
          {score.map((round, i) => (
            <tr key={`round-${i}`} className='border-b py-2'>
              {round.map((point, j) => (
                <td
                  key={`point-${i}-${j}`}
                  className='py-2 text-center font-semibold italic text-gray-500'
                >
                  {point === '0' ? '-' : point}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoundBoard;
