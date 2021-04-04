import PropTypes from 'prop-types';

import { Container as Wrapper } from './styles';

const Container = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Container;

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

Container.defaultProps = {};
