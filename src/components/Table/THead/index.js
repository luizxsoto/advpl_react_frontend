import { useCallback } from 'react';
import PropTypes from 'prop-types';

import { Container, TableRow, TableCell } from './styles';

const THead = ({ columnInfos, actionFunctions }) => {
  const HeadCells = useCallback(
    () =>
      columnInfos.map(columnInfo => (
        <TableCell key={columnInfo.key}>{columnInfo.label}</TableCell>
      )),
    [columnInfos]
  );

  return (
    <Container>
      <TableRow>
        <HeadCells />
        {actionFunctions && <TableCell align="center">Ações</TableCell>}
      </TableRow>
    </Container>
  );
};

export default THead;

THead.propTypes = {
  columnInfos: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  actionFunctions: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      handle: PropTypes.func.isRequired,
    })
  ),
};

THead.defaultProps = {
  actionFunctions: null,
};
