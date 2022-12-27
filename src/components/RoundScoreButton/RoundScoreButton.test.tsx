import { ChakraProvider } from '@chakra-ui/react';
import { render } from '@testing-library/react';
import { createMatchMedia } from '../../lib/TestUtils/MatchMediaMock';
import RoundScoreButton from './RoundScoreButton';

test('should rendering', () => {
  const onRoundChangeMock = jest.fn();
  const onRoundOverMock = jest.fn();
  window.matchMedia = createMatchMedia(1000);
  const { container } = render(
    <ChakraProvider>
      <RoundScoreButton isFinished={false} result={''} onRoundChange={onRoundChangeMock} onRoundOver={onRoundOverMock} disabled={false} />
    </ChakraProvider>,
  );
  expect(container).toMatchSnapshot();
});
