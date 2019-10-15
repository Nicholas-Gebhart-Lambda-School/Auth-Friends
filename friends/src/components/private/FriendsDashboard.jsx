import React, { useEffect, useState } from 'react';
import getData from '../../services/getData';

import AddFriend from './AddFriend';

const FriendsDashboard = props => {
  const [loading, setLoading] = useState(true);
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    getData().then(res => setFriends(res.data));
  }, [friends]);

  return (
    <>
      {!friends.length ? (
        <h1>Loading</h1>
      ) : (
        <div>
          <AddFriend />

          <pre>{JSON.stringify(friends, null, 2)}</pre>
        </div>
      )}
    </>
  );
};

export default FriendsDashboard;
