import React, { FC } from "react";
import { Grid, Table, TableContainer, Tbody, Td, Tr } from "@chakra-ui/react";

type EaglesEyeBoardProps = {
  data: number[][];
};

const EaglesEyeBoard: FC<EaglesEyeBoardProps> = ({ data }) => {
  return (
    <div>
      <Grid>
        <TableContainer>
          <Table variant="simple">
            <Tbody>
              {data.map((round, i) => (
                <Tr key={`round-${round}-${i}`}>
                  {round.map((score, j) => (
                    <Td key={`score-${score}-${j}`}>
                      {score === 50 ? "D-BULL" : score === 25 ? "S-BULL" : "-"}
                    </Td>
                  ))}
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Grid>
    </div>
  );
};

export default EaglesEyeBoard;
