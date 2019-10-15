import React from 'react';
import addFriend from '../../services/addFriend';

const AddFriend = () => {
  const [friend, setFriend] = React.useState({ name: '', age: 0, email: '' });

  const handleChanges = e => {
    const { name, value } = e.target;
    setFriend({ ...friend, [name]: value });
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        addFriend(friend);
      }}
    >
      <input
        type="text"
        name="name"
        value={friend.name}
        onChange={handleChanges}
      />
      <input
        type="number"
        name="age"
        value={friend.age}
        onChange={handleChanges}
      />
      <input
        type="email"
        name="email"
        value={friend.email}
        onChange={handleChanges}
      />
      <button>Add new friend</button>
    </form>
  );
};

export default AddFriend;
