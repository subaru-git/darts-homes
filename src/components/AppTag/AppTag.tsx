import React, { FC } from 'react';
import { Tag } from '@chakra-ui/react';

type AppTagProps = {
  tag: string;
};

const AppTag: FC<AppTagProps> = ({ tag }) => {
  const color = ConstantTags.find((t) => t.name === tag)?.color || {
    font: 'gray.200',
    bg: 'gray.400',
  };
  return (
    <Tag color={color.font} backgroundColor={color.bg}>
      {tag}
    </Tag>
  );
};

const ConstantTags = [
  { name: 'BULL', color: { font: 'gray.100', bg: 'blue.400' } },
  { name: 'double', color: { font: 'gray.100', bg: 'cyan.400' } },
  { name: 'cricket', color: { font: 'gray.100', bg: 'teal.400' } },
  { name: '19', color: { font: 'gray.100', bg: 'green.400' } },
  { name: '20', color: { font: 'gray.100', bg: 'green.400' } },
  { name: 'count up', color: { font: 'gray.100', bg: 'pink.400' } },
  { name: 'finish', color: { font: 'gray.100', bg: 'orange.400' } },
];

export default AppTag;
