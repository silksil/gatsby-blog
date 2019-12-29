import React from 'react';
import { render } from 'test-utils';
import { Menu } from '..';

describe('<Menu />', () => {
  it('should render with children', () => {
    const { getByText } = render(<Menu>children</Menu>);
    expect(getByText('children')).toBeInTheDocument();
  });
});
