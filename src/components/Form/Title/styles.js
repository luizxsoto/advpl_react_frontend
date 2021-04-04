import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

export const Container = styled(Typography).attrs({
  component: 'h1',
  variant: 'h5',
})`
  margin-bottom: 1em;
`;
