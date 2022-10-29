import React, { FC, Fragment, useState } from 'react'
import {
  IconButton,
  Table,
  TableContainer,
  Text,
  Tbody,
  Td,
  Tr,
  useDisclosure,
  useBreakpointValue,
} from '@chakra-ui/react'
import { MdDeleteForever } from 'react-icons/md'
import HistoryDeleteAlert from '../HistoryDeleteAlert'
import { EaglesEyeResultModel } from '@/db/db'
import { deleteEaglesEyeHistory } from '@/lib/GameHistoryManager/GameHistory'

type EaglesEyeHistoryTableProps = {
  history: EaglesEyeResultModel[]
}

const EaglesEyeHistoryTable: FC<EaglesEyeHistoryTableProps> = ({ history }) => {
  const [deleteHistory, setDeleteHistory] = useState<EaglesEyeResultModel | undefined>(undefined)
  const isMd = useBreakpointValue({ base: false, md: true })
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <TableContainer>
        <Table>
          <Tbody>
            {history.map((item) => (
              <Fragment key={`${item.id}`}>
                {isMd ? (
                  <DesktopEaglesEyeHistoryRow
                    history={item}
                    onDelete={() => {
                      setDeleteHistory(item)
                      onOpen()
                    }}
                  />
                ) : (
                  <MobileEaglesEyeHistoryRow
                    history={item}
                    onDelete={() => {
                      setDeleteHistory(item)
                      onOpen()
                    }}
                  />
                )}
              </Fragment>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      {deleteHistory ? (
        <HistoryDeleteAlert
          message={`Eagle's Eye: ${new Date(deleteHistory.playedAt).toLocaleString('ja-JP', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
          })}`}
          isOpen={isOpen}
          onClose={onClose}
          onDelete={() => {
            deleteEaglesEyeHistory(deleteHistory.id)
            onClose()
          }}
        />
      ) : null}
    </>
  )
}

const DesktopEaglesEyeHistoryRow: FC<{
  history: EaglesEyeResultModel
  onDelete: () => void
}> = ({ history, onDelete }) => {
  return (
    <>
      <Tr key={`${history.playedAt}-game`} bg='green.100'>
        <Td colSpan={4} p={1}>
          {"Eagle's Eye"}
        </Td>
        <Td colSpan={2} p={1} textAlign='end'>
          <Text>
            {new Date(history.playedAt).toLocaleString('ja-JP', {
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
            onClick={onDelete}
          />
        </Td>
      </Tr>
      <Tr key={`${history.id}-score`}>
        <Td pr={20}>
          <Text fontSize='lg' as='b'>
            Score: {history.result}
          </Text>
        </Td>
        <Td>
          <Text fontSize='sm'>
            S-BULL:
            {history.scores.flat().reduce((pre, crr) => pre + (crr === 'S-BULL' ? 1 : 0), 0)}
          </Text>
        </Td>
        <Td>
          <Text fontSize='sm'>
            D-BULL:
            {history.scores.flat().reduce((pre, crr) => pre + (crr === 'D-BULL' ? 1 : 0), 0)}
          </Text>
        </Td>
      </Tr>
    </>
  )
}

const MobileEaglesEyeHistoryRow: FC<{
  history: EaglesEyeResultModel
  onDelete: () => void
}> = ({ history, onDelete }) => {
  return (
    <>
      <Tr bg='green.100'>
        <Td p={0} fontSize='xs'>
          {"Eagle's Eye"}
        </Td>
        <Td p={0} fontSize='xs' textAlign='start'>
          <Text>
            {new Date(history.playedAt).toLocaleString('ja-JP', {
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
            onClick={onDelete}
          />
        </Td>
      </Tr>
      <Tr>
        <Td py={2} fontSize='sm' fontWeight='bold' px={1} colSpan={1}>
          Score: {history.result}
        </Td>
        <Td py={2} fontSize='xs' fontStyle={'italic'} colSpan={2} px={1}>
          <Text fontSize='sm'>
            S-BULL:
            {history.scores.flat().reduce((pre, crr) => (pre + crr === 'S-BULL' ? 1 : 0), 0)}
          </Text>
        </Td>
        <Td py={2} fontSize='xs' fontStyle={'italic'} colSpan={2} px={1}>
          <Text fontSize='sm'>
            D-BULL:
            {history.scores.flat().reduce((pre, crr) => (pre + crr === 'D-BULL' ? 1 : 0), 0)}
          </Text>
        </Td>
      </Tr>
    </>
  )
}

export default EaglesEyeHistoryTable
