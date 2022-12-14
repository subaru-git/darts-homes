---
to: src/containers/<%= name %>/HistoryTable/HistoryTable.tsx
---
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
import { <%= name %>ResultModel } from '@/db/<%= name %>ResultModel';
import { db } from '@/db/db';
import { deleteFromDB } from '@/lib/GameHistoryManager/GameHistory';

type HistoryTableProps = {
  history: <%= name %>ResultModel[];
};

const HistoryTable: FC<HistoryTableProps> = ({ history }) => {
  const [deleteHistory, setDeleteHistory] = useState<<%= name %>ResultModel | undefined>(undefined);
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
                  <DesktopHistoryRow
                    history={item}
                    onDelete={() => {
                      setDeleteHistory(item);
                      onOpen();
                    }}
                  />
                ) : (
                  <MobileRow
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
          message={`<%= h.changeCase.title(name) %>: ${new Date(deleteHistory.playedAt).toLocaleString('ja-JP', {
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
            deleteFromDB(deleteHistory.id, db.<%= h.changeCase.camel(name) %>Result);
            onClose();
          }}
        />
      ) : null}
    </>
  );
};

const DesktopHistoryRow: FC<{
  history: <%= name %>ResultModel;
  onDelete: () => void;
}> = ({ history, onDelete }) => {
  return (
    <>
      <Tr key={`${history.playedAt}-game`} bg='green.100'>
        <Td colSpan={4} p={1}>
          <%= h.changeCase.title(name) %>
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
      </Tr>
    </>
  );
};

const MobileRow: FC<{
  history: <%= name %>ResultModel;
  onDelete: () => void;
}> = ({ history, onDelete }) => {
  return (
    <>
      <Tr bg='green.100'>
        <Td p={0} fontSize='xs'>
          <%= h.changeCase.title(name) %>
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
      </Tr>
    </>
  );
};

export default HistoryTable;
