import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useField } from '@unform/core';

import {
  Container,
  Label,
  OutlinedInput,
  InputAdornment,
  FormHelperText,
} from './styles';

const TextInput = ({
  name,
  label,
  mask,
  helperText,
  required,
  endAdornment,
  ...rest
}) => {
  const { fieldName, registerField, error, clearError } = useField(name);

  const inputRef = useRef({ value: '' });

  const handleChange = event => {
    if (error) clearError();

    if (mask) inputRef.current.value = mask(event.target.value);
  };

  useEffect(() => {
    if (mask && inputRef.current)
      inputRef.current.value = mask(inputRef.current.value);
  }, [mask]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container error={!!error} size="small" variant="outlined">
      <Label variant="outlined">
        {label} {required && <b>*</b>}
      </Label>
      <OutlinedInput
        inputRef={inputRef}
        onChange={handleChange}
        label={`${label}${required ? ' *' : ''}`}
        error={!!error}
        endAdornment={
          endAdornment && <InputAdornment>{endAdornment}</InputAdornment>
        }
        {...rest}
      />
      <FormHelperText>{error || helperText || ' '}</FormHelperText>
    </Container>
  );
};

export default TextInput;

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  mask: PropTypes.func,
  helperText: PropTypes.string,
  required: PropTypes.bool,
  endAdornment: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

TextInput.defaultProps = {
  mask: null,
  helperText: '',
  required: false,
  endAdornment: null,
};
