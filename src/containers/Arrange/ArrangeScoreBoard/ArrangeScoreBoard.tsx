import React, { FC } from 'react';

type ArrangeScoreBoardProps = {
  score: string[][];
};

const ArrangeScoreBoard: FC<ArrangeScoreBoardProps> = ({ score }) => {
  return (
    <div>
      <table className='w-full text-center'>
        <thead className='bg-gray-50 uppercase'>
          <tr>
            <th scope='col' className='px-3 py-1 md:px-6 md:py-3'>
              Target
            </th>
            <th scope='col' className='px-3 py-1 md:px-6 md:py-3' colSpan={4}>
              Hits
            </th>
          </tr>
        </thead>
        <tbody>
          {score.map((items, i) => (
            <tr key={i} className='border-b'>
              {items.map((item, i) => (
                <td
                  key={i}
                  className={`px-3 py-1 italic md:px-6 md:py-4 ${i === 0 ? 'font-bold' : ''} ${
                    item === 'FINISH'
                      ? 'text-red-700'
                      : item === 'BUST'
                      ? 'text-blue-700'
                      : 'text-gray-500'
                  }`}
                >
                  {item}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ArrangeScoreBoard;
