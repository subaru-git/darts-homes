'use client';
import CountDrill from '@/lib/CountDrill';
import MainTemplate from '@/templates/MainTemplate';
import { useBreakpointValue } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import ordinal from 'ordinal';
import { FC, use, useEffect, useState } from 'react';
import NewGame from './NewGame';
import DescriptionModal from '@/components/DescriptionModal';
import TenKey from '@/components/TenKey';
import TargetBoard from '@/components/TargetBoard';

const Main: FC = () => {
  const [game, setGame] = useState<CountDrill | null>(null);
  const [current, setCurrent] = useState('-');
  const [isCall, setIsCall] = useState(false);
  const [wrong, setWrong] = useState(false);
  const [scoreFocus, setScoreFocus] = useState(false);
  const isMd = useBreakpointValue({ base: false, md: true });
  const t = useTranslations('tools.countdrill');

  useEffect(() => setGame(new CountDrill()), []);
  if (!game) return <MainTemplate label={'count-drill-main'} isLoading />;

  return (
    <MainTemplate label='count-drill-main'>
      {isMd ? (
        <DesktopMain
          game={game}
          setGame={setGame}
          current={current}
          setCurrent={setCurrent}
          isCall={isCall}
          setIsCall={setIsCall}
          wrong={wrong}
          setWrong={setWrong}
          scoreFocus={scoreFocus}
          setScoreFocus={setScoreFocus}
          description={t('description')}
        />
      ) : (
        <MobileMain
          game={game}
          setGame={setGame}
          current={current}
          setCurrent={setCurrent}
          isCall={isCall}
          setIsCall={setIsCall}
          wrong={wrong}
          setWrong={setWrong}
          scoreFocus={scoreFocus}
          setScoreFocus={setScoreFocus}
          description={t('description')}
        />
      )}
    </MainTemplate>
  );
};

type MainProps = {
  game: CountDrill;
  setGame: (game: CountDrill) => void;
  current: string;
  setCurrent: (current: string) => void;
  isCall: boolean;
  setIsCall: (call: boolean) => void;
  wrong: boolean;
  setWrong: (wrong: boolean) => void;
  scoreFocus?: boolean;
  setScoreFocus?: (focus: boolean) => void;
  description?: string;
};
const DesktopMain: FC<MainProps> = ({
  game,
  setGame,
  current,
  setCurrent,
  isCall,
  setIsCall,
  wrong,
  setWrong,
  scoreFocus,
  setScoreFocus,
  description,
}) => {
  return (
    <div>
      <div className='flex items-center justify-between'>
        <NewGame
          onNewGame={() => {
            setGame(new CountDrill());
            setCurrent('-');
            setIsCall(false);
            setWrong(false);
          }}
          isFinished={false}
        />
        <DescriptionModal header={'Count Drill'} description={description} />
      </div>
      <div className='flex w-full flex-1 flex-col content-center gap-2 text-center'>
        <span className='py-3 text-[48px]'>Left: {game.getLeftNumber()}</span>
        <div className='grid grid-cols-3'>
          <span>1st: {game.getThrows()[0] ?? '-'}</span>
          <span>2nd: {game.getThrows()[1] ?? '-'}</span>
          <span>3rd: {game.getThrows()[2] ?? '-'}</span>
        </div>
      </div>
      <div className='flex items-center justify-around gap-4 p-4'>
        <div className='flex w-full items-center justify-center gap-2'>
          <TargetBoard
            message={isCall ? 'fin' : ordinal(game.getThrows().length)}
            target={
              isCall ? 'Call' : (game.getThrows()[game.getThrows().length - 1] ?? 0).toString()
            }
          />
          <TargetBoard message='Score' target={current} size='sm' />
          {wrong ? <span className='w-4'>❌</span> : <div className='w-4' />}
        </div>
        <div className='min-w-72'>
          <TenKey
            onCount={(n) => {
              if (isCall && parseInt(n) === game.call()) {
                setWrong(false);
                setGame(new CountDrill());
                setCurrent('-');
                setIsCall(false);
                return;
              }
              if (parseInt(n) === game.getNowLeftNumber()) {
                setWrong(false);
                if (game.getThrows().length >= 3) {
                  setIsCall(true);
                  setCurrent('-');
                  return;
                }
                game.throw();
                return;
              }
              setWrong(true);
            }}
            display={false}
            onChange={(n) => {
              if (n === '') {
                setCurrent('-');
                return;
              }
              setCurrent(n);
            }}
            keyboard={true}
            force={false}
            nolimit={true}
          />
        </div>
      </div>
    </div>
  );
};
const MobileMain: FC<MainProps> = ({
  game,
  setGame,
  current,
  setCurrent,
  isCall,
  setIsCall,
  wrong,
  setWrong,
  description,
}) => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex w-full'>
        <NewGame
          onNewGame={() => {
            setGame(new CountDrill());
            setCurrent('-');
            setIsCall(false);
            setWrong(false);
          }}
          isFinished={false}
        />
        <div className='flex w-full flex-1 flex-col content-center gap-2 text-center'>
          <span className='py-3 text-[48px]'>Left: {game.getLeftNumber()}</span>
          <div className='grid grid-cols-3'>
            <span>1st: {game.getThrows()[0] ?? '-'}</span>
            <span>2nd: {game.getThrows()[1] ?? '-'}</span>
            <span>3rd: {game.getThrows()[2] ?? '-'}</span>
          </div>
        </div>
        <DescriptionModal header={'Count Drill'} description={description} />
      </div>
      <div className='flex w-full items-center justify-center gap-2'>
        <TargetBoard
          message={isCall ? 'fin' : ordinal(game.getThrows().length)}
          target={isCall ? 'Call' : (game.getThrows()[game.getThrows().length - 1] ?? 0).toString()}
        />
        <TargetBoard message='Score' target={current} size='sm' />
        {wrong ? <span className='w-4'>❌</span> : <div className='w-4' />}
      </div>
      <div className='p-2'>
        <TenKey
          onCount={(n) => {
            if (isCall && parseInt(n) === game.call()) {
              setWrong(false);
              setGame(new CountDrill());
              setCurrent('-');
              setIsCall(false);
              return;
            }
            if (parseInt(n) === game.getNowLeftNumber()) {
              setWrong(false);
              if (game.getThrows().length >= 3) {
                setIsCall(true);
                setCurrent('-');
                return;
              }
              game.throw();
              return;
            }
            setWrong(true);
          }}
          display={false}
          onChange={(n) => {
            if (n === '') {
              setCurrent('-');
              return;
            }
            setCurrent(n);
          }}
          keyboard={false}
          force={false}
          nolimit={true}
        />
      </div>
    </div>
  );
};

export default Main;
