import { useState } from 'react';
import {
  ThemeProvider,
  unstable_createMuiStrictModeTheme as createMuiTheme,
} from '@material-ui/core/styles';

import 'react-toastify/dist/ReactToastify.min.css';

import AppHooks from './hooks';

import Routes from './routes';

import { CssBaseline, GlobalStyle, ToastContainer } from './styles/global';
import ThemeButton from './components/ThemeButton';

const App = () => {
  const [theme, setTheme] = useState('light');
  const materialTheme = createMuiTheme({ palette: { type: theme } });

  return (
    <AppHooks>
      <ThemeProvider theme={materialTheme}>
        <CssBaseline />
        <GlobalStyle />
        <ToastContainer />
        <ThemeButton theme={theme} setTheme={setTheme} />
        <Routes />
      </ThemeProvider>
    </AppHooks>
  );
};

export default App;
