import { ChakraProvider } from '@chakra-ui/react';
import { fireEvent, render, screen } from '@testing-library/react';
import { createMatchMedia } from '../../lib/TestUtils/MatchMediaMock';
import RoundScore from './RoundScore';

test('should rendering', () => {
  const clear = jest.fn();
  const roundChange = jest.fn();
  const roundOver = jest.fn();
  window.matchMedia = createMatchMedia(1000);
  const { container } = render(
    <ChakraProvider>
      <RoundScore scores={['20T', '19T', '18T']} isFinished={false} result={'Result'} onClear={clear} onRoundChange={roundChange} onRoundOver={roundOver} />
    </ChakraProvider>,
  );
  expect(screen.getAllByText('20T')).toHaveLength(1);
  expect(screen.getAllByText('19T')).toHaveLength(1);
  expect(screen.getAllByText('18T')).toHaveLength(1);
  fireEvent.click(screen.getByLabelText('clear scores'));
  expect(clear).toBeCalledTimes(1);
  fireEvent.click(screen.getByText('Change'));
  expect(roundChange).toBeCalledTimes(1);
  expect(container).toMatchSnapshot();
});
