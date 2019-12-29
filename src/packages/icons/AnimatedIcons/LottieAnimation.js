import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import PropTypes from 'prop-types';

const SIZES = {
  xs: 8,
  md: 16,
  lg: 32,
  xl: 40,
};

// This is needed to access lottie functionality that is not directly accessible through react-lottie
class LottieSub extends Lottie {
  componentDidMount() {
    super.componentDidMount();
    if (this.props.initialStateIsActive) {
      this.anim.goToAndStop(this.anim.totalFrames - 1, true);
    }
  }
}

const LottieAnimation = ({
  icon,
  autoPlay,
  loop,
  isActive,
  size,
  overideHeight,
  overideWidth,
}) => {
  const defaultOptions = {
    loop,
    autoplay: autoPlay,
    animationData: icon,
  };

  const [iconDirection, setIconDirection] = useState(-1);

  useEffect(() => {
    setIconDirection(isActive ? 1 : -1);
  }, [isActive]);

  const height = overideHeight || SIZES[size];
  const width = overideWidth || SIZES[size];

  return (
    <LottieSub
      options={defaultOptions}
      height={height}
      width={width}
      direction={iconDirection}
      initialStateIsActive={isActive}
    />
  );
};

LottieAnimation.propTypes = {
  icon: PropTypes.shape({}).isRequired,
  autoPlay: PropTypes.bool,
  loop: PropTypes.bool,
  isActive: PropTypes.bool,
  size: PropTypes.oneOf(Object.keys(SIZES)),
  overideWidth: PropTypes.number,
  overideHeight: PropTypes.number,
};

LottieAnimation.defaultProps = {
  autoPlay: false,
  loop: false,
  isActive: false,
  size: 'md',
  overideWidth: null,
  overideHeight: null,
};

export default LottieAnimation;
