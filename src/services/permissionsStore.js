import apiService from './api';
import { toast } from 'react-toastify';

const permissionsStoreService = async ({ data }) => {
  const apiRes = await apiService({
    method: 'post',
    url: '/TPontinAccessControl',
    data,
  });

  toast.success('Permissão cadastrada com sucesso!');

  return apiRes?.result;
};

export default permissionsStoreService;
