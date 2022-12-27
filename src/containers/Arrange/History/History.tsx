import React, { FC, Fragment, useEffect, useState } from 'react';
import {
  Box,
  Flex,
  Radio,
  RadioGroup,
  Select,
  Switch,
  Text,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tr,
  IconButton,
  useDisclosure,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  Heading,
  Grid,
  useBreakpointValue,
} from '@chakra-ui/react';
import { MdDeleteForever } from 'react-icons/md';
import HistoryDeleteAlert from '@/containers/History/DeleteAlert';
import { db } from '@/db/db';
import { deleteResult } from '@/lib/GameHistoryManager';
import { ArrangeScore, DateFormat } from '@/lib/Helper/Format';

type HistoryProps = {
  history: ArrangeResultModel[];
  user: User | null | undefined;
};

const History: FC<HistoryProps> = ({ history, user }) => {
  const [out, setOut] = useState('single');
  const [separate, setSeparate] = useState(false);
  const [target, setTarget] = useState<number>(0);
  const [targets, setTargets] = useState<number[]>([]);
  const [scores, setScores] = useState<ArrangeOut[]>([]);
  const [deleteHistory, setDeleteHistory] = useState<ArrangeResultModel | undefined>(undefined);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMd = useBreakpointValue({ base: false, md: true });
  useEffect(() => {
    const scores = history
      .filter((item) => item.settings.out === out && item.settings.separate === separate)
      .map((item) => item.result)
      .flat()
      .sort((a, b) => b.target - a.target);
    setScores(scores);
    const targets = [...new Set(scores.map((item) => item.target))];
    setTargets(targets);
    setTarget(targets[0]);
  }, [history, out, separate]);
  return (
    <>
      <Flex direction={'column'} gap={8}>
        <Flex direction={'column'} gap={1}>
          <Box>
            <Text fontSize={'sm'} fontWeight={'bold'} color={'gray.500'} mb={1}>
              out options
            </Text>
            <RadioGroup onChange={(out) => setOut(out)} value={out}>
              <Flex gap={4}>
                <Radio value='single' aria-label='single out' size={{ base: 'sm', md: 'md' }}>
                  Single Out
                </Radio>
                <Radio value='double' aria-label='double out' size={{ base: 'sm', md: 'md' }}>
                  Double Out
                </Radio>
                <Radio value='master' aria-label='master out' size={{ base: 'sm', md: 'md' }}>
                  Master Out
                </Radio>
              </Flex>
            </RadioGroup>
          </Box>
          <Box>
            <Text fontSize={'sm'} fontWeight={'bold'} color={'gray.500'} mb={1}>
              bull options
            </Text>
            <Flex gap={2} alignItems={'center'}>
              <Text fontSize={{ base: 'sm', md: 'md' }}>Fat Bull</Text>
              <Switch
                onChange={(e) => setSeparate(e.target.checked)}
                size={{ base: 'sm', md: 'md' }}
              />
              <Text fontSize={{ base: 'sm', md: 'md' }}>Separate Bull</Text>
            </Flex>
          </Box>
          <Select
            onChange={(e) => setTarget(parseInt(e.target.value))}
            size={{ base: 'sm', md: 'md' }}
          >
            {targets.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </Select>
          <TableContainer>
            <Table>
              <Tbody>
                {scores
                  .filter((s) => s.target === target)
                  .map((item, i) => (
                    <Tr key={i}>
                      {item.score.flat().map((s, i) => (
                        <Td key={i} p={{ base: 1, md: 2 }}>
                          <Text fontSize={{ base: 'sm', md: 'md' }}>{s}</Text>
                        </Td>
                      ))}
                    </Tr>
                  ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Flex>
        <Box aria-label={'game history'}>
          <Heading as={'h3'} size={{ base: 'xs', md: 'sm' }} mb={2}>
            Game History
          </Heading>
          <TableContainer>
            <Table css={{ tableLayout: 'fixed' }}>
              <Tbody>
                {history.map((h) => (
                  <Fragment key={h.uuid}>
                    <Tr bg='green.100' fontSize={{ base: 'xs', md: 'md' }}>
                      <Td colSpan={2} p={{ base: 0, md: 1 }}>
                        Arrange
                      </Td>
                      <Td p={{ base: 0, md: 1 }} colSpan={2}>
                        {h.settings.out} / {h.settings.separate ? 'separate' : 'fat'}
                      </Td>
                      <Td colSpan={3} p={{ base: 0, md: 1 }} textAlign='end'>
                        <Text>{DateFormat(h.playedAt)}</Text>
                      </Td>
                      <Td p={{ base: 0, md: 1 }} textAlign='center'>
                        <IconButton
                          aria-label='delete history'
                          icon={<MdDeleteForever size={isMd ? 24 : 19} />}
                          variant='ghost'
                          size={{ base: '2xs', md: 'xs' }}
                          onClick={() => {
                            setDeleteHistory(h);
                            onOpen();
                          }}
                        />
                      </Td>
                    </Tr>
                    <Tr>
                      {h.result.map((r, i) => (
                        <Fragment key={i}>
                          <Td p={1} fontSize={{ base: 'sm', md: 'md' }}>
                            <Popover trigger={'hover'}>
                              <PopoverTrigger>
                                <Text textAlign={'center'} textDecoration={'underline'}>
                                  {r.target}
                                </Text>
                              </PopoverTrigger>
                              <PopoverContent>
                                <PopoverArrow />
                                <PopoverBody>
                                  <Flex direction={'column'}>
                                    {ArrangeScore(r.score).map((s, i) => (
                                      <Grid key={i} templateColumns={'repeat(4, 1fr)'} gap={1}>
                                        {s.map((n, i) => (
                                          <Text
                                            key={`${n}-${i}`}
                                            color={
                                              n === 'FINISH'
                                                ? 'red.500'
                                                : n === 'BUST'
                                                ? 'blue.500'
                                                : undefined
                                            }
                                            gridColumn={
                                              n === 'FINISH' || n === 'BUST' ? 4 : undefined
                                            }
                                          >
                                            {n}
                                          </Text>
                                        ))}
                                      </Grid>
                                    ))}
                                  </Flex>
                                </PopoverBody>
                              </PopoverContent>
                            </Popover>
                          </Td>
                        </Fragment>
                      ))}
                    </Tr>
                  </Fragment>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
          {deleteHistory && (
            <HistoryDeleteAlert
              message={`Arrange: ${DateFormat(deleteHistory.playedAt)}`}
              isOpen={isOpen}
              onClose={onClose}
              onDelete={() => {
                deleteResult(deleteHistory.uuid, db.arrangeResult, user);
                onClose();
              }}
            />
          )}
        </Box>
      </Flex>
    </>
  );
};

export default History;
