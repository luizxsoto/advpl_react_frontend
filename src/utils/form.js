export const setFormData = ({ formRef, formData = {} }) => {
  const fieldNames = Object.keys(formData);

  fieldNames.forEach(fieldName => {
    const inputRef = formRef.current.getFieldRef(fieldName);

    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,
      'value'
    ).set;
    nativeInputValueSetter.call(inputRef, formData[fieldName] || '');

    const ev2 = new Event('input', { bubbles: true });
    inputRef.dispatchEvent(ev2);
  });

  const lastFieldName = fieldNames[fieldNames.length - 1];

  formRef.current.getFieldRef(lastFieldName).blur();
};
