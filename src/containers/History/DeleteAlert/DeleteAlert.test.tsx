import DeleteAlert from './DeleteAlert';
import { render } from '@/lib/TestUtils/RenderMock';

test('should rendering', () => {
  const onCloseMock = jest.fn();
  const onDeleteMock = jest.fn();
  const { container } = render(
    <DeleteAlert message='message' isOpen={false} onClose={onCloseMock} onDelete={onDeleteMock} />,
  );
  expect(container).toMatchSnapshot();
});
