import React, { FC } from 'react'
import { Box, Table, TableContainer, Tbody, Td, Tr } from '@chakra-ui/react'

type RoundBoardProps = {
  score: point[][]
}

const RoundBoard: FC<RoundBoardProps> = ({ score }) => {
  return (
    <Box overflowY='auto' maxHeight={300}>
      <TableContainer>
        <Table variant='simple'>
          <Tbody>
            {score.map((round, i) => (
              <Tr key={`round-${i}`}>
                {round.map((point, j) => (
                  <Td key={`point-${i}-${j}`}>{point === '0' ? '-' : point}</Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default RoundBoard
