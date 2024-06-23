import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import ClientDashboard from './ClientDashboard';
import CollaboratorDashboard from './CollaboratorDashboard';

const Dashboard = () => {
  const { authState } = useContext(AuthContext);

  if (!authState) {
    return <div>Please login</div>;
  }

  return (
    <div>
      {authState.type === 'client' ? <ClientDashboard /> : <CollaboratorDashboard />}
    </div>
  );
};

export default Dashboard;
