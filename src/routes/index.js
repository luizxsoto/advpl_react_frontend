import { BrowserRouter } from 'react-router-dom';

import { useSessions } from '../hooks/sessions';

import Onn from './Onn';
import Off from './Off';

const Routes = () => {
  const { signed } = useSessions();

  return <BrowserRouter>{signed ? <Onn /> : <Off />}</BrowserRouter>;
};

export default Routes;
