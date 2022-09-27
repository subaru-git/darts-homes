import React, { FC } from "react";
import { Grid, Table, TableContainer, Tbody, Td, Tr } from "@chakra-ui/react";

type EaglesEyeBoardProps = {
  data: point[][];
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
                      {score.includes("BULL") ? score : "-"}
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
