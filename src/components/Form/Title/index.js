import PropTypes from 'prop-types';

import { Container } from './styles';

const Title = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Title;

Title.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

Title.defaultProps = {};
