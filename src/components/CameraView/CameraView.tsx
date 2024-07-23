'use client';
import React, { FC, useEffect, useRef, useState } from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  useDisclosure,
} from '@chakra-ui/react';
import { Camera, CameraType } from 'react-camera-pro';
import { AiOutlineCamera } from 'react-icons/ai';
import { IoCameraReverseOutline } from 'react-icons/io5';
import { useReactMediaRecorder } from 'react-media-recorder';
import RecordingMark from '../RecordingMark';
import Button from '@/atoms/Button';
import IconButton from '@/atoms/IconButton';
import Select from '@/atoms/Select';

const CameraView: FC = () => {
  const camera = useRef<CameraType>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [numberOfCameras, setNumberOfCameras] = useState(0);
  const [preview, setPreview] = useState(false);
  const [recording, setRecording] = useState(false);
  const [devices, setDevices] = useState<MediaDeviceInfo[]>([]);
  const [activeDeviceId, setActiveDeviceId] = useState<string | undefined>(undefined);
  const { startRecording, stopRecording, mediaBlobUrl } = useReactMediaRecorder({
    video: true,
    audio: false,
  });
  useEffect(() => {
    (async () => {
      if (navigator && navigator.mediaDevices) {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const videoDevices = devices.filter((i) => i.kind == 'videoinput');
        setDevices(videoDevices);
      }
    })();
  });
  return (
    <>
      <IconButton onClick={async () => onOpen()} color='ghost' aria-label={'open form check'}>
        <AiOutlineCamera size={32} />
      </IconButton>
      <Drawer
        isOpen={isOpen}
        onClose={() => onClose()}
        placement={'right'}
        size={'lg'}
        closeOnOverlayClick={false}
      >
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Form Check [beta]</DrawerHeader>
          <DrawerBody>
            <div className='flex justify-between gap-4'>
              <div className='flex items-center gap-4'>
                <div className='h-6 w-6 text-xl'>
                  <RecordingMark recording={recording} />
                </div>
                <Button
                  onClick={() => {
                    startRecording();
                    setPreview(false);
                    setRecording(true);
                  }}
                  hidden={preview || recording}
                  color='green'
                >
                  Start Recording
                </Button>
                <Button
                  onClick={() => {
                    stopRecording();
                    setPreview(true);
                    setRecording(false);
                  }}
                  hidden={!recording}
                  color='cyan'
                >
                  Stop Recording
                </Button>
                <Button
                  onClick={() => {
                    setPreview(false);
                  }}
                  hidden={!preview}
                  color='orange'
                >
                  Stop Preview
                </Button>
              </div>
              <div className='flex gap-4'>
                <Select
                  options={devices.map((d) => d.label)}
                  onSelect={(option) =>
                    setActiveDeviceId(devices.find((d) => d.label === option)?.deviceId)
                  }
                />
                <IconButton
                  onClick={() => camera.current?.switchCamera()}
                  hidden={numberOfCameras < 2}
                  color='ghost'
                  aria-label={'switch camera'}
                >
                  <IoCameraReverseOutline size={32} />
                </IconButton>
              </div>
            </div>
            <div className='mt-2'>
              <div className='relative h-[80vh]' hidden={preview}>
                <Camera
                  ref={camera}
                  facingMode={'environment'}
                  videoSourceDeviceId={activeDeviceId}
                  errorMessages={errorMessages}
                  numberOfCamerasCallback={setNumberOfCameras}
                />
              </div>
              <div hidden={!preview}>
                <video
                  className='h-[80vh] object-cover'
                  src={mediaBlobUrl!}
                  controls
                  autoPlay
                  loop
                />
              </div>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

const errorMessages = {
  noCameraAccessible:
    'No camera device accessible. Please connect your camera or try a different browser.',
  permissionDenied: 'Permission denied. Please refresh and give camera permission.',
  switchCamera:
    'It is not possible to switch camera to different one because there is only one video device accessible.',
  canvas: 'Canvas is not supported.',
};

export default CameraView;
