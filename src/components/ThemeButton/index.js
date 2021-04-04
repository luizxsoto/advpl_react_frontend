import PropTypes from 'prop-types';

import { Container, IconDark, IconLight } from './styles';

const ThemeButton = ({ theme, setTheme }) => {
  const handleChangeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Container onClick={handleChangeTheme}>
      {theme === 'light' ? <IconLight /> : <IconDark />}
    </Container>
  );
};

export default ThemeButton;

ThemeButton.propTypes = {
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
};

ThemeButton.defaultProps = {};
