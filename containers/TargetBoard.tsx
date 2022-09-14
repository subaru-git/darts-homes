import { Heading } from "@chakra-ui/react";
import React, { FC } from "react";

type TargetBoardProps = {
  score?: number;
  player: string;
};

const TargetBoard: FC<TargetBoardProps> = ({ score, player }) => {
  return (
    <>
      <Heading fontSize="32px" color="green.500" pl={4} pt={4}>
        {player}
      </Heading>
      <Heading textAlign="center" fontSize="120px" py={8}>
        {score}
      </Heading>
    </>
  );
};

export default TargetBoard;
