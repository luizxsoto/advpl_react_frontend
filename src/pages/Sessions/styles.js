import styled from 'styled-components';
import { withTheme } from '@material-ui/core/styles';
import MUIAvatar from '@material-ui/core/Avatar';

export { default as IconButton } from '@material-ui/core/IconButton';
export { default as Visibility } from '@material-ui/icons/Visibility';
export { default as VisibilityOff } from '@material-ui/icons/VisibilityOff';
export { default as IconLockOutlined } from '@material-ui/icons/LockOutlined';

export const Avatar = withTheme(styled(MUIAvatar)`
  color: #fff;
  background-color: ${props => props.theme.palette.primary.main};
`);
