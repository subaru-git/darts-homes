import React, { FC, Fragment, useState } from 'react';
import { useDisclosure } from '@chakra-ui/react';
import { MdDeleteForever } from 'react-icons/md';
import IconButton from '@/atoms/IconButton';
import HistoryDeleteAlert from '@/containers/History/DeleteAlert';
import { db } from '@/db/db';
import { deleteResult } from '@/lib/GameHistoryManager';
import { DateFormat } from '@/lib/Helper/Format';

type HistoryTableProps = {
  history: AroundTheCompassResultModel[];
  user: User | null | undefined;
};

const HistoryTable: FC<HistoryTableProps> = ({ history, user }) => {
  const [deleteHistory, setDeleteHistory] = useState<AroundTheCompassResultModel | undefined>(
    undefined,
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <div>
        <table className='w-full table-fixed'>
          <tbody>
            {history.map((item) => (
              <Fragment key={`${item.id}`}>
                <HistoryRow
                  history={item}
                  onDelete={() => {
                    setDeleteHistory(item);
                    onOpen();
                  }}
                />
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
      {deleteHistory ? (
        <HistoryDeleteAlert
          message={`Around The Compass: ${DateFormat(deleteHistory.playedAt)}`}
          isOpen={isOpen}
          onClose={onClose}
          onDelete={() => {
            deleteResult(deleteHistory.uuid, db.aroundTheCompassResult, user);
            onClose();
          }}
        />
      ) : null}
    </>
  );
};

const HistoryRow: FC<{
  history: AroundTheCompassResultModel;
  onDelete: () => void;
}> = ({ history, onDelete }) => {
  return (
    <>
      <tr key={`${history.playedAt}-game`} className='bg-green-100'>
        <td colSpan={3} className='p-0 text-xs md:p-1 md:text-base'>
          Around The Compass
        </td>
        <td colSpan={1} className='whitespace-nowrap p-0 text-end text-xs md:p-1 md:text-base'>
          Round: {history.round}
        </td>
        <td colSpan={3} className=' whitespace-nowrap p-0 text-end text-xs md:p-1 md:text-base'>
          <span>{DateFormat(history.playedAt)}</span>
        </td>
        <td colSpan={1} className='flex items-center p-0 text-center text-xs md:p-1 md:text-base'>
          <IconButton
            className='m-auto p-0'
            aria-label='delete history'
            color='ghost'
            onClick={onDelete}
          >
            <MdDeleteForever size={24} />
          </IconButton>
        </td>
      </tr>
      <tr key={`${history.id}-score`}>
        <td className='border-b py-1 pr-20 text-sm md:py-2 md:text-base' colSpan={8}>
          <span className='text-base font-bold md:text-lg'>Score: {history.result}</span>
        </td>
      </tr>
    </>
  );
};

export default HistoryTable;
