import React, { useEffect, useState } from 'react';
import getData from '../../services/getData';

const FriendsDashboard = props => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    getData().then(res => setFriends(res.data));
  }, []);

  return (
    <div>
      <pre>{JSON.stringify(friends, null, 2)}</pre>
    </div>
  );
};

export default FriendsDashboard;
