import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container } from '@mui/material';

const TicketForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/tickets', formData)
      .then(response => {
        // Handle successful ticket submission
      })
      .catch(error => {
        // Handle ticket submission error
      });
  };

  return (
    <Container>
      <h2>Create Ticket</h2>
      <form onSubmit={handleSubmit}>
        <TextField label="Title" name="title" onChange={handleChange} />
        <TextField label="Description" name="description" onChange={handleChange} />
        <Button type="submit">Submit Ticket</Button>
      </form>
    </Container>
  );
};

export default TicketForm;
