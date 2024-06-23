// src/components/SignupForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Select, MenuItem } from '@mui/material';

const SignupForm = () => {
  const [userType, setUserType] = useState('client');
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    name: '',
    email: '',
    // other fields based on userType
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting form with data:', formData);
    axios.post(`http://localhost:8080/api/signup/${userType}`, formData)
      .then(response => {
        console.log('Signup successful:', response.data);
      })
      .catch(error => {
        console.error('Signup error:', error);
      });
  };

  return (
    <Container>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <Select value={userType} onChange={(e) => setUserType(e.target.value)}>
          <MenuItem value="client">Client</MenuItem>
          <MenuItem value="collaborator">Collaborator</MenuItem>
        </Select>
        <TextField label="Username" name="username" onChange={handleChange} />
        <TextField label="Password" name="password" type="password" onChange={handleChange} />
        <TextField label="Name" name="name" onChange={handleChange} />
        <TextField label="Email" name="email" onChange={handleChange} />
        {/* Additional fields based on userType */}
        <Button type="submit">Signup</Button>
      </form>
    </Container>
  );
};

export default SignupForm;
