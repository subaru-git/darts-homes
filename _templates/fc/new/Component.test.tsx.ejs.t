---
to: src/components/<%= name %>/<%= name %>.test.tsx
---
import { render } from '@testing-library/react';
import <%= name %> from './<%= name %>';

test('should rendering', () => {
  const { container } = render(<<%= name %> />);
  expect(container).toMatchSnapshot();
});
