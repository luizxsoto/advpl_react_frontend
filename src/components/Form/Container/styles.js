import styled from 'styled-components';
import MUIContainer from '@material-ui/core/Container';

export const Container = styled(MUIContainer).attrs({
  component: 'main',
  maxWidth: 'xl',
})`
  display: flex;
  justify-content: center;

  padding: 2em;
  height: 100vh;
`;
