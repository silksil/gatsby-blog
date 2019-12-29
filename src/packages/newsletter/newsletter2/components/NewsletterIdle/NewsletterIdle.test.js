import React from 'react';
import { render } from 'test-utils';
import NewsletterIdle from '.';

describe('<NewsletterIdle/>', () => {
  it('should render an form', () => {
    const { container } = render(<NewsletterIdle />);
    expect(container.querySelector('form')).toBeInTheDocument();
  });

  it('should render an input field', () => {
    const { container } = render(<NewsletterIdle />);
    expect(container.querySelector('input')).toBeInTheDocument();
  });

  it('should render a button', () => {
    const { container } = render(<NewsletterIdle />);
    expect(container.querySelector('button')).toBeInTheDocument();
  });
});
