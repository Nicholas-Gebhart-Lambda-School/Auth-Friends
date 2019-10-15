import React, { useState } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', password: '' });

  const changeHandler = event => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/api/login', this.state.credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        this.props.history.push('/protected');
      })
      .catch(err => console.log(err.response));
  };

  return (
    <form>
      <input
        type="text"
        value={form.name}
        name="name"
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
