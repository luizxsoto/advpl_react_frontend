import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  TableRow,
  TableCell,
  Menu,
  MenuItem,
  IconButton,
  MenuOpenIcon,
} from './styles';

const TBody = ({ filteredData, columnInfos, actionFunctions }) => {
  const [selectedItem, setSelectedItem] = useState({ ref: null, data: null });

  const handleCloseMenu = () => {
    setSelectedItem({ ref: null, data: null });
  };

  const handleOpenMenu = (ref, data) => {
    setSelectedItem({ ref, data });
  };

  const handleMenuItemClick = actionFunction => {
    actionFunction.handle(selectedItem.data);
    handleCloseMenu();
  };

  const TableRows = useCallback(
    () =>
      filteredData.map(itemData => (
        <TableRow hover key={itemData.RECNO}>
          {columnInfos.map(columnInfo => (
            <TableCell key={columnInfo.key}>
              {itemData[columnInfo.key]}
            </TableCell>
          ))}
          {actionFunctions && (
            <TableCell padding="none" align="center">
              <IconButton
                color="primary"
                size="small"
                onClick={event => handleOpenMenu(event.currentTarget, itemData)}
              >
                <MenuOpenIcon />
              </IconButton>
            </TableCell>
          )}
        </TableRow>
      )),
    [filteredData, columnInfos, actionFunctions]
  );

  return (
    <Container>
      <TableRows />
      {actionFunctions && (
        <Menu
          anchorEl={selectedItem.ref}
          open={!!selectedItem.ref}
          onClose={handleCloseMenu}
        >
          {actionFunctions.map(actionFunction => (
            <MenuItem
              key={actionFunction.key}
              onClick={() => handleMenuItemClick(actionFunction)}
            >
              {actionFunction.label}
            </MenuItem>
          ))}
        </Menu>
      )}
    </Container>
  );
};

export default TBody;

TBody.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape()),
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

TBody.defaultProps = {
  data: [],
  actionFunctions: null,
};
