import { Table, TableContainer, Tbody, Td, Tr } from "@chakra-ui/react";
import React, { FC } from "react";

type RoundBoardProps = {
  score: point[][];
};

const RoundBoard: FC<RoundBoardProps> = ({ score }) => {
  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <Tbody>
            {score.map((round, i) => (
              <Tr key={`round-${i}`}>
                {round.map((point, j) => (
                  <Td key={`point-${i}-${j}`}>{point}</Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default RoundBoard;
