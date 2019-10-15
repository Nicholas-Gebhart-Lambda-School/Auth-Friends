import { axiosWithAuth } from '../utils/axiosWithAuth';

const addFriend = async friend => {
  const result = await axiosWithAuth()
    .post('/api/friends', friend)
    .then(res => console.log('added friend', res));

  return result;
};

export default addFriend;
