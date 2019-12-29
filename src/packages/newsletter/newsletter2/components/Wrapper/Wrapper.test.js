import React from 'react';
import { render } from 'test-utils';
import Wrapper from '.';

describe('<Wrapper/>', () => {
  it('should be defined', () => {
    const { container } = render(<Wrapper />);
    expect(container.querySelector('div')).toBeDefined();
  });

  it('should render an svg icon', () => {
    const { container } = render(<Wrapper />);
    expect(container.querySelector('svg')).toBeDefined();
  });

  it('should render with a title and description', () => {
    const { getByText } = render(<Wrapper description="Schrijf je dan in." />);
    expect(
      getByText('Altijd op de hoogte blijven van het laatste nieuws?')
    ).toBeInTheDocument();

    expect(getByText('Schrijf je dan in.')).toBeInTheDocument();
  });
});
