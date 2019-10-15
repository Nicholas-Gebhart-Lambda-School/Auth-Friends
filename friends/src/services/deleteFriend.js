import { axiosWithAuth } from '../utils/axiosWithAuth';

const deleteFriend = async id => {
  const result = await axiosWithAuth()
    .delete(`/api/friends/${id}`)
    .then(res => console.log('deleted friend', res));

  return result;
};

export default deleteFriend;
