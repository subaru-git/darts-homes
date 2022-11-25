import React, { FC, useEffect, useRef, useState } from 'react';
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  Flex,
  IconButton,
  Select,
  useDisclosure,
} from '@chakra-ui/react';
import { Camera, CameraType } from 'react-camera-pro';
import { AiOutlineCamera } from 'react-icons/ai';
import { IoCameraReverseOutline } from 'react-icons/io5';
import { useReactMediaRecorder } from 'react-media-recorder';
import RecordingMark from '../RecordingMark';

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
      <IconButton
        onClick={async () => onOpen()}
        icon={<AiOutlineCamera size={32} />}
        variant={'ghost'}
        aria-label={'open form check'}
      />
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
            <Flex gap={4} justifyContent={'space-between'}>
              <Flex gap={4} alignItems={'center'}>
                <Box width={6} height={6} fontSize={'xl'}>
                  <RecordingMark recording={recording} />
                </Box>
                <Button
                  onClick={() => {
                    startRecording();
                    setPreview(false);
                    setRecording(true);
                  }}
                  hidden={preview || recording}
                  variant={'outline'}
                  colorScheme={'teal'}
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
                  variant={'outline'}
                  colorScheme={'cyan'}
                >
                  Stop Recording
                </Button>
                <Button
                  onClick={() => {
                    setPreview(false);
                  }}
                  hidden={!preview}
                  variant={'outline'}
                  colorScheme={'orange'}
                >
                  Stop Preview
                </Button>
              </Flex>
              <Flex gap={4}>
                <Box>
                  <Select
                    onChange={(event) => setActiveDeviceId(event.target.value)}
                    variant={'flushed'}
                    size={'sm'}
                  >
                    {devices.map((d) => (
                      <option key={d.deviceId} value={d.deviceId}>
                        {d.label}
                      </option>
                    ))}
                  </Select>
                </Box>
                <IconButton
                  icon={<IoCameraReverseOutline size={32} />}
                  onClick={() => camera.current?.switchCamera()}
                  hidden={numberOfCameras < 2}
                  variant={'ghost'}
                  aria-label={'switch camera'}
                />
              </Flex>
            </Flex>
            <Box mt={2}>
              <Box height={'80vh'} position={'relative'} hidden={preview}>
                <Camera
                  ref={camera}
                  facingMode={'environment'}
                  videoSourceDeviceId={activeDeviceId}
                  errorMessages={errorMessages}
                  numberOfCamerasCallback={setNumberOfCameras}
                />
              </Box>
              <Box hidden={!preview}>
                <video
                  src={mediaBlobUrl!}
                  controls
                  autoPlay
                  loop
                  style={{ height: '80vh', objectFit: 'cover' }}
                />
              </Box>
            </Box>
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
