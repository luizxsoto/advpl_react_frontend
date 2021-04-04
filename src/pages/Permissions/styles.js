import styled from 'styled-components';
import MUIContainer from '@material-ui/core/Container';
import MUIIconButton from '@material-ui/core/IconButton';

export { default as ExitToAppIcon } from '@material-ui/icons/ExitToApp';

export const Container = styled(MUIContainer).attrs({
  component: 'main',
  disableGutters: true,
})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 2em;
  height: 100vh;
`;

export const IconButton = styled(MUIIconButton).attrs({
  color: 'primary',
})``;
