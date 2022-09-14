import { Button, Grid, GridItem, Heading, IconButton } from "@chakra-ui/react";
import React, { FC } from "react";
import { VscTrash } from "react-icons/vsc";

type RoundBullScoreProps = {
  scores: string[];
  onClear: () => void;
  onRoundChange: () => void;
};

const RoundBullScore: FC<RoundBullScoreProps> = ({
  scores,
  onClear,
  onRoundChange,
}) => {
  const getBullScore = (n: string) =>
    n === "50" ? "D-Bull" : n === "25" ? "S-Bull" : n != null ? "-" : "";
  return (
    <Grid templateColumns="repeat(4, 1fr)">
      <GridItem>
        <Heading as="h2" textAlign="center" color="gray.500">
          {getBullScore(scores[0])}
        </Heading>
      </GridItem>
      <GridItem>
        <Heading as="h2" textAlign="center" color="gray.500">
          {getBullScore(scores[1])}
        </Heading>
      </GridItem>
      <GridItem>
        <Heading as="h2" textAlign="center" color="gray.500">
          {getBullScore(scores[2])}
        </Heading>
      </GridItem>
      <GridItem>
        <Grid templateColumns="repeat(2, auto)" columnGap={2}>
          <GridItem>
            <IconButton
              aria-label="clear scores"
              icon={<VscTrash />}
              colorScheme="blue"
              onClick={() => onClear()}
            ></IconButton>
          </GridItem>
          <GridItem>
            <Button
              colorScheme="green"
              w="100%"
              onClick={() => {
                onRoundChange();
              }}
            >
              Round Change
            </Button>
          </GridItem>
        </Grid>
      </GridItem>
    </Grid>
  );
};

export default RoundBullScore;
