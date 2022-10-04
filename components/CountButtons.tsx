import React, { FC, Fragment } from "react";
import {
  Button,
  Center,
  Grid,
  GridItem,
  Heading,
  IconButton,
} from "@chakra-ui/react";
import { TbTargetOff } from "react-icons/tb";

type CountButtonsProps = {
  onCount: (count: point) => void;
  begin: number;
  end: number;
  reversed?: boolean;
  disabled?: boolean;
  other?: boolean;
};

const CountButtons: FC<CountButtonsProps> = ({
  onCount,
  begin,
  end,
  reversed,
  disabled = false,
  other = false,
}) => {
  const buttons = [...Array(20).keys()].filter(
    (n) => n >= begin - 1 && n <= end - 1
  );
  if (reversed) buttons.reverse();
  return (
    <>
      <Grid templateRows={`repeat(${other ? 3 : 2}, auto)`} gap={2} maxW={320}>
        <GridItem>
          <Grid templateColumns="repeat(3, auto)" columnGap={3}>
            <GridItem>
              <Button
                colorScheme="red"
                w="100%"
                onClick={() => onCount("S-BULL")}
                disabled={disabled}
              >
                outer Bull
              </Button>
            </GridItem>
            <GridItem>
              <Button
                colorScheme="facebook"
                w="100%"
                onClick={() => onCount("D-BULL")}
                disabled={disabled}
              >
                inner Bull
              </Button>
            </GridItem>
            <GridItem>
              <IconButton
                aria-label="out board"
                icon={<TbTargetOff />}
                colorScheme="gray"
                w="100%"
                onClick={() => onCount("OUT")}
                disabled={disabled}
              ></IconButton>
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem>
          <Grid
            templateColumns="repeat(3, 1fr)"
            templateRows={`repeat(${end - begin + 1}, 1fr)`}
            columnGap={3}
            rowGap={1}
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
                    onClick={() => onCount(`${i + 1}` as point)}
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
                    onClick={() => onCount(`${i + 1}D` as point)}
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
                    onClick={() => onCount(`${i + 1}T` as point)}
                    disabled={disabled}
                  >
                    {i + 1}
                  </Button>
                </GridItem>
              </Fragment>
            ))}
          </Grid>
        </GridItem>
        {other ? (
          <GridItem>
            <Button
              w="100%"
              variant="outline"
              onClick={() => onCount("0")}
              disabled={disabled}
            >
              Other
            </Button>
          </GridItem>
        ) : null}
      </Grid>
    </>
  );
};

export default CountButtons;
