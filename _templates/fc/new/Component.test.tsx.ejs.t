---
to: src/components/<%= name %>/<%= name %>.test.tsx
---
import <%= name %> from './<%= name %>';
import { render } from '@/lib/TestUtils/RenderMock';

test('should rendering', () => {
  const { container } = render(<<%= name %> />);
  expect(container).toMatchSnapshot();
});
