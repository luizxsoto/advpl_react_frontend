import PropTypes from 'prop-types';

import { Container, Loading } from './styles';

const Button = ({ loading, $cancel, children, ...rest }) => {
  return (
    <Container disabled={loading} $cancel={$cancel} {...rest}>
      {loading && <Loading />}
      {children}
    </Container>
  );
};

export default Button;

Button.propTypes = {
  loading: PropTypes.bool,
  $cancel: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

Button.defaultProps = {
  loading: false,
  $cancel: false,
};
