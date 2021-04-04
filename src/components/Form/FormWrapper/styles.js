import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';

export const Container = styled(Paper).attrs({
  elevation: 3,
})`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 2em;
  max-height: 100%;
  overflow: auto;
`;
