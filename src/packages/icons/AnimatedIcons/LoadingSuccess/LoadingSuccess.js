import React from 'react';
import loadingSuccess from './loadingSuccess.json';
import LottieAnimation from '../LottieAnimation';

const LoadingSuccess = ({ ...props }) => (
  <LottieAnimation
    icon={loadingSuccess}
    overideHeight={40}
    overideWidth={80}
    ariaLabel="succes icoon"
    autoPlay
    {...props}
  />
);

export default LoadingSuccess;
