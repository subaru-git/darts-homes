import React, { FC, Fragment, useState } from 'react';
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
  Box,
} from '@chakra-ui/react';
import { MdDeleteForever } from 'react-icons/md';
import HistoryDeleteAlert from '@/containers/History/DeleteAlert';
import { CricketMarkUpResultModel } from '@/db/CricketMarkUpResultModel';
import { db } from '@/db/db';
import { deleteFromDB } from '@/lib/GameHistoryManager';
import { DateFormat } from '@/lib/Helper/Format';

type HistoryTableProps = {
  history: CricketMarkUpResultModel[];
};

const HistoryTable: FC<HistoryTableProps> = ({ history }) => {
  const [deleteHistory, setDeleteHistory] = useState<CricketMarkUpResultModel | undefined>(
    undefined,
  );
  const isMd = useBreakpointValue({ base: false, md: true });
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <TableContainer>
        <Table>
          <Tbody>
            {history.map((item) => (
              <Fragment key={`${item.id}`}>
                {isMd ? (
                  <DesktopCricketMarkUpHistoryRow
                    history={item}
                    onDelete={() => {
                      setDeleteHistory(item);
                      onOpen();
                    }}
                  />
                ) : (
                  <MobileCricketMarkUpHistoryRow
                    history={item}
                    onDelete={() => {
                      setDeleteHistory(item);
                      onOpen();
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
          message={`Cricket Mark-Up: ${DateFormat(deleteHistory.playedAt)}`}
          isOpen={isOpen}
          onClose={onClose}
          onDelete={() => {
            deleteFromDB(deleteHistory.id, db.cricketMarkUpResult);
            onClose();
          }}
        />
      ) : null}
    </>
  );
};

const DesktopCricketMarkUpHistoryRow: FC<{
  history: CricketMarkUpResultModel;
  onDelete: () => void;
}> = ({ history, onDelete }) => {
  return (
    <>
      <Tr key={`${history.playedAt}-game`} bg='green.100'>
        <Td colSpan={4} p={1}>
          Cricket Mark-Up
        </Td>
        <Td colSpan={1} p={1}>
          Target: {history.targetCount}
        </Td>
        <Td colSpan={2} p={1} textAlign='end'>
          <Text>{DateFormat(history.playedAt)}</Text>
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
            Total: {history.result}
          </Text>
        </Td>
        {history.scores.map((score, i) => (
          <Td key={`${history.id}-score-${i}`}>
            <Text fontSize='sm'>
              {score.number === 25 ? 'BULL' : score.number}: {score.total}
            </Text>
          </Td>
        ))}
      </Tr>
    </>
  );
};

const MobileCricketMarkUpHistoryRow: FC<{
  history: CricketMarkUpResultModel;
  onDelete: () => void;
}> = ({ history, onDelete }) => {
  return (
    <>
      <Tr bg='green.100'>
        <Td p={0} fontSize='xs'>
          Cricket Mark-Up
        </Td>
        <Td p={0} fontSize='xs'>
          Target: {history.targetCount}
        </Td>
        <Td p={0} fontSize='xs' textAlign='start'>
          <Text>{DateFormat(history.playedAt)}</Text>
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
          Total: {history.result}
        </Td>
        <Td py={2} fontSize='xs' fontStyle={'italic'} colSpan={2} px={1}>
          <Box overflowX='scroll'>
            {history.scores
              .map((score) => `${score.number === 25 ? 'BULL' : score.number}:${score.total}`)
              .join(' ')}
          </Box>
        </Td>
      </Tr>
    </>
  );
};

export default HistoryTable;
