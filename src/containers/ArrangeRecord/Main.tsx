import React, { FC, RefObject, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { TwitterIcon, TwitterShareButton } from 'react-share';
import DartBoard from '@/components/DartBoard';
import { drawArrow, getSegmentCenter } from '@/lib/Helper/CanvasDraw';
import MainTemplate from '@/templates/MainTemplate';

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
        x: from.x - canvas.offsetLeft - 16,
        y: from.y - canvas.offsetTop - 76,
      };
      const t = {
        x: to.x - canvas.offsetLeft - 16,
        y: to.y - canvas.offsetTop - 76,
      };
      drawArrow(ctx, f, t, colors[index], i < line.length - 2, i === line.length - 2);
    }
  }
};

const Main: FC = () => {
  const router = useRouter();
  const { a, t } = router.query;
  const arranges = (a ? (Array.isArray(a) ? a : a.split(',')) : []) as string[];
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [target, setTarget] = useState(t ?? 0);
  const [lines, setLines] = useState<string[]>(arranges ?? ['', '', '']);

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
      <div className='m-4 flex gap-4'>
        <div className={`relative aspect-square w-[60vh]`}>
          <div ref={containerRef} className='absolute top-0 left-0 h-fit w-full'>
            <div className='h-full w-full'>
              <DartBoard onCount={() => {}} hard />
            </div>
          </div>
          <canvas ref={canvasRef} className='absolute top-0 left-0'></canvas>
        </div>
        <div className='flex flex-col gap-4'>
          <label className='text-sm'>Target</label>
          <input
            type='number'
            className='h-fit w-32 rounded border bg-gray-50 px-2'
            onChange={(e) => setTarget(e.target.valueAsNumber)}
            defaultValue={target}
          />
          <label className='text-sm'>Arranges</label>
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
          <TwitterShareButton
            title={`Arrange\ntarget: ${target}\n\n${lines.join('\n')}\n\n`}
            url={`http://darts.homes/arrangerecord?a=${lines.join(',')}&t=${target}`}
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>
        </div>
      </div>
    </MainTemplate>
  );
};

export default Main;
