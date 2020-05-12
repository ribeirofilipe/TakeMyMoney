import React from 'react';

import { Container, Cards } from './styles';

import Card from '../../components/Card';
import Sidebar from '../../components/Sidebar';

function Dashboard() {
  return (
    <Container>
      <Sidebar />

      <Cards>
        <h1>Pessoas que vão ganhar dinheiro </h1>
        <Card name="Filipe" />
        <Card name="Wesley" />
        <Card name="Fernando" />
      </Cards>

    </Container>
  );
}

export default Dashboard;
