import apiService from './api';
import { toast } from 'react-toastify';

const permissionsDestroyService = async ({ data }) => {
  const apiRes = await apiService({
    method: 'delete',
    url: `/TPontinAccessControl/${data.RECNO}`,
    data,
  });

  toast.success('Permissão removida com sucesso!');

  return apiRes?.result;
};

export default permissionsDestroyService;
