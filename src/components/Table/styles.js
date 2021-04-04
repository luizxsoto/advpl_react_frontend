import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';

export { default as TableContainer } from '@material-ui/core/TableContainer';

export const Container = styled(Paper)`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const TableWrapper = styled(Table).attrs({
  stickyHeader: true,
  size: 'small',
})``;
