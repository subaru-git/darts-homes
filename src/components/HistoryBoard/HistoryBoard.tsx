import React, { FC, useState } from 'react'
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
} from '@chakra-ui/react'
import { useLiveQuery } from 'dexie-react-hooks'
import CricketMarkUpHistoryTable from '../CricketMarkUpHistoryTable'
import EaglesEyeHistoryTable from '../EaglesEyeHistoryTable'
import HistoryImportExport from '../HistoryImportExport'
import Loading from '../Loading'
import { db } from '@/db/db'
import useLocale from '@/hooks/locale'

const HistoryBoard: FC = () => {
  const [loading, setLoading] = useState(true)
  const gameHistory = useLiveQuery(async () => {
    const cricketMarkUpHistory = await (
      await db.cricketMarkUpResult.toCollection().sortBy('playedAt')
    ).reverse()
    const eaglesEyeHistory = await (
      await db.eaglesEyeResult.toCollection().sortBy('playedAt')
    ).reverse()
    setLoading(false)
    return { cricketMarkUpHistory, eaglesEyeHistory }
  }) || { cricketMarkUpHistory: [], eaglesEyeHistory: [] }
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { t } = useLocale()
  if (loading) return <Loading />
  return (
    <Box p={{ base: 1, md: 4 }}>
      <Collapse in={isOpen} animateOpacity>
        <Alert status='error' justifyContent='space-between'>
          <Flex>
            <AlertIcon />
            <AlertTitle>{t.IMPORT_ERROR_TITLE}</AlertTitle>
            <AlertDescription>{t.IMPORT_ERROR_DESCRIPTION}</AlertDescription>
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
        </TabList>
        <TabPanels>
          <TabPanel>
            <CricketMarkUpHistoryTable history={gameHistory.cricketMarkUpHistory} />
          </TabPanel>
          <TabPanel>
            <EaglesEyeHistoryTable history={gameHistory.eaglesEyeHistory} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default HistoryBoard
