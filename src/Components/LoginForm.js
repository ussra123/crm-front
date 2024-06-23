// src/components/LoginForm.js
import React, { useContext, useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container } from '@mui/material';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/login', formData)
      .then(response => {
        login(response.data);
        navigate('/dashboard');
      })
      .catch(error => {
        // Handle login error
      });
  };

  return (
    <Container>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <TextField label="Username" name="username" onChange={handleChange} />
        <TextField label="Password" name="password" type="password" onChange={handleChange} />
        <Button type="submit">Login</Button>
      </form>
    </Container>
  );
};

export default LoginForm;
