import apiService from './api';
import { toast } from 'react-toastify';

const sessionsStoreService = async ({ username = '', password = '' }) => {
  const apiRes = await apiService({
    method: 'post',
    url: '/api/oauth2/v1/token',
    params: { grant_type: 'password', username, password },
  });

  toast.success('Sessão realizado com sucesso!');

  return apiRes;
};

export default sessionsStoreService;
