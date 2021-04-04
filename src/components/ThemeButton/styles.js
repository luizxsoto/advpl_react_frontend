import styled from 'styled-components';
import MUIIconButton from '@material-ui/core/IconButton';

export { default as IconDark } from '@material-ui/icons/Brightness4';
export { default as IconLight } from '@material-ui/icons/Brightness7';

export const Container = styled(MUIIconButton)`
  position: absolute;
  top: 0.5em;
  right: 0.5em;
`;
