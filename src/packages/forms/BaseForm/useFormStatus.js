import { useContext } from 'react';

import FormContext from './context';

export default () => {
  const { status } = useContext(FormContext);

  return { status };
};
