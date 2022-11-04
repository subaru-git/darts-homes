import React, { FC } from 'react';
import { Table, TableContainer, Tbody, Td, Tr } from '@chakra-ui/react';

type BoardProps = {
  data: number[][];
};
const Board: FC<BoardProps> = ({ data }) => {
  const length = data.reduce((a, b) => (a.length > b.length ? a : b)).length;
  const rows = [];
  for (let i = 0; i < length; i++) {
    rows.push([data[0][i], data[1][i]]);
  }
  return (
    <>
      <TableContainer>
        <Table variant='simple'>
          <Tbody>
            {rows.map((row, i) => (
              <Tr key={`${row[0]}-${row[1]}-${i}`}>
                <Td>{row[0]}</Td>
                <Td>{row[1]}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Board;
