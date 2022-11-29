import { createMatchMedia } from '@/lib/TestUtils/MatchMediaMock';
import { MediaRecorderMock } from '@/lib/TestUtils/MediaRecorderMock';

jest.mock('next/router', () => ({ useRouter: jest.fn().mockReturnValue({ locale: 'en' }) }));
jest.mock('react-camera-pro');

beforeAll(() => {
  window.matchMedia = createMatchMedia(1100);
  window.MediaRecorder = (jest.fn() as any).mockImplementation(() => MediaRecorderMock);
  global.ResizeObserver = require('resize-observer-polyfill');
});
