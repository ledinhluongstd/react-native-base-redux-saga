import apisauce from '../../App/Services/Api';

const create = () => {
  const api = apisauce;

  const getRoot = () => api.get('');
  const getRate = () => api.get('rate_limit');
  const getUser = username => api.get('search/users', { q: username });

  return {
    getRoot,
    getRate,
    getUser,
  };
};

export default {
  create,
};
