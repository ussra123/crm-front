import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TicketList = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/tickets')
      .then(response => setTickets(response.data))
      .catch(error => {
        // Handle error
      });
  }, []);

  return (
    <div>
      <h2>Ticket List</h2>
      <ul>
        {tickets.map(ticket => (
          <li key={ticket.id}>
            {ticket.title} - {ticket.status}
            {/* Add button for collaborators to update status */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TicketList;
