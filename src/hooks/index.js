import PropTypes from 'prop-types';

import { SessionsProvider } from './sessions';

const AppHooks = ({ children }) => (
  <SessionsProvider>{children}</SessionsProvider>
);

export default AppHooks;

AppHooks.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
