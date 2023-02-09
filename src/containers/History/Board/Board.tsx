import React, { FC } from 'react';
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
import HistoryImportExport from '../ImportExport';
import AroundTheCompassHistoryTable from '@/containers/AroundTheCompass/HistoryTable';
import ArrangeHistory from '@/containers/Arrange/History';
import BullyBullyHistoryTable from '@/containers/BullyBully/HistoryTable';
import CountUpHistoryTable from '@/containers/CountUp/HistoryTable';
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
import TreblesForShowHistoryTable from '@/containers/TreblesForShow/HistoryTable';
import TwoDartCombinationsHistoryTable from '@/containers/TwoDartCombinations/HistoryTable';
import useLocale from '@/hooks/locale';

type HistoryBoardProps = {
  history: GameResultModel;
  user: User | null | undefined;
};

const HistoryBoard: FC<HistoryBoardProps> = ({ history, user }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t } = useLocale();
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
          <Tab aria-label='arrange'>Arrange</Tab>
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
          <Tab aria-label='trebles for show'>Trebles For Show</Tab>
          <Tab aria-label='count up'>Count Up</Tab>
        </TabList>
        <TabPanels>
          <TabPanel aria-label='arrange history'>
            <ArrangeHistory history={history.arrange ?? []} user={user} />
          </TabPanel>
          <TabPanel aria-label='cricket mark up history'>
            <CricketMarkUpHistoryTable history={history.cricketMarkUp ?? []} user={user} />
          </TabPanel>
          <TabPanel aria-label="eagle's eye history">
            <EaglesEyeHistoryTable history={history.eaglesEye ?? []} user={user} />
          </TabPanel>
          <TabPanel aria-label='double trouble history'>
            <DoubleTroubleHistoryTable history={history.doubleTrouble ?? []} user={user} />
          </TabPanel>
          <TabPanel aria-label='sweet 16 history'>
            <Sweet16HistoryTable history={history.sweet16 ?? []} user={user} />
          </TabPanel>
          <TabPanel aria-label='tops and tens history'>
            <TopsAndTensHistoryTable history={history.topsAndTens ?? []} user={user} />
          </TabPanel>
          <TabPanel aria-label='two dart combinations history'>
            <TwoDartCombinationsHistoryTable
              history={history.twoDartCombinations ?? []}
              user={user}
            />
          </TabPanel>
          <TabPanel aria-label='around the compass history'>
            <AroundTheCompassHistoryTable history={history.aroundTheCompass ?? []} user={user} />
          </TabPanel>
          <TabPanel aria-label='tons up history'>
            <TonsUpHistoryTable history={history.tonsUp ?? []} user={user} />
          </TabPanel>
          <TabPanel aria-label='route 64 history'>
            <Route64HistoryTable history={history.route64 ?? []} user={user} />
          </TabPanel>
          <TabPanel aria-label='eighty threw history'>
            <EightyThrewHistoryTable history={history.eightyThrew ?? []} user={user} />
          </TabPanel>
          <TabPanel aria-label='shanghai nights history'>
            <ShanghaiNightsHistoryTable history={history.shanghaiNights ?? []} user={user} />
          </TabPanel>
          <TabPanel aria-label='switch hitter history'>
            <SwitchHitterHistoryTable history={history.switchHitter ?? []} user={user} />
          </TabPanel>
          <TabPanel aria-label='bully bully history'>
            <BullyBullyHistoryTable history={history.bullyBully ?? []} user={user} />
          </TabPanel>
          <TabPanel aria-label='trebles for show history'>
            <TreblesForShowHistoryTable history={history.treblesForShow ?? []} user={user} />
          </TabPanel>
          <TabPanel aria-label='count up history'>
            <CountUpHistoryTable history={history.countUp ?? []} user={user} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default HistoryBoard;
