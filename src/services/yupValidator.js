import { toast } from 'react-toastify';
import * as Yup from 'yup';

const yupValidator = async ({
  formData = {},
  dataParser = null,
  validatorSchema = {},
}) => {
  try {
    const parsedData = dataParser ? dataParser(formData) : formData;

    await validatorSchema.validate(parsedData, { abortEarly: false });

    return parsedData;
  } catch (error) {
    const errorMessages = {};

    if (error instanceof Yup.ValidationError) {
      toast.warn('Ocorreu um erro de validação');

      error.inner.forEach(err => {
        if (!errorMessages[err.path]) errorMessages[err.path] = err.message;
      });
    }

    return { errorMessages };
  }
};

export default yupValidator;
