import {
  Box,
  Grid,
  GridItem,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tr,
} from "@chakra-ui/react";
import React, { FC } from "react";
import CricketMark from "../components/CricketMark";
import {
  convertCountScoreToNumberOfCount,
  convertNumberOfCountToMarkCount,
} from "../lib/Helper/Converter";

type CricketNumberCountBoardProps = {
  data: string[][];
};

const CricketNumberCountBoard: FC<CricketNumberCountBoardProps> = ({
  data,
}) => {
  const scores = convertCountScoreToNumberOfCount(data, 15, 20);
  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <Tbody>
            {scores.map((number) => (
              <Tr key={`number-${number.number}`}>
                <Td key={`number-${number.number}`}>
                  {number.number === 50 ? "BULL" : number.number}
                </Td>
                <Td key={`score-${number.number}`}>
                  <Grid templateColumns="repeat(10, 50px)" gap={1}>
                    {convertNumberOfCountToMarkCount(
                      scores.find((score) => score.number === number.number)
                        ?.count ?? 0
                    ).map((count, i) => (
                      <GridItem key={`count-${count}-${i}`}>
                        <CricketMark count={count} />
                      </GridItem>
                    ))}
                  </Grid>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default CricketNumberCountBoard;
