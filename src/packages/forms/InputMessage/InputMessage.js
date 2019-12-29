import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StyledInputMessage from './styled';

/**
 * delayChildren is created to allow a smooth css transition to happen
 */
const InputMessage = ({ children, ...props }) => {
  const [delayedChildren, setDelayedChildren] = useState();
  const animationDuration = 250;

  useEffect(() => {
    let timer;

    if (!children) {
      timer = setTimeout(setDelayedChildren, animationDuration);
    } else {
      setDelayedChildren(children);
    }
    return () => clearTimeout(timer);
  }, [children]);

  return (
    <StyledInputMessage animationDuration={animationDuration} {...props}>
      {delayedChildren}
    </StyledInputMessage>
  );
};

export const TYPES = {
  error: 'error',
  info: 'info',
};

InputMessage.propTypes = {
  variant: PropTypes.oneOf(Object.values(TYPES)),
  children: PropTypes.node,
};

InputMessage.defaultProps = {
  variant: TYPES.error,
  children: null,
};

export default InputMessage;
