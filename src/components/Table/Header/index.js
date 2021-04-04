import PropTypes from 'prop-types';

import {
  Container,
  IconButton,
  AddIcon,
  Typography,
  TextField,
} from './styles';

const Header = ({
  data,
  filterBy,
  addFunction,
  title,
  columnInfos,
  setFilteredData,
}) => {
  const handleFilterData = search => {
    const lowerText = search?.toLowerCase();
    const upperText = search?.toUpperCase();

    const newFilteredData = data.filter(
      itemData =>
        itemData[filterBy].includes(lowerText) ||
        itemData[filterBy].includes(upperText)
    );

    setFilteredData(newFilteredData);
  };

  return (
    <Container>
      {addFunction && (
        <IconButton onClick={addFunction}>
          <AddIcon />
        </IconButton>
      )}
      <Typography>{title}</Typography>
      <TextField onChange={event => handleFilterData(event.target.value)} />
    </Container>
  );
};

export default Header;

Header.propTypes = {
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
  setFilteredData: PropTypes.func.isRequired,
};

Header.defaultProps = {
  data: [],
  addFunction: null,
};
