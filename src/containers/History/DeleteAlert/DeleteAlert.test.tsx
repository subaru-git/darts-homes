import { render } from '@testing-library/react';
import DeleteAlert from './DeleteAlert';

jest.mock('next/router', () => ({ useRouter: jest.fn().mockReturnValue({ locale: 'en' }) }));

test('should rendering', () => {
  const onCloseMock = jest.fn();
  const onDeleteMock = jest.fn();
  const { container } = render(
    <DeleteAlert message='message' isOpen={false} onClose={onCloseMock} onDelete={onDeleteMock} />,
  );
  expect(container).toMatchSnapshot();
});
