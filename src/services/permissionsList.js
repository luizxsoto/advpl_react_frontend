import apiService from './api';

const permissionsListService = async () => {
  const apiRes = await apiService({
    method: 'get',
    url: '/TPontinAccessControl',
  });

  return apiRes?.result;
};

export default permissionsListService;
