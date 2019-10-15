import React, { useState } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

const LoginForm = props => {
  const [form, setForm] = useState({ username: '', password: '' });

  const changeHandler = event => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleLogin = e => {
    console.log(form);
    e.preventDefault();
    axiosWithAuth()
      .post('/api/login', form)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        props.history.push('/private');
      })
      .catch(err => console.log(err.response));
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        value={form.username}
        name="username"
        onChange={changeHandler}
      />
      <input
        type="password"
        value={form.password}
        name="password"
        onChange={changeHandler}
      />
      <button>Login</button>
    </form>
  );
};

export default LoginForm;
