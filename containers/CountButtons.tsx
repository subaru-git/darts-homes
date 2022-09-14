import React, { FC, Fragment } from "react";
import { Button, Center, Grid, GridItem, Heading } from "@chakra-ui/react";

type CountButtonsProps = {
  onCount: (count: string) => void;
  begin: number;
  end: number;
  reversed?: boolean;
  disabled: boolean;
};

const CountButtons: FC<CountButtonsProps> = ({
  onCount,
  begin,
  end,
  reversed,
  disabled,
}) => {
  const buttons = [...Array(20).keys()].filter(
    (n) => n >= begin - 1 && n <= end - 1
  );
  if (reversed) buttons.reverse();
  return (
    <>
      <Grid templateColumns="repeat(2, 1fr)" columnGap={3} maxW={320}>
        <GridItem>
          <Button
            colorScheme="red"
            w="100%"
            onClick={() => onCount("50")}
            disabled={disabled}
          >
            outer Bull
          </Button>
        </GridItem>
        <GridItem>
          <Button
            colorScheme="facebook"
            w="100%"
            onClick={() => onCount("50")}
            disabled={disabled}
          >
            inner Bull
          </Button>
        </GridItem>
      </Grid>
      <Grid
        templateColumns="repeat(3, 1fr)"
        templateRows={`repeat(${end - begin + 1}, 1fr)`}
        columnGap={3}
        rowGap={1}
        maxW={320}
      >
        <GridItem>
          <Center h="100%">
            <Heading as="h5" size="sm">
              Single
            </Heading>
          </Center>
        </GridItem>
        <GridItem>
          <Center h="100%">
            <Heading as="h5" size="sm">
              Double
            </Heading>
          </Center>
        </GridItem>
        <GridItem>
          <Center h="100%">
            <Heading as="h5" size="sm">
              Triple
            </Heading>
          </Center>
        </GridItem>
        {buttons.map((i) => (
          <Fragment key={`${i}-count`}>
            <GridItem>
              <Button
                colorScheme="gray"
                variant="outline"
                width="100%"
                onClick={() => onCount(`${i + 1}`)}
                disabled={disabled}
              >
                {i + 1}
              </Button>
            </GridItem>
            <GridItem>
              <Button
                colorScheme="teal"
                variant="outline"
                width="100%"
                onClick={() => onCount(`${i + 1}D`)}
                disabled={disabled}
              >
                {i + 1}
              </Button>
            </GridItem>
            <GridItem>
              <Button
                colorScheme="pink"
                variant="outline"
                width="100%"
                onClick={() => onCount(`${i + 1}T`)}
                disabled={disabled}
              >
                {i + 1}
              </Button>
            </GridItem>
          </Fragment>
        ))}
      </Grid>
    </>
  );
};

export default CountButtons;
