import React from 'react';
import { render } from 'test-utils';
import { Grid, GridSpacer, GridItem } from '.';

describe('<Grid />', () => {
  it('should be defined', () => {
    const { container } = render(<Grid />);
    expect(container.querySelector('div')).toBeInTheDocument();
  });

  it('should accept style-props', () => {
    const { container } = render(<Grid gridCols="60px 60px" />);
    expect(container.querySelector('div')).toHaveStyleRule(
      'grid-template-columns',
      '60px 60px'
    );
  });

  it('should adapt to different screen sizes', () => {
    const { container } = render(<Grid />);
    expect(container.querySelector('div')).toHaveStyleRule('margin', '0 40px', {
      media: '(min-width: 1024px)',
    });
  });
});

describe('<GridSpacer />', () => {
  it('should be defined', () => {
    const { container } = render(<GridSpacer />);
    expect(container.querySelector('div')).toBeInTheDocument();
  });
});

describe('<GridItem />', () => {
  it('should be defined', () => {
    const { container } = render(<GridItem />);
    expect(container.querySelector('div')).toBeInTheDocument();
  });
});
