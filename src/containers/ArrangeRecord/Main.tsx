'use client';
import React, { FC, RefObject, useEffect, useRef, useState } from 'react';
import { toBlob } from 'html-to-image';
import fileDownload from 'js-file-download';
import { isMobile } from 'react-device-detect';
import { RiDownload2Fill } from 'react-icons/ri';
import { TwitterIcon, TwitterShareButton } from 'react-share';
import IconButton from '@/atoms/IconButton';
import CopyToClipboardButton from '@/components/CopyToClipboardButton';
import DartBoard from '@/components/DartBoard';
import DescriptionModal from '@/components/DescriptionModal';
import SettingHeading from '@/components/SettingHeading';
import { drawArrow, getSegmentCenter } from '@/lib/Helper/CanvasDraw';
import MainTemplate from '@/templates/MainTemplate';
import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';

const Main: FC = () => {
  const searchParams = useSearchParams();
  const a = searchParams.get('a');
  const t = searchParams.get('t') ? parseInt(searchParams.get('t') as string) : 0;
  const arranges = (a ? (Array.isArray(a) ? a : a.split(',')) : []) as string[];
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageTargetRef = useRef<HTMLDivElement>(null);
  const [target, setTarget] = useState(t ?? 0);
  const [lines, setLines] = useState<string[]>(arranges ?? ['', '', '']);
  const trans = useTranslations('tools.arrangerecord');

  const getURL = () => {
    const url = new URL('https://darts.homes/arrangerecord');
    url.searchParams.set('t', target.toString());
    url.searchParams.set('a', lines.filter((l) => l !== '').join(','));
    return url.toString();
  };

  const getFileName = () => {
    const l = lines.filter((l) => l !== '').join('_');
    return `arrange-record-${target}-${l}.png`;
  };

  useEffect(() => {
    setTarget(t ?? 0);
    const arranges = (a ? (Array.isArray(a) ? a : a.split(',')) : ['', '', '']) as string[];
    setLines(arranges ?? ['', '', '']);
  }, [a, t]);
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current && containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        canvasRef.current.width = width;
        canvasRef.current.height = height;
        updateLines(containerRef, canvasRef, lines);
      }
    };
    const container = containerRef.current;
    if (container) {
      const resizeObserver = new ResizeObserver(handleResize);
      resizeObserver.observe(container);

      return () => {
        resizeObserver.disconnect();
      };
    }
  }, [lines]);
  useEffect(() => updateLines(containerRef, canvasRef, lines), [lines]);

  return (
    <MainTemplate label={'arrange-record-main'}>
      <div className='flex justify-end'>
        <DescriptionModal
          header={'Arrange Record'}
          description={<span className='whitespace-pre-wrap'>{trans('description')}</span>}
          game={false}
        />
      </div>
      <div className='mx-4 flex flex-col gap-4 md:flex-row md:content-center md:justify-center'>
        <div
          ref={imageTargetRef}
          className={`relative mx-auto aspect-square w-[50vh] max-w-[360px] md:mx-2 md:w-[60vh] md:max-w-[540px]`}
        >
          <div ref={containerRef} className='absolute left-0 top-0 w-full md:h-fit'>
            <div className='size-full'>
              <DartBoard onCount={() => {}} hard />
            </div>
          </div>
          <canvas ref={canvasRef} className='absolute left-0 top-0'></canvas>
        </div>
        <div className='flex flex-col gap-4 pb-4'>
          <div>
            <SettingHeading
              title={trans('help.Target.title')}
              hintHeader={trans('help.Target.hint.header')}
              hintBody={trans('help.Target.hint.body')}
            />
            <input
              type='number'
              className='h-fit w-32 rounded border bg-gray-50 px-2'
              onChange={(e) => setTarget(e.target.valueAsNumber)}
              defaultValue={target}
            />
          </div>
          <div>
            <SettingHeading
              title={trans('help.Arranges.title')}
              hintHeader={trans('help.Arranges.hint.header')}
              hintBody={trans('help.Arranges.hint.body')}
            />
            <div className='flex flex-col gap-4'>
              <input
                type='text'
                className='h-fit rounded border bg-gray-50 px-2'
                onChange={(e) => {
                  const newLines = lines.map((line, i) => (i === 0 ? e.target.value : line));
                  setLines(() => newLines);
                }}
                defaultValue={lines[0]}
              />
              <input
                type='text'
                className='h-fit rounded border bg-gray-50 px-2'
                onChange={(e) => {
                  const newLines = lines.map((line, i) => (i === 1 ? e.target.value : line));
                  setLines(() => newLines);
                }}
                defaultValue={lines[1]}
              />
              <input
                type='text'
                className='h-fit rounded border bg-gray-50 px-2'
                onChange={(e) => {
                  const newLines = lines.map((line, i) => (i === 2 ? e.target.value : line));
                  setLines(() => newLines);
                }}
                defaultValue={lines[2]}
              />
            </div>
          </div>
          <div className='flex justify-around gap-2'>
            <TwitterShareButton
              title={`Arrange\ntarget: ${target}\n\n${lines.join('\n')}\n\n`}
              url={`http://darts.homes/arrangerecord?a=${lines.join(',')}&t=${target}`}
            >
              <TwitterIcon size={32} round />
            </TwitterShareButton>
            <div hidden={isMobile} className='flex items-center'>
              <IconButton
                onClick={async () => {
                  const blob = await toBlob(imageTargetRef.current as HTMLElement, {
                    backgroundColor: 'transparent',
                    quality: 1,
                    style: { transform: 'scale(0.9)', transformOrigin: 'top left' },
                  });
                  if (!blob) return;
                  fileDownload(blob, getFileName());
                }}
              >
                <RiDownload2Fill />
              </IconButton>
            </div>
            <CopyToClipboardButton text={getURL()} label={'Share Arrange'} />
          </div>
        </div>
      </div>
    </MainTemplate>
  );
};

const updateLines = (
  containerRef: RefObject<HTMLDivElement>,
  canvasRef: RefObject<HTMLCanvasElement>,
  lines: string[],
) => {
  const rect = containerRef.current?.getBoundingClientRect();
  if (!rect) return;
  if (!canvasRef.current) return;
  const canvas = canvasRef.current;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const colors = ['#EE2222', '#2222FF', '#66DD66'];
  for (const [index, line] of lines
    .map((line) => line.split('-'))
    .reverse()
    .entries()) {
    for (const [i, n] of line.entries()) {
      if (i >= line.length - 1) break;
      const fn = n;
      const tn = line[i + 1];
      if (!/^(S?D?T?[1-9]|S?D?T?1[0-9]|S?D?T?20|SB|DB)$/.test(fn)) break;
      if (!/^(S?D?T?[1-9]|S?D?T?1[0-9]|S?D?T?20|SB|DB)$/.test(tn)) break;
      const from = getSegmentCenter(rect, fn);
      const to = getSegmentCenter(rect, tn);
      const f = {
        x: from.x - canvas.offsetLeft,
        y: from.y - canvas.offsetTop,
      };
      const t = {
        x: to.x - canvas.offsetLeft,
        y: to.y - canvas.offsetTop,
      };
      drawArrow(ctx, f, t, colors[index], i < line.length - 2, i === line.length - 2);
    }
  }
};

export default Main;
