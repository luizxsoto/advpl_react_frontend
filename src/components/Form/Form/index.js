import PropTypes from 'prop-types';

import yupValidatorService from '../../../services/yupValidator';

import { Container } from './styles';

const Form = ({ formRef, validatorSchema, dataParser, onSubmit, children }) => {
  const handleSubmit = async formData => {
    const { errorMessages, ...parsedData } = await yupValidatorService({
      formData,
      dataParser,
      validatorSchema,
    });

    if (errorMessages) formRef.current.setErrors(errorMessages);
    else onSubmit(parsedData);
  };

  return (
    <Container ref={formRef} onSubmit={handleSubmit}>
      {children}
    </Container>
  );
};

export default Form;

Form.propTypes = {
  formRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape()]).isRequired,
  validatorSchema: PropTypes.shape().isRequired,
  dataParser: PropTypes.func,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

Form.defaultProps = {
  dataParser: null,
};
