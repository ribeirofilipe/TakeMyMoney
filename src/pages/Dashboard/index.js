import React, { useEffect, useState } from 'react';

import { Container, Cards } from './styles';

import Card from '../../components/Card';
import Sidebar from '../../components/Sidebar';

import loading from '../../assets/loading.svg';

import api from '../../services/api';

function Dashboard() {
  const [employees, setEmployees] = useState([]);

  async function loadEmployees() {
    const response = await api.get('employees');
    setEmployees(response.data.data);
  }

  useEffect(() => {
    loadEmployees();
  }, []);

  return (
    <Container>
      <Sidebar />
      <Cards>
        <h1>Pessoas que vão ganhar dinheiro </h1>
        {employees.length > 0 ? employees.map((employee) => (
          <Card name={employee.employee_name} />
        )) : <img src={loading} alt="loading" />}
      </Cards>

    </Container>
  );
}

export default Dashboard;
