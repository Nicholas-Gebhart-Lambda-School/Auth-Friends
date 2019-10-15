import { axiosWithAuth } from '../utils/axiosWithAuth';

const getData = async () => {
  const result = await axiosWithAuth()
    .get('/api/friends')
    .then(res => res);

  return result;
};

export default getData;
