import React, { FC } from 'react';

type AppTagProps = {
  tag: string;
};

const AppTag: FC<AppTagProps> = ({ tag }) => {
  const color = ConstantTags.find((t) => t.name === tag)?.color ?? 'text-gray-200 bg-gray-400';
  return (
    <span className={`${color} whitespace-nowrap rounded-full px-2.5 py-0.5 text-sm font-medium`}>
      {tag}
    </span>
  );
};

const ConstantTags = [
  { name: 'BULL', color: 'text-gray-100 bg-blue-400' },
  { name: 'single', color: 'text-gray-100 bg-cyan-600' },
  { name: 'double', color: 'text-gray-100 bg-cyan-400' },
  { name: 'master', color: 'text-gray-100 bg-cyan-800' },
  { name: 'cricket', color: 'text-gray-100 bg-teal-400' },
  { name: '19', color: 'text-gray-100 bg-green-400' },
  { name: '20', color: 'text-gray-100 bg-green-400' },
  { name: 'count up', color: 'text-gray-100 bg-pink-400' },
  { name: 'finish', color: 'text-gray-100 bg-orange-400' },
  { name: 'simulation', color: 'text-gray-100 bg-purple-400' },
];

export default AppTag;
