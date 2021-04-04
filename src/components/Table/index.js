import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import THead from './THead';
import TBody from './TBody';

import { Container, TableContainer, TableWrapper } from './styles';

const Table = ({
  data,
  filterBy,
  addFunction,
  title,
  columnInfos,
  actionFunctions,
}) => {
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => setFilteredData(data), [data]);

  return (
    <Container>
      <Header
        data={data}
        filterBy={filterBy}
        addFunction={addFunction}
        title={title}
        columnInfos={columnInfos}
        setFilteredData={setFilteredData}
      />
      <TableContainer>
        <TableWrapper>
          <THead columnInfos={columnInfos} actionFunctions={actionFunctions} />
          <TBody
            filteredData={filteredData}
            columnInfos={columnInfos}
            actionFunctions={actionFunctions}
          />
        </TableWrapper>
      </TableContainer>
    </Container>
  );
};

export default Table;

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape()),
  filterBy: PropTypes.string.isRequired,
  addFunction: PropTypes.func,
  title: PropTypes.string.isRequired,
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

Table.defaultProps = {
  data: [],
  addFunction: null,
  actionFunctions: null,
};
