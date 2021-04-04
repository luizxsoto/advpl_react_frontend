import { toast } from 'react-toastify';

import apiConfig from '../config/api';

const apiService = async ({
  method = '',
  url = '',
  params = {},
  data = {},
  headers = {},
}) => {
  const apiReturn = await apiConfig
    .request({
      method,
      url,
      params,
      data,
      headers,
    })
    .then(res => res.data)
    .catch(err => {
      if (err.response?.status === 401) {
        localStorage.removeItem('@APP/session:token');
        window.location.reload();
      }

      toast.warn(
        `Ocorreu um erro: ${
          err.response?.data?.message ||
          err.response?.data?.error ||
          err.message
        }`
      );

      throw err;
    });

  return apiReturn;
};

export default apiService;
