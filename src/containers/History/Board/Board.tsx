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
import AroundTheCompassHistoryTable from '@/containers/AroundTheCompass/HistoryTable';
import BullyBullyHistoryTable from '@/containers/BullyBully/HistoryTable';
import CricketMarkUpHistoryTable from '@/containers/CricketMarkUp/HistoryTable';
import DoubleTroubleHistoryTable from '@/containers/DoubleTrouble/HistoryTable';
import EaglesEyeHistoryTable from '@/containers/EaglesEye/HistoryTable';
import EightyThrewHistoryTable from '@/containers/EightyThrew/HistoryTable';
import Route64HistoryTable from '@/containers/Route64/HistoryTable';
import ShanghaiNightsHistoryTable from '@/containers/ShanghaiNights/HistoryTable';
import Sweet16HistoryTable from '@/containers/Sweet16/HistoryTable';
import SwitchHitterHistoryTable from '@/containers/SwitchHitter/HistoryTable';
import TonsUpHistoryTable from '@/containers/TonsUp/HistoryTable';
import TopsAndTensHistoryTable from '@/containers/TopsAndTens/HistoryTable';
import TwoDartCombinationsHistoryTable from '@/containers/TwoDartCombinations/HistoryTable';
import { db } from '@/db/db';
import useLocale from '@/hooks/locale';

const HistoryBoard: FC = () => {
  const [loading, setLoading] = useState(true);
  const gameHistory = useLiveQuery(async () => querier(setLoading)) || initialQuery;
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
        <TabList overflowX='scroll' whiteSpace='nowrap'>
          <Tab aria-label='cricket mark up'>Cricket Mark-Up</Tab>
          <Tab aria-label="eagle's eye">{"Eagle's Eye"}</Tab>
          <Tab aria-label='double trouble'>Double Trouble</Tab>
          <Tab aria-label='sweet 16'>Sweet 16</Tab>
          <Tab aria-label='tops and tens'>Tops and Tens</Tab>
          <Tab aria-label='two dart combinations'>Two-Dart Combinations</Tab>
          <Tab aria-label='around the compass'>Around The Compass</Tab>
          <Tab aria-label='tons up'>Tons Up</Tab>
          <Tab aria-label='route 64'>Route 64</Tab>
          <Tab aria-label='eighty threw'>Eighty Threw</Tab>
          <Tab aria-label='shanghai nights'>Shanghai Nights</Tab>
          <Tab aria-label='switch hitter'>Switch Hitter</Tab>
          <Tab aria-label='bully bully'>Bully Bully</Tab>
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
          <TabPanel>
            <AroundTheCompassHistoryTable history={gameHistory.aroundTheCompass} />
          </TabPanel>
          <TabPanel>
            <TonsUpHistoryTable history={gameHistory.tonsUp} />
          </TabPanel>
          <TabPanel>
            <Route64HistoryTable history={gameHistory.route64} />
          </TabPanel>
          <TabPanel>
            <EightyThrewHistoryTable history={gameHistory.eightyThrew} />
          </TabPanel>
          <TabPanel>
            <ShanghaiNightsHistoryTable history={gameHistory.shanghaiNights} />
          </TabPanel>
          <TabPanel>
            <SwitchHitterHistoryTable history={gameHistory.switchHitter} />
          </TabPanel>
          <TabPanel>
            <BullyBullyHistoryTable history={gameHistory.bullyBully} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

const querier = async (setLoading: (isLoading: boolean) => void) => {
  const cricketMarkUp = await db.cricketMarkUpResult.toCollection().reverse().sortBy('playedAt');
  const eaglesEye = await db.eaglesEyeResult.toCollection().reverse().sortBy('playedAt');
  const doubleTrouble = await db.doubleTroubleResult.toCollection().reverse().sortBy('playedAt');
  const sweet16 = await db.sweet16Result.toCollection().reverse().sortBy('playedAt');
  const topsAndTens = await db.topsAndTensResult.toCollection().reverse().sortBy('playedAt');
  const twoDartCombinations = await db.twoDartCombinationsResult
    .toCollection()
    .reverse()
    .sortBy('playedAt');
  const aroundTheCompass = await db.aroundTheCompassResult
    .toCollection()
    .reverse()
    .sortBy('playedAt');
  const tonsUp = await db.tonsUpResult.toCollection().reverse().sortBy('playedAt');
  setLoading(false);
  const route64 = await db.route64Result.toCollection().reverse().sortBy('playedAt');
  const eightyThrew = await db.eightyThrewResult.toCollection().reverse().sortBy('playedAt');
  const shanghaiNights = await db.shanghaiNightsResult.toCollection().reverse().sortBy('playedAt');
  const switchHitter = await db.switchHitterResult.toCollection().reverse().sortBy('playedAt');
  const bullyBully = await db.bullyBullyResult.toCollection().reverse().sortBy('playedAt');
  return {
    cricketMarkUp,
    eaglesEye,
    doubleTrouble,
    sweet16,
    topsAndTens,
    twoDartCombinations,
    aroundTheCompass,
    tonsUp,
    route64,
    eightyThrew,
    shanghaiNights,
    switchHitter,
    bullyBully,
  };
};

const initialQuery = {
  cricketMarkUp: [],
  eaglesEye: [],
  doubleTrouble: [],
  sweet16: [],
  topsAndTens: [],
  twoDartCombinations: [],
  aroundTheCompass: [],
  tonsUp: [],
  route64: [],
  eightyThrew: [],
  shanghaiNights: [],
  switchHitter: [],
  bullyBully: [],
};
export default HistoryBoard;
