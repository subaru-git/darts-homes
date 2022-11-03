import React, { FC } from 'react';
import { Grid, GridItem, Table, TableContainer, Tbody, Td, Tr, Text } from '@chakra-ui/react';
import CricketMark from '@/components/CricketMark';
import { convertNumberOfCountToMarkCount } from '@/lib/Helper/Converter';

type CricketMarkUpBoardProps = {
  scores: CricketMarkUpScore[];
};

const CricketMarkUpBoard: FC<CricketMarkUpBoardProps> = ({ scores }) => {
  return (
    <TableContainer w={{ base: '100%' }}>
      <Table variant='simple' size={{ base: 'sm', md: 'md' }}>
        <Tbody>
          {scores.map((number) => (
            <Tr key={`number-${number.number}`} h={{ base: '34.5px', md: '69px' }}>
              <Td>
                <Text fontSize={{ base: 'sm', md: 'lg' }}>
                  {number.number === 25 ? 'BULL' : number.number}
                </Text>
              </Td>
              <Td>
                <Grid templateColumns={{ base: 'repeat(4, 50px)', md: 'repeat(4, 50px)' }} gap={1}>
                  {convertNumberOfCountToMarkCount(
                    scores.find((score) => score.number === number.number)?.count ?? 0,
                  ).map((count, i) => (
                    <GridItem key={`count-${count}-${i}`}>
                      <CricketMark count={count} />
                    </GridItem>
                  ))}
                </Grid>
              </Td>
              <Td>
                <Text fontSize={{ base: 'sm', md: 'lg' }}>{number.total}</Text>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default CricketMarkUpBoard;
