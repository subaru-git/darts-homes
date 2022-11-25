import { render } from '@testing-library/react';
import CameraView from './CameraView';

jest.mock('react-camera-pro');
const mockMediaRecorder = {
  start: jest.fn(),
  ondataavailable: jest.fn(),
  onerror: jest.fn(),
  state: '',
  stop: jest.fn(),
};

test('should rendering', () => {
  window.MediaRecorder = (jest.fn() as any).mockImplementation(() => mockMediaRecorder);
  const { container } = render(<CameraView />);
  expect(container).toMatchSnapshot();
});
export {};
