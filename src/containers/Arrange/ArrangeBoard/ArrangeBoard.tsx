import React, { FC, useRef, useState } from 'react';
import { Box, Center } from '@chakra-ui/react';
import { TfiTarget } from 'react-icons/tfi';
import DartBoard from '@/components/DartBoard';
import { getLandingPosition } from '@/lib/Helper/Landing';

type ArrangeBoardProps = {
  onCount: (count: point) => void;
  range: number;
  simulation: boolean;
  disabled: boolean;
};

const ArrangeBoard: FC<ArrangeBoardProps> = ({ onCount, range, simulation, disabled }) => {
  const base = useRef<HTMLDivElement>(null);
  const timer = useRef<number | null>(null);
  const [aim, setAim] = useState({ x: 0, y: 0 });
  const [landing, setLanding] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState<'visible' | 'hidden'>('hidden');
  return (
    <>
      <Center>
        <Box w={'100vw'} style={{ aspectRatio: 1 }} maxW={540} maxH={540} position='relative'>
          <Box position={'absolute'} w='100%' h='100%'>
            <DartBoard
              onCount={(count) => {
                onCount(count);
              }}
            />
          </Box>
          <Box position={'relative'} w='100%' h='100%' pointerEvents={'none'}>
            <Box
              ref={base}
              position={'absolute'}
              pointerEvents={'auto'}
              width='100%'
              height='100%'
              onClick={(e) => {
                if (disabled) return;
                let landing = { x: e.clientX, y: e.clientY };
                setAim({ x: landing.x, y: landing.y });
                if (simulation) {
                  const { x, y, width, height } = base.current?.getBoundingClientRect() ?? {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0,
                  };
                  landing = getLandingPosition(
                    { x: e.clientX, y: e.clientY },
                    { x, y, width, height },
                    range,
                  );
                  setLanding(landing);
                }
                base.current?.style.setProperty('pointer-events', `none`);
                const elm = document.elementFromPoint(landing.x, landing.y) as HTMLElement;
                base.current?.style.setProperty('pointer-events', `auto`);
                elm?.click();
                setVisible('visible');
                if (timer.current) window.clearTimeout(timer.current);
                timer.current = window.setTimeout(() => {
                  setVisible('hidden');
                }, 1000);
              }}
            >
              <Box
                background='blackAlpha.300'
                width='100%'
                height='100%'
                visibility={disabled ? 'visible' : 'hidden'}
              />
              <TfiTarget
                visibility={visible}
                color={'white'}
                size={32}
                style={{
                  position: 'absolute',
                  left: `${aim.x - (base?.current?.getBoundingClientRect().x ?? 0) - 16}px`,
                  top: `${aim.y - (base?.current?.getBoundingClientRect().y ?? 0) - 16}px`,
                }}
              />
              <TfiTarget
                visibility={!simulation ? 'hidden' : visible}
                color={'green'}
                size={32}
                style={{
                  position: 'absolute',
                  left: `${landing.x - (base?.current?.getBoundingClientRect().x ?? 0) - 16}px`,
                  top: `${landing.y - (base?.current?.getBoundingClientRect().y ?? 0) - 16}px`,
                }}
              />
            </Box>
          </Box>
        </Box>
      </Center>
    </>
  );
};

export default ArrangeBoard;
