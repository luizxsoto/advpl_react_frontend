import styled from 'styled-components';
import { withTheme } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MUIOutlinedInput from '@material-ui/core/OutlinedInput';

export { default as InputAdornment } from '@material-ui/core/InputAdornment';
export { default as FormHelperText } from '@material-ui/core/FormHelperText';

export const Container = styled(FormControl)`
  width: 100%;
`;

export const Label = withTheme(styled(InputLabel)`
  b {
    color: ${props => props.theme.palette.error.main};
  }
`);

export const OutlinedInput = styled(MUIOutlinedInput)`
  padding-right: 0;
`;
