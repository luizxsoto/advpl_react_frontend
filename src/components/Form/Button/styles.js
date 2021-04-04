import styled, { css } from 'styled-components';
import { withTheme } from '@material-ui/core/styles';
import MUIButton from '@material-ui/core/Button';
import MUICircularProgress from '@material-ui/core/CircularProgress';

export const Container = withTheme(styled(MUIButton).attrs(props => ({
  type: props.$cancel ? 'button' : 'submit',
  variant: props.$cancel ? 'outlined' : 'contained',
  color: props.$cancel ? 'default' : 'primary',
}))`
  margin-top: 1em;

  ${props =>
    props.$cancel &&
    css`
      margin-right: 1em;
      border-color: ${props => props.theme.palette.error.main};
      color: ${props => props.theme.palette.error.main};
    `}
`);

export const Loading = styled(MUICircularProgress).attrs({
  color: 'secondary',
  size: 30,
})`
  position: absolute;
`;
