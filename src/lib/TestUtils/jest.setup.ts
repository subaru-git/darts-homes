import mocksdk from 'firebase-mock';
import failOnConsole from 'jest-fail-on-console';
import { createMatchMedia } from '@/lib/TestUtils/MatchMediaMock';
import { MediaRecorderMock } from '@/lib/TestUtils/MediaRecorderMock';
import '@testing-library/jest-dom';

jest.mock('next/router', () => ({ useRouter: jest.fn().mockReturnValue({ locale: 'en' }) }));
jest.mock('react-camera-pro');
jest.mock('@/firebase/client', () => ({
  analytics: mocksdk.analytics,
  db: mocksdk.firestore,
  storage: mocksdk.storage,
  auth: mocksdk.auth,
  functions: mocksdk.functions,
}));
jest.mock('@firebase/auth');
beforeAll(() => {
  window.matchMedia = createMatchMedia(1100);
  window.MediaRecorder = (jest.fn() as any).mockImplementation(() => MediaRecorderMock);
  global.ResizeObserver = require('resize-observer-polyfill');
});

failOnConsole();
