import { Box } from "@chakra-ui/react";
import React, { FC } from "react";
import CricketNumberCountMain from "../containers/CricketNumberCountMain";

const CricketNumberCount: FC = () => {
  return (
    <Box p={4}>
      <CricketNumberCountMain />
    </Box>
  );
};

export default CricketNumberCount;
