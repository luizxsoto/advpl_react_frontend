import * as Yup from 'yup';

const schema = Yup.object().shape({
  username: Yup.string().required('Este campo é obrigatório'),
  password: Yup.string().required('Este campo é obrigatório'),
});

export default schema;
