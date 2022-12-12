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
} from '@chakra-ui/react';
import { MdDeleteForever } from 'react-icons/md';
import HistoryDeleteAlert from '@/containers/History/DeleteAlert';
import { db } from '@/db/db';
import { deleteResult } from '@/lib/GameHistoryManager';
import { DateFormat } from '@/lib/Helper/Format';

type HistoryTableProps = {
  history: DoubleTroubleResultModel[];
  user: User | null | undefined;
};

const HistoryTable: FC<HistoryTableProps> = ({ history, user }) => {
  const [deleteHistory, setDeleteHistory] = useState<DoubleTroubleResultModel | undefined>(
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
                  <DesktopDoubleTroubleHistoryRow
                    history={item}
                    onDelete={() => {
                      setDeleteHistory(item);
                      onOpen();
                    }}
                  />
                ) : (
                  <MobileDoubleTroubleRow
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
          message={`Double Trouble: ${DateFormat(deleteHistory.playedAt)}`}
          isOpen={isOpen}
          onClose={onClose}
          onDelete={() => {
            deleteResult(deleteHistory.uuid, db.doubleTroubleResult, user);
            onClose();
          }}
        />
      ) : null}
    </>
  );
};

const DesktopDoubleTroubleHistoryRow: FC<{
  history: DoubleTroubleResultModel;
  onDelete: () => void;
}> = ({ history, onDelete }) => {
  return (
    <>
      <Tr key={`${history.playedAt}-game`} bg='green.100'>
        <Td colSpan={4} p={1}>
          Double Trouble
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
            Score: {history.result}
          </Text>
        </Td>
      </Tr>
    </>
  );
};

const MobileDoubleTroubleRow: FC<{
  history: DoubleTroubleResultModel;
  onDelete: () => void;
}> = ({ history, onDelete }) => {
  return (
    <>
      <Tr bg='green.100'>
        <Td p={0} fontSize='xs'>
          Double Trouble
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
          Score: {history.result}
        </Td>
      </Tr>
    </>
  );
};

export default HistoryTable;
