import PropTypes from 'prop-types';

import { Container } from './styles';

const FormWrapper = ({ children }) => {
  return <Container>{children}</Container>;
};

export default FormWrapper;

FormWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

FormWrapper.defaultProps = {};
