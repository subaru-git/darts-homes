import React, { FC, Fragment, useState } from 'react'
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Center,
  CloseButton,
  Collapse,
  Flex,
  Heading,
  IconButton,
  Spinner,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tr,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react'
import { useLiveQuery } from 'dexie-react-hooks'
import { MdDeleteForever } from 'react-icons/md'
import HistoryDeleteAlert from '../HistoryDeleteAlert'
import HistoryImportExport from '../HistoryImportExport'
import { db, GameResultModel } from '@/db/db'
import useLocale from '@/hooks/locale'

const HistoryBoard: FC = () => {
  const [loading, setLoading] = useState(true)
  const gameHistory =
    useLiveQuery(async () => {
      const history = await (await db.gameResult.toCollection().sortBy('playedAt')).reverse()
      setLoading(false)
      return history
    }) || []
  const { isOpen, onOpen, onClose } = useDisclosure()
  const isMd = useBreakpointValue({ base: false, md: true })
  const { t } = useLocale()
  if (loading) {
    return (
      <Center height='70vh'>
        <Spinner />
      </Center>
    )
  }

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
        <Heading size={{ base: 'lg', md: 'xl' }}>History</Heading>
        <HistoryImportExport onError={onOpen} />
      </Flex>
      {isMd ? (
        <DesktopHistoryTable history={gameHistory} />
      ) : (
        <MobileHistoryTable history={gameHistory} />
      )}
    </Box>
  )
}

const DesktopHistoryTable: FC<{ history: GameResultModel[] }> = ({ history }) => {
  const [deleteHistory, setDeleteHistory] = useState<GameResultModel | undefined>(undefined)
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <TableContainer>
        <Table>
          <Tbody>
            {history.map((item) => (
              <Fragment key={`${item.game}-${item.id}`}>
                <Tr key={`${item.game}-${item.playedAt}-game`} bg='green.100'>
                  <Td colSpan={4} p={1}>
                    {item.game}
                  </Td>
                  <Td colSpan={1} p={1}>
                    Target: {item.setting.targetCount}
                  </Td>
                  <Td colSpan={2} p={1} textAlign='end'>
                    <Text>
                      {new Date(item.playedAt).toLocaleString('ja-JP', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit',
                      })}
                    </Text>
                  </Td>
                  <Td colSpan={1} p={1} textAlign='center'>
                    <IconButton
                      aria-label='delete history'
                      icon={<MdDeleteForever size={24} />}
                      variant='ghost'
                      size='xs'
                      onClick={() => {
                        setDeleteHistory(item)
                        onOpen()
                      }}
                    />
                  </Td>
                </Tr>
                <Tr key={`${item.game}-${item.id}-score`}>
                  <Td pr={20}>
                    <Text fontSize='lg' as='b'>
                      Total: {item.result.count}
                    </Text>
                  </Td>
                  {item.scores.map((score, i) => (
                    <Td key={`${item.game}-${item.id}-score-${i}`}>
                      <Text fontSize='sm'>
                        {score.number === 25 ? 'BULL' : score.number}: {score.total}
                      </Text>
                    </Td>
                  ))}
                </Tr>
              </Fragment>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <HistoryDeleteAlert history={deleteHistory} isOpen={isOpen} onClose={onClose} />
    </>
  )
}

const MobileHistoryTable: FC<{ history: GameResultModel[] }> = ({ history }) => {
  const [deleteHistory, setDeleteHistory] = useState<GameResultModel | undefined>(undefined)
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <TableContainer w={'100%'}>
        <Table>
          <Tbody>
            {history.map((item) => (
              <Fragment key={`${item.game}-${item.id}`}>
                <Tr key={`${item.game}-${item.id}-game`} bg='green.100'>
                  <Td p={0} fontSize='xs'>
                    {item.game}
                  </Td>
                  <Td p={0} fontSize='xs'>
                    Target: {item.setting.targetCount}
                  </Td>
                  <Td p={0} fontSize='xs' textAlign='start'>
                    <Text>
                      {new Date(item.playedAt).toLocaleString('ja-JP', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit',
                      })}
                    </Text>
                  </Td>
                  <Td p={0} textAlign='start'>
                    <IconButton
                      aria-label='delete history'
                      icon={<MdDeleteForever size={19} />}
                      variant='ghost'
                      size='2xs'
                      onClick={() => {
                        setDeleteHistory(item)
                        onOpen()
                      }}
                    />
                  </Td>
                </Tr>
                <Tr key={`${item.game}-${item.id}-score`}>
                  <Td py={2} fontSize='sm' fontWeight='bold' px={1} colSpan={1}>
                    Total: {item.result.count}
                  </Td>
                  <Td py={2} fontSize='xs' fontStyle={'italic'} colSpan={2} px={1}>
                    <Box w={'50vw'} overflowX='scroll'>
                      {item.scores
                        .map(
                          (score) =>
                            `${score.number === 25 ? 'BULL' : score.number}:${score.total}`,
                        )
                        .join(' ')}
                    </Box>
                  </Td>
                </Tr>
              </Fragment>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <HistoryDeleteAlert history={deleteHistory} isOpen={isOpen} onClose={onClose} />
    </>
  )
}

export default HistoryBoard
