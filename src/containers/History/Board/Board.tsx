import React, { FC, useState } from 'react';
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  CloseButton,
  Collapse,
  Flex,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useDisclosure,
} from '@chakra-ui/react';
import { useLiveQuery } from 'dexie-react-hooks';
import HistoryImportExport from '../ImportExport';
import Loading from '@/components/Loading';
import CricketMarkUpHistoryTable from '@/containers/CricketMarkUp/HistoryTable';
import DoubleTroubleHistoryTable from '@/containers/DoubleTrouble/HistoryTable';
import EaglesEyeHistoryTable from '@/containers/EaglesEye/HistoryTable';
import Sweet16HistoryTable from '@/containers/Sweet16/HistoryTable';
import TopsAndTensHistoryTable from '@/containers/TopsAndTens/HistoryTable';
import TwoDartCombinationsHistoryTable from '@/containers/TwoDartCombinations/HistoryTable';
import { db } from '@/db/db';
import useLocale from '@/hooks/locale';

const HistoryBoard: FC = () => {
  const [loading, setLoading] = useState(true);
  const gameHistory = useLiveQuery(async () => {
    const cricketMarkUp = await db.cricketMarkUpResult.toCollection().reverse().sortBy('playedAt');
    const eaglesEye = await db.eaglesEyeResult.toCollection().reverse().sortBy('playedAt');
    const doubleTrouble = await db.doubleTroubleResult.toCollection().reverse().sortBy('playedAt');
    const sweet16 = await db.sweet16Result.toCollection().reverse().sortBy('playedAt');
    const topsAndTens = await db.topsAndTensResult.toCollection().reverse().sortBy('playedAt');
    const twoDartCombinations = await db.twoDartCombinationsResult
      .toCollection()
      .reverse()
      .sortBy('playedAt');
    setLoading(false);
    return { cricketMarkUp, eaglesEye, doubleTrouble, sweet16, topsAndTens, twoDartCombinations };
  }) || {
    cricketMarkUp: [],
    eaglesEye: [],
    doubleTrouble: [],
    sweet16: [],
    topsAndTens: [],
    twoDartCombinations: [],
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t } = useLocale();
  if (loading) return <Loading />;
  return (
    <Box p={{ base: 1, md: 4 }}>
      <Collapse in={isOpen} animateOpacity>
        <Alert status='error' justifyContent='space-between'>
          <Flex>
            <AlertIcon />
            <AlertTitle>{t.import.errortitle}</AlertTitle>
            <AlertDescription>{t.import.errordescription}</AlertDescription>
          </Flex>
          <CloseButton alignSelf='flex-start' position='relative' right={-1} onClick={onClose} />
        </Alert>
      </Collapse>
      <Flex pb={4} justifyContent='space-between' alignItems='center' mt={2}>
        <Heading as='h2' size={{ base: 'lg', md: 'xl' }}>
          History
        </Heading>
        <HistoryImportExport onError={onOpen} />
      </Flex>
      <Tabs>
        <TabList>
          <Tab aria-label='cricket mark up'>Cricket Mark-Up</Tab>
          <Tab aria-label="eagle's eye">{"Eagle's Eye"}</Tab>
          <Tab aria-label='double trouble'>Double Trouble</Tab>
          <Tab aria-label='sweet 16'>Sweet 16</Tab>
          <Tab aria-label='tops and tens'>Tops and Tens</Tab>
          <Tab aria-label='two dart combinations'>Two-Dart Combinations</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <CricketMarkUpHistoryTable history={gameHistory.cricketMarkUp} />
          </TabPanel>
          <TabPanel>
            <EaglesEyeHistoryTable history={gameHistory.eaglesEye} />
          </TabPanel>
          <TabPanel>
            <DoubleTroubleHistoryTable history={gameHistory.doubleTrouble} />
          </TabPanel>
          <TabPanel>
            <Sweet16HistoryTable history={gameHistory.sweet16} />
          </TabPanel>
          <TabPanel>
            <TopsAndTensHistoryTable history={gameHistory.topsAndTens} />
          </TabPanel>
          <TabPanel>
            <TwoDartCombinationsHistoryTable history={gameHistory.twoDartCombinations} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default HistoryBoard;
