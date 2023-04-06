import React, { FC, Fragment, useState } from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useDisclosure,
} from '@chakra-ui/react';
import { TbTargetOff } from 'react-icons/tb';
import DartBoard from '../DartBoard';
import Button from '@/atoms/Button';
import IconButton from '@/atoms/IconButton';

type CountButtonsProps = {
  onCount: (count: point) => void;
  buttons: number[];
  bull?: boolean;
  disabled?: boolean;
  other?: boolean;
  full?: boolean;
};

const CountButtons: FC<CountButtonsProps> = ({
  onCount,
  buttons,
  bull = false,
  disabled = false,
  other = false,
  full = false,
}) => {
  return (
    <div className='m-auto flex max-w-[320px] flex-col gap-1'>
      <Buttons onCount={onCount} buttons={buttons} bull={bull} disabled={disabled} other={other} />
      {other ? (
        <Other onCount={onCount} disabled={disabled} bull={bull} />
      ) : full ? (
        <Full onCount={onCount} disabled={disabled} bull={bull} />
      ) : null}
    </div>
  );
};

const Buttons: FC<CountButtonsProps> = ({ onCount, buttons, bull = true, disabled = false }) => {
  return (
    <>
      {!bull ? null : <Bull onCount={onCount} disabled={disabled} />}
      <div className='grid grid-cols-3 gap-x-2 gap-y-1'>
        {buttons.length === 0
          ? null
          : ['Single', 'Double', 'Triple'].map((label) => (
              <div key={label} className='h-full text-center'>
                <span
                  className={`text-sm font-bold text-gray-700 disabled:opacity-50 ${
                    disabled ? 'opacity-40' : ''
                  }`}
                >
                  {label}
                </span>
              </div>
            ))}
        {buttons.map((i) => (
          <Fragment key={`${i}-count`}>
            <Button
              className='w-full'
              color={'gray'}
              onClick={() => onCount(`${i}` as point)}
              disabled={disabled}
              aria-label={`${i}`}
            >
              {i}
            </Button>
            <Button
              className='w-full'
              color='green'
              onClick={() => onCount(`D${i}` as point)}
              disabled={disabled}
              aria-label={`${i} double`}
            >
              {i}
            </Button>
            <Button
              className='w-full'
              color='pink'
              onClick={() => onCount(`T${i}` as point)}
              disabled={disabled}
              aria-label={`${i} triple`}
            >
              {i}
            </Button>
          </Fragment>
        ))}
      </div>
    </>
  );
};

const Bull: FC<{ onCount: (count: point) => void; disabled: boolean }> = ({
  onCount,
  disabled,
}) => {
  return (
    <div className='grid grid-cols-[repeat(3,_auto)] gap-3'>
      <Button
        className='w-full'
        color='red-fill'
        onClick={() => onCount('S-BULL')}
        disabled={disabled}
        aria-label={'outer bull'}
      >
        Outer Bull
      </Button>
      <Button
        className='w-full'
        color='indigo-fill'
        onClick={() => onCount('D-BULL')}
        disabled={disabled}
        aria-label={'inner bull'}
      >
        Inner Bull
      </Button>
      <OutBoard onCount={onCount} disabled={disabled} width={'100%'} />
    </div>
  );
};

const Other: FC<{ disabled?: boolean; bull?: boolean; onCount: (n: point) => void }> = ({
  disabled,
  bull,
  onCount,
}) => {
  return (
    <div className='flex gap-2'>
      <Button className='w-full' color='gray' onClick={() => onCount('0')} disabled={disabled}>
        Other
      </Button>
      {bull ? null : <OutBoard onCount={onCount} disabled={disabled} />}
    </div>
  );
};

const Full: FC<{ disabled?: boolean; bull?: boolean; onCount: (n: point) => void }> = ({
  disabled,
  bull,
  onCount,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [index, setIndex] = useState(0);
  return (
    <>
      <div className='flex gap-2'>
        <Button className='w-full' color='gray' onClick={onOpen} disabled={disabled}>
          Full
        </Button>
        {bull ? null : <OutBoard onCount={onCount} disabled={disabled} />}
      </div>
      <Drawer isOpen={isOpen} onClose={onClose} size={'lg'} placement={'right'}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Full Inputs</DrawerHeader>
          <DrawerBody>
            <Tabs variant={'enclosed'} isFitted index={index} onChange={(i) => setIndex(i)}>
              <TabList>
                <Tab>Full Buttons</Tab>
                <Tab>Dart Board</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Buttons
                    onCount={(n) => {
                      onCount(n);
                      onClose();
                    }}
                    buttons={[
                      20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
                    ]}
                    bull
                  />
                </TabPanel>
                <TabPanel>
                  <div className='h-full w-full'>
                    <DartBoard
                      onCount={(n) => {
                        onCount(n);
                        onClose();
                      }}
                    />
                  </div>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

const OutBoard: FC<{ disabled?: boolean; onCount: (n: point) => void; width?: string }> = ({
  disabled,
  onCount,
  width = 'inherit',
}) => (
  <IconButton
    className={`flex w-fit justify-center rounded-md border border-gray-300 p-3 disabled:opacity-50 ${
      width === '100%' ? 'w-full' : ''
    }`}
    color='ghost'
    onClick={() => onCount('OUT')}
    disabled={disabled}
    aria-label={'out board'}
  >
    <TbTargetOff />
  </IconButton>
);

export default CountButtons;
