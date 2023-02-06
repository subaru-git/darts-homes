import React, { FC, useRef, useState, useEffect, RefObject } from 'react';
import { Box, Center } from '@chakra-ui/react';
// eslint-disable-next-line import/named
import { css, SerializedStyles } from '@emotion/react';
import { TfiTarget } from 'react-icons/tfi';
import DartBoard from '@/components/DartBoard';
import { getLandingPosition } from '@/lib/Helper/Landing';

type ArrangeBoardProps = {
  onCount: (count: point) => void;
  range: number;
  simulation?: boolean;
  hard?: boolean;
  disabled?: boolean;
};

type Target = {
  x: number;
  y: number;
  visible: 'visible' | 'hidden';
};
const initialTarget: Target = { x: 0, y: 0, visible: 'hidden' };

const ArrangeBoard: FC<ArrangeBoardProps> = ({
  onCount,
  range,
  simulation = false,
  hard = false,
  disabled = false,
}) => {
  const base = useRef<HTMLDivElement>(null);
  const [aim, setAim] = useState<Target>(initialTarget);
  const [landing, setLanding] = useState<Target>(initialTarget);
  const [styles, setStyles] = useState<SerializedStyles[]>([]);
  const [animation, setAnimation] = useState(false);
  useEffect(() => {
    if (animation) {
      setAnimation(false);
      setStyles([landingAnimationStyle]);
    }
  }, [animation]);
  return (
    <>
      <Center>
        <Box w={'100vw'} style={{ aspectRatio: 1 }} maxW={540} maxH={540} position={'relative'}>
          <Box position={'absolute'} w={'100%'} h={'100%'}>
            <DartBoard onCount={onCount} hard={hard} />
          </Box>
          <Box position={'relative'} w={'100%'} h={'100%'} pointerEvents={'none'}>
            <Box
              ref={base}
              position={'absolute'}
              pointerEvents={'auto'}
              width={'100%'}
              height={'100%'}
              data-cy={'arrange-board-base'}
              onClick={(e) => {
                if (disabled) return;
                let pos = { x: e.clientX, y: e.clientY };
                setAim({ x: pos.x, y: pos.y, visible: 'visible' });
                if (simulation) {
                  const undefinedRect = { x: 0, y: 0, width: 0, height: 0 };
                  const baseRect = base.current?.getBoundingClientRect() ?? undefinedRect;
                  pos = getLandingPosition({ x: e.clientX, y: e.clientY }, baseRect, range);
                  setLanding({ x: pos.x, y: pos.y, visible: 'visible' });
                }
                base.current?.style.setProperty('pointer-events', `none`);
                const elm = document.elementFromPoint(pos.x, pos.y) as HTMLElement;
                base.current?.style.setProperty('pointer-events', `auto`);
                elm?.click();
                setStyles([]);
                setAnimation(true);
              }}
            >
              <Box
                background={'blackAlpha.300'}
                width={'100%'}
                height={'100%'}
                visibility={disabled ? 'visible' : 'hidden'}
              />
              <TfiTarget
                visibility={aim.visible}
                color={'white'}
                size={32}
                css={targetStyle(base, aim, 32)}
              />
              <TfiTarget
                visibility={!simulation ? 'hidden' : landing.visible}
                color={'green'}
                size={32}
                css={[targetStyle(base, landing, 32), styles]}
                onAnimationEnd={() => {
                  setAim(initialTarget);
                  setLanding(initialTarget);
                  setStyles([]);
                }}
              />
            </Box>
          </Box>
        </Box>
      </Center>
    </>
  );
};

const targetStyle = (base: RefObject<HTMLDivElement>, landing: Target, size: number) =>
  css({
    position: 'absolute',
    left: `${landing.x - (base?.current?.getBoundingClientRect().x ?? 0) - size / 2}px`,
    top: `${landing.y - (base?.current?.getBoundingClientRect().y ?? 0) - size / 2}px`,
  });

const landingAnimationStyle = css({
  animation: 'landing 1.4s ease-out',
  '@keyframes landing': {
    '0%': {
      transform: 'scale(3)',
    },
    '30%': {
      transform: 'scale(1)',
    },
  },
});

export default ArrangeBoard;
