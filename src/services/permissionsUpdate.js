import apiService from './api';
import { toast } from 'react-toastify';

const permissionsUpdateService = async ({ data }) => {
  const apiRes = await apiService({
    method: 'put',
    url: `/TPontinAccessControl/${data.RECNO}`,
    data,
  });

  toast.success('Permissão atualizada com sucesso!');

  return apiRes?.result;
};

export default permissionsUpdateService;
