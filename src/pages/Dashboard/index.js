import React, { useEffect, useState } from 'react';

import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { Container, Cards } from './styles';

import Card from '../../components/Card';
import Sidebar from '../../components/Sidebar';

import loadingSvg from '../../assets/loading.svg';


import api from '../../services/api';

function Dashboard() {
  const [employees, setEmployees] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  async function loadEmployees() {
    const response = await api.get('employees');

    const skip = 3 * page;

    setTotal(response.data.data.length);
    setEmployees(response.data.data.slice(skip, 3 + skip));
  }

  function handleNextPage() {
    if (total <= (3 * (page + 1))) return;

    setPage(page + 1);
  }

  function handleBackPage() {
    if (page === 0) return;

    setPage(page - 1);
  }

  useEffect(() => {
    setLoading(true);

    loadEmployees();

    setLoading(false);
  }, [page]);

  return (
    <Container>
      <Sidebar />

      <Cards>
        <h1>Pessoas que vão ganhar dinheiro </h1>
        {employees.length > 0 ? employees.map((employee) => (
          <Card key={employee.id} name={employee.employee_name} />
        )) : <img src={loadingSvg} alt="" />}
        <span>
          <button disabled={loading || page === 0} onClick={handleBackPage} type="button">
            <FiArrowLeft size={30} color="#303030" />
          </button>
          <p>
            Pagina
            {' '}
            {page + 1}
            {' '}
            de
            {' '}
            {total / 3}
          </p>
          <button disabled={loading || total <= (3 * (page + 1))} onClick={handleNextPage} type="button">
            <FiArrowRight size={30} color="#303030" />
          </button>
        </span>
      </Cards>
    </Container>
  );
}

export default Dashboard;
