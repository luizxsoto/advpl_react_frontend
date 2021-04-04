import styled, { createGlobalStyle } from 'styled-components';
import { ToastContainer as Toast } from 'react-toastify';

export { default as CssBaseline } from '@material-ui/core/CssBaseline';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, textarea, button {
    font-family: Roboto, Arial, Helvetica, sans-serif;
  }
`;

export const ToastContainer = styled(Toast).attrs({
  hideProgressBar: true,
  closeOnClick: true,
})`
  border-radius: 1em;
`;
