import React, { FC, Fragment, useState, useEffect, useRef } from 'react'
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Center,
  Collapse,
  Flex,
  Grid,
  Heading,
  Spinner,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tr,
  useBreakpointValue,
} from '@chakra-ui/react'
import fileDownload from 'js-file-download'
import { BiImport, BiExport } from 'react-icons/bi'
import { getGameHistory, importGameHistory } from '@/lib/GameHistoryManager/GameHistory'
import { isGameHistory } from '@/lib/Helper/TypeGuard'

const HistoryBoard: FC = () => {
  const [gameHistory, setGameHistory] = useState<GameResult[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const isMd = useBreakpointValue({ base: false, md: true })
  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    setGameHistory(getGameHistory())
    setLoading(false)
  }, [loading])
  if (loading || !gameHistory)
    return (
      <Center>
        <Spinner />
      </Center>
    )

  return (
    <Box p={{ base: 1, md: 4 }}>
      <Collapse in={error} animateOpacity>
        <Alert status='error'>
          <AlertIcon />
          <AlertTitle>Invalid Import File.</AlertTitle>
          <AlertDescription>Your import file is invalid.</AlertDescription>
        </Alert>
      </Collapse>
      <Flex pb={4} justifyContent='space-between'>
        <Heading size={{ base: 'lg', md: 'xl' }}>History</Heading>
        <Grid templateColumns='repeat(2, 1fr)' gap={4}>
          <input
            type='file'
            accept='.json'
            ref={inputRef}
            hidden
            onChange={(e) => {
              if (!e.target.files) return
              for (const file of e.target.files) {
                const roader = new FileReader()
                roader.onload = (e) => {
                  const history = JSON.parse(e.target?.result as string)
                  if (!isGameHistory(history)) {
                    setError(true)
                    return
                  }
                  setError(false)
                  importGameHistory(history)
                  setGameHistory(history)
                }
                roader.readAsText(file)
              }
              e.target.value = ''
            }}
          />
          <Button
            variant='outline'
            size={{ base: 'sm', md: 'md' }}
            colorScheme='red'
            onClick={() => {
              console.log('onclick')
              inputRef.current?.click()
            }}
            leftIcon={<BiImport />}
          >
            Import
          </Button>
          <Button
            variant='outline'
            size={{ base: 'sm', md: 'md' }}
            colorScheme='teal'
            onClick={() => fileDownload(JSON.stringify(gameHistory), 'darts-games-history.json')}
            leftIcon={<BiExport />}
          >
            Export
          </Button>
        </Grid>
      </Flex>
      {isMd ? (
        <DesktopHistoryTable history={gameHistory} />
      ) : (
        <MobileHistoryTable history={gameHistory} />
      )}
    </Box>
  )
}

const DesktopHistoryTable: FC<{ history: GameResult[] }> = ({ history }) => {
  return (
    <TableContainer>
      <Table>
        <Tbody>
          {history
            .sort((a, b) => (a.playedAt < b.playedAt ? 1 : -1))
            .map((item) => (
              <Fragment key={`${item.game}-${item.playedAt}`}>
                <Tr key={`${item.game}-${item.playedAt}-game`} bg='green.100'>
                  <Td colSpan={5} p={1}>
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
                </Tr>
                <Tr key={`${item.game}-${item.playedAt}-score`}>
                  <Td pr={20}>
                    <Text fontSize='lg' as='b'>
                      Total: {item.result.count}
                    </Text>
                  </Td>
                  {item.scores.map((score, i) => (
                    <Td key={`${item.game}-${item.playedAt}-score-${i}`}>
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
  )
}

const MobileHistoryTable: FC<{ history: GameResult[] }> = ({ history }) => {
  return (
    <TableContainer w={'100%'}>
      <Table>
        <Tbody>
          {history
            .sort((a, b) => (a.playedAt < b.playedAt ? 1 : -1))
            .map((item) => (
              <Fragment key={`${item.game}-${item.playedAt}`}>
                <Tr key={`${item.game}-${item.playedAt}-game`} bg='green.100'>
                  <Td p={0} fontSize='xs'>
                    {item.game}
                  </Td>
                  <Td p={0} fontSize='xs'>
                    Target: {item.setting.targetCount}
                  </Td>
                  <Td p={0} fontSize='xs' textAlign='end'>
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
                </Tr>
                <Tr key={`${item.game}-${item.playedAt}-score`}>
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
  )
}
export default HistoryBoard
