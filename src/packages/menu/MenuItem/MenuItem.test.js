import React from 'react';
import { render } from 'test-utils';
import { MenuItem } from '..';

describe('<MenuItem />', () => {
  it('should render with children', () => {
    const { getByText } = render(<MenuItem>item</MenuItem>);
    expect(getByText('item')).toBeInTheDocument();
  });

  it('should contain a link', () => {
    const { container } = render(<MenuItem href="http://www.bnnvara.nl" />);
    expect(container.querySelector('a')).toBeInTheDocument();
  });

  it('should not be clickable if link is not set', () => {
    const { container } = render(<MenuItem href="" />);
    expect(container.querySelector('a[href]')).toBeNull();
    expect(container.querySelector('div > span')).toBeDefined();
  });
});
