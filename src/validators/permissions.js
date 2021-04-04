import * as Yup from 'yup';

const schema = Yup.object().shape({
  RECNO: Yup.string().nullable(),
  Z20_FILIAL: Yup.string().nullable(),
  Z20_IDUSR: Yup.string().required('Este campo é obrigatório'),
  Z20_USRNOM: Yup.string().required('Este campo é obrigatório'),
  Z20_SETOR: Yup.string().required('Este campo é obrigatório'),
  Z20_CODROT: Yup.string().required('Este campo é obrigatório'),
  Z20_ROTINA: Yup.string().required('Este campo é obrigatório'),
  Z20_ROTDES: Yup.string().required('Este campo é obrigatório'),
  Z20_USRINC: Yup.string().required('Este campo é obrigatório'),
  Z20_USRALT: Yup.string().required('Este campo é obrigatório'),
  Z20_NUM1: Yup.string().oneOf(['0', '1'], 'Deve ser 0 ou 1'),
  Z20_NUM2: Yup.string().oneOf(['0', '1'], 'Deve ser 0 ou 1'),
  Z20_NUM3: Yup.string().oneOf(['0', '1'], 'Deve ser 0 ou 1'),
  Z20_NUM4: Yup.string().oneOf(['0', '1'], 'Deve ser 0 ou 1'),
  Z20_NUM5: Yup.string().oneOf(['0', '1'], 'Deve ser 0 ou 1'),
  Z20_NUM6: Yup.string().oneOf(['0', '1'], 'Deve ser 0 ou 1'),
  Z20_NUM7: Yup.string().oneOf(['0', '1'], 'Deve ser 0 ou 1'),
  Z20_NUM8: Yup.string().oneOf(['0', '1'], 'Deve ser 0 ou 1'),
  Z20_NUM9: Yup.string().oneOf(['0', '1'], 'Deve ser 0 ou 1'),
  Z20_NUM10: Yup.string().oneOf(['0', '1'], 'Deve ser 0 ou 1'),
  Z20_NUM11: Yup.string().oneOf(['0', '1'], 'Deve ser 0 ou 1'),
  Z20_NUM12: Yup.string().oneOf(['0', '1'], 'Deve ser 0 ou 1'),
  Z20_NUM13: Yup.string().oneOf(['0', '1'], 'Deve ser 0 ou 1'),
  Z20_NUM14: Yup.string().oneOf(['0', '1'], 'Deve ser 0 ou 1'),
  Z20_NUM15: Yup.string().oneOf(['0', '1'], 'Deve ser 0 ou 1'),
});

export default schema;
