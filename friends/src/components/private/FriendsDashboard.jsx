import React, { useEffect, useState } from 'react';
import getData from '../../services/getData';
import deleteFriend from '../../services/deleteFriend';

import AddFriend from './AddFriend';
import FriendCard from './FriendCard';

const FriendsDashboard = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    getData().then(res => setFriends(res.data));
  }, [friends]);

  const deleteBud = id => {
    deleteFriend(id);
    // Update state immediately for snappier app
    setFriends(friends.filter(friend => friend.id !== id));
  };

  return (
    <>
      {!friends.length ? (
        <h1>Loading</h1>
      ) : (
        <div>
          <AddFriend />

          {friends.map(friend => {
            return (
              <FriendCard
                key={friend.id}
                id={friend.id}
                name={friend.name}
                email={friend.email}
                age={friend.age}
                deleteBud={deleteBud}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default FriendsDashboard;
