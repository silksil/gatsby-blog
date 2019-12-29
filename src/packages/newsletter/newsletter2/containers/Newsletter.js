import React, { useState } from 'react';
import PropTypes from 'prop-types';
import NewsletterIdle from '../components/NewsletterIdle';
import NewsletterSuccess from '../components/NewsletterSuccess';
import Wrapper from '../components/Wrapper';

const Newsletter = ({ onSubmit, ...props }) => {
  const [status, setStatus] = useState('idle');
  const idleScreen = (
    <NewsletterIdle setStatus={setStatus} onSubmit={onSubmit} />
  );
  const screen = status === 'success' ? <NewsletterSuccess /> : idleScreen;

  return <Wrapper {...props}>{screen}</Wrapper>;
};

Newsletter.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Newsletter;
