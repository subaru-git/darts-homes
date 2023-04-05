import React, { FC, Fragment, useEffect, useState } from 'react';
import {
  useDisclosure,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  useBreakpointValue,
} from '@chakra-ui/react';
import { MdDeleteForever } from 'react-icons/md';
import IconButton from '@/atoms/IconButton';
import RadioButton from '@/atoms/RadioButton/RadioButton';
import Select from '@/atoms/Select';
import HistoryDeleteAlert from '@/containers/History/DeleteAlert';
import { db } from '@/db/db';
import { deleteResult } from '@/lib/GameHistoryManager';
import { ArrangeScore, DateFormat } from '@/lib/Helper/Format';

type HistoryProps = {
  history: ArrangeResultModel[];
  user: User | null | undefined;
};

const History: FC<HistoryProps> = ({ history, user }) => {
  const [out, setOut] = useState('single');
  const [separate, setSeparate] = useState(false);
  const [target, setTarget] = useState<number>(0);
  const [targets, setTargets] = useState<number[]>([]);
  const [scores, setScores] = useState<ArrangeOut[]>([]);
  const [deleteHistory, setDeleteHistory] = useState<ArrangeResultModel | undefined>(undefined);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMd = useBreakpointValue({ base: false, md: true });
  useEffect(() => {
    const scores = history
      .filter((item) => item.settings.out === out && item.settings.separate === separate)
      .map((item) => item.result)
      .flat()
      .sort((a, b) => b.target - a.target);
    setScores(scores);
    const targets = [...new Set(scores.map((item) => item.target))];
    setTargets(targets);
    setTarget(targets[0]);
  }, [history, out, separate]);
  return (
    <>
      <div className='flex flex-col gap-8'>
        <div className='flex flex-col gap-2'>
          <div>
            <span className='text-sm font-bold text-gray-500'>out options</span>
            <RadioButton
              values={[
                { value: 'single', label: 'Single Out', ariaLabel: 'single out' },
                { value: 'double', label: 'Double Out', ariaLabel: 'double out' },
                { value: 'master', label: 'Master Out', ariaLabel: 'master out' },
              ]}
              onChange={(out) => setOut(out)}
              defaultValue={out}
            />
          </div>
          <div>
            <span className='text-sm font-bold text-gray-500'>bull options</span>
            <RadioButton
              values={[
                { value: 'fat', label: 'Fat Bull', ariaLabel: 'fat bull' },
                { value: 'separate', label: 'Separate Bull', ariaLabel: 'separate bull' },
              ]}
              onChange={(bull) => setSeparate(bull === 'separate')}
              defaultValue={separate ? 'separate' : 'fat'}
            />
          </div>
          <Select
            options={targets.map((i) => i.toString())}
            onSelect={(option) => setTarget(parseInt(option))}
          />
          <div className='flex justify-center overflow-x-scroll'>
            <table className='w-full'>
              <tbody>
                {scores
                  .filter((s) => s.target === target)
                  .map((item, i) => (
                    <tr key={i} className='border-b'>
                      {item.score.flat().map((s, i) => (
                        <td key={i} className='p-1 md:p-2'>
                          <span className='text-sm md:text-base'>{s}</span>
                        </td>
                      ))}
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
        <div aria-label={'game history'}>
          <h3 className='mb-2 text-sm font-bold md:text-base'>Game History</h3>
          <div className='flex justify-center overflow-x-scroll'>
            <table className='w-full table-fixed'>
              <tbody>
                {history.map((h) => (
                  <Fragment key={h.uuid}>
                    <tr className='bg-green-100 text-xs md:text-base'>
                      <td className='p-0 md:p-1' colSpan={2}>
                        Arrange
                      </td>
                      <td className='whitespace-nowrap p-0 md:p-1' colSpan={2}>
                        {h.settings.out} / {h.settings.separate ? 'separate' : 'fat'}
                      </td>
                      <td className='p-0 text-end md:p-1' colSpan={3}>
                        <span>{DateFormat(h.playedAt)}</span>
                      </td>
                      <td className='flex items-center p-0 text-center md:p-1'>
                        <IconButton
                          aria-label='delete history'
                          onClick={() => {
                            setDeleteHistory(h);
                            onOpen();
                          }}
                          color='ghost'
                        >
                          <MdDeleteForever size={isMd ? 24 : 19} />
                        </IconButton>
                      </td>
                    </tr>
                    <tr>
                      {h.result.map((r, i) => (
                        <Fragment key={i}>
                          <td className='p-1 text-sm md:text-base'>
                            <Popover trigger={'hover'}>
                              <PopoverTrigger>
                                <span className='text-center underline'>{r.target}</span>
                              </PopoverTrigger>
                              <PopoverContent>
                                <PopoverArrow />
                                <PopoverBody>
                                  <div className='flex flex-col'>
                                    {ArrangeScore(r.score).map((s, i) => (
                                      <div key={i} className='grid grid-cols-4 gap-1'>
                                        {s.map((n, i) => (
                                          <span
                                            key={`${n}-${i}`}
                                            className={`${
                                              n === 'FINISH'
                                                ? 'text-red-500'
                                                : n === 'BUST'
                                                ? 'text-blue-500'
                                                : ''
                                            } ${
                                              n === 'FINISH' || n === 'BUST' ? 'col-start-4' : ''
                                            }`}
                                          >
                                            {n}
                                          </span>
                                        ))}
                                      </div>
                                    ))}
                                  </div>
                                </PopoverBody>
                              </PopoverContent>
                            </Popover>
                          </td>
                        </Fragment>
                      ))}
                    </tr>
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
          {deleteHistory && (
            <HistoryDeleteAlert
              message={`Arrange: ${DateFormat(deleteHistory.playedAt)}`}
              isOpen={isOpen}
              onClose={onClose}
              onDelete={() => {
                deleteResult(deleteHistory.uuid, db.arrangeResult, user);
                onClose();
              }}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default History;
