import React, { FC, Fragment, useState } from 'react';
import {
  Box,
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Grid,
  GridItem,
  IconButton,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { TbTargetOff } from 'react-icons/tb';
import DartBoard from '../DartBoard';

type CountButtonsProps = {
  onCount: (count: point) => void;
  buttons: number[];
  bull?: boolean;
  disabled?: boolean;
  other?: boolean;
  full?: boolean;
};

const CountButtons: FC<CountButtonsProps> = ({ onCount, buttons, bull, disabled, other, full }) => {
  return (
    <Flex maxW={320} direction='column' gap={1} m='auto'>
      <Buttons onCount={onCount} buttons={buttons} bull={bull} disabled={disabled} other={other} />
      {other ? (
        <Other onCount={onCount} disabled={disabled} bull={bull} />
      ) : full ? (
        <Full onCount={onCount} disabled={disabled} bull={bull} />
      ) : null}
    </Flex>
  );
};

const Buttons: FC<CountButtonsProps> = ({ onCount, buttons, bull = true, disabled = false }) => {
  return (
    <>
      {!bull ? null : (
        <GridItem>
          <Grid templateColumns='repeat(3, auto)' columnGap={3}>
            <GridItem>
              <Button
                colorScheme='red'
                w='100%'
                onClick={() => onCount('S-BULL')}
                disabled={disabled}
                aria-label='outer bull'
              >
                outer Bull
              </Button>
            </GridItem>
            <GridItem>
              <Button
                colorScheme='facebook'
                w='100%'
                onClick={() => onCount('D-BULL')}
                disabled={disabled}
                aria-label='inner bull'
              >
                inner Bull
              </Button>
            </GridItem>
            <GridItem>
              <IconButton
                aria-label='out board'
                variant='outline'
                icon={<TbTargetOff />}
                colorScheme='gray'
                w='100%'
                onClick={() => onCount('OUT')}
                disabled={disabled}
              ></IconButton>
            </GridItem>
          </Grid>
        </GridItem>
      )}
      <GridItem>
        <Grid
          templateColumns='repeat(3, 1fr)'
          templateRows={`repeat(${buttons.length}, 1fr)`}
          columnGap={3}
          rowGap={1}
        >
          {buttons.length === 0 ? null : (
            <>
              <GridItem>
                <Center h='100%'>
                  <Text size='sm' color={disabled ? 'blackAlpha.500' : 'black'} fontWeight='bold'>
                    Single
                  </Text>
                </Center>
              </GridItem>
              <GridItem>
                <Center h='100%'>
                  <Text size='sm' color={disabled ? 'blackAlpha.500' : 'black'} fontWeight='bold'>
                    Double
                  </Text>
                </Center>
              </GridItem>
              <GridItem>
                <Center h='100%'>
                  <Text size='sm' color={disabled ? 'blackAlpha.500' : 'black'} fontWeight='bold'>
                    Triple
                  </Text>
                </Center>
              </GridItem>
            </>
          )}
          {buttons.map((i) => (
            <Fragment key={`${i}-count`}>
              <GridItem>
                <Button
                  colorScheme='gray'
                  variant='outline'
                  width='100%'
                  onClick={() => onCount(`${i}` as point)}
                  disabled={disabled}
                  aria-label={`${i}`}
                >
                  {i}
                </Button>
              </GridItem>
              <GridItem>
                <Button
                  colorScheme='teal'
                  variant='outline'
                  width='100%'
                  onClick={() => onCount(`${i}D` as point)}
                  disabled={disabled}
                  aria-label={`${i} double`}
                >
                  {i}
                </Button>
              </GridItem>
              <GridItem>
                <Button
                  colorScheme='pink'
                  variant='outline'
                  width='100%'
                  onClick={() => onCount(`${i}T` as point)}
                  disabled={disabled}
                  aria-label={`${i} triple`}
                >
                  {i}
                </Button>
              </GridItem>
            </Fragment>
          ))}
        </Grid>
      </GridItem>
    </>
  );
};

const Other: FC<{ disabled?: boolean; bull?: boolean; onCount: (n: point) => void }> = ({
  disabled,
  bull,
  onCount,
}) => {
  return (
    <Flex gap={2}>
      <Button w='100%' variant='outline' onClick={() => onCount('0')} disabled={disabled}>
        Other
      </Button>
      {bull ? null : (
        <IconButton
          aria-label='out board'
          variant='outline'
          icon={<TbTargetOff />}
          colorScheme='gray'
          onClick={() => onCount('OUT')}
          disabled={disabled}
        ></IconButton>
      )}
    </Flex>
  );
};

const Full: FC<{ disabled?: boolean; bull?: boolean; onCount: (n: point) => void }> = ({
  disabled,
  bull,
  onCount,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [index, setIndex] = useState(0);
  return (
    <>
      <Flex gap={2}>
        <Button w='100%' variant='outline' onClick={onOpen} disabled={disabled}>
          Full
        </Button>
        {bull ? null : (
          <IconButton
            aria-label='out board'
            variant='outline'
            icon={<TbTargetOff />}
            colorScheme='gray'
            onClick={() => onCount('OUT')}
            disabled={disabled}
          ></IconButton>
        )}
      </Flex>
      <Drawer isOpen={isOpen} onClose={onClose} size='lg' placement='right'>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Full Inputs</DrawerHeader>
          <DrawerBody>
            <Tabs variant='enclosed' isFitted index={index} onChange={(i) => setIndex(i)}>
              <TabList>
                <Tab>Full Buttons</Tab>
                <Tab>Dart Board</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Buttons
                    onCount={(n) => {
                      onCount(n);
                      onClose();
                    }}
                    buttons={[
                      20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
                    ]}
                    bull={true}
                  />
                </TabPanel>
                <TabPanel>
                  <Center>
                    <Box w='100%' h='100%'>
                      <DartBoard
                        onCount={(n) => {
                          onCount(n);
                          onClose();
                        }}
                      />
                    </Box>
                  </Center>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default CountButtons;
