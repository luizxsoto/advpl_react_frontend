import styled from 'styled-components';
import MUIIconButton from '@material-ui/core/IconButton';
import MUITypography from '@material-ui/core/Typography';
import MUITextField from '@material-ui/core/TextField';

export { default as Container } from '@material-ui/core/Toolbar';
export { default as AddIcon } from '@material-ui/icons/Add';

export const IconButton = styled(MUIIconButton).attrs({
  color: 'primary',
})``;

export const Typography = styled(MUITypography).attrs({
  variant: 'h6',
})``;

export const TextField = styled(MUITextField).attrs({
  label: 'Buscar',
  variant: 'outlined',
  type: 'search',
  size: 'small',
})`
  margin-left: auto;
`;
