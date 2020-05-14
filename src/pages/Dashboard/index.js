import React, { useEffect, useState } from 'react';

import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import ClipLoader from 'react-spinners/ClipLoader';
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
  const [next, setNext] = useState(false);
  const [back, setBack] = useState(false);

  async function loadEmployees() {
    setLoading(true);

    const response = await api.get('employees');

    const skip = 3 * page;

    setTotal(response.data.data.length);
    setEmployees(response.data.data.slice(skip, 3 + skip));
    setLoading(false);
    setNext(false);
    setBack(false);
  }

  function handleNextPage() {
    if (total <= (3 * (page + 1))) return;
    setNext(true);
    setPage(page + 1);
  }

  function handleBackPage() {
    if (page === 0) return;
    setBack(true);
    setPage(page - 1);
  }

  useEffect(() => {
    loadEmployees();
  }, [page]);

  return (
    <Container>
      <Sidebar />

      {employees.length > 0
        ? (
          <Cards>
            <h1>Pessoas que vão ganhar dinheiro </h1>
            {employees.map((employee) => (
              <Card key={employee.id} name={employee.employee_name} />
            ))}
            <span>
              <button disabled={loading || page === 0} onClick={handleBackPage} type="button">
                {loading && back ? <ClipLoader size={25} color="#059D42" loading={loading} /> : <FiArrowLeft size={30} color="#303030" />}
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
                {loading && next ? <ClipLoader size={25} color="#059D42" loading={loading} /> : <FiArrowRight size={30} color="#303030" /> }
              </button>
            </span>
          </Cards>
        ) : <img src={loadingSvg} alt="" />}
    </Container>
  );
}

export default Dashboard;
