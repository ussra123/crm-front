import React from 'react';
import TicketForm from './TicketForm';
import TicketList from './TicketList';

const ClientDashboard = () => (
  <div>
    <h2>Client Dashboard</h2>
    <TicketForm />
    <TicketList />
  </div>
);

export default ClientDashboard;
