import React, { useEffect, useState, useMemo, useRef } from 'react';

import PropTypes from 'prop-types';
import { FiPlus } from 'react-icons/fi';
import miniDollar from '../../assets/mini-dollar.svg';
import dollar from '../../assets/dollar.svg';

import { Container, Info } from './styles';

import formatNumber from '../../utils/format';

import Modal from '../Modal';
import CardModal from './CardModal';

function Card({ name }) {
  const childRef = useRef(null);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total = localStorage.getItem(`${name}/total`);
    if (total) {
      setTotal(JSON.parse(total));
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(`${name}/total`, total);
  }, [total])

  const formattedNumber = useMemo(() => formatNumber(total), [total]);
  return (
    <>
      <Info total={total}>
        <img src={miniDollar} alt="Grupo Saúde" />
        <p>{total > 0 ? `Você já adicionou ${formattedNumber}` : 'Você não adicionou nada'}</p>
      </Info>
      <Container total={total}>
        <div>
          <img src={dollar} alt="Grupo Saúde" />

          <aside>
            <h4>{name || 'Filipe Ribeiro'}</h4>

            <p>Ao clicar no link abaixo, uma dialog irá aparecer perguntando quantos reais você deseja adicionar a barra de progresso. A barra deve começar em 0</p>

            <div>
              <p>Total R$200,00</p>
              <span>
                <input
                  onChange={() => {}}
                  value={formattedNumber}
                />
              </span>
            </div>

            <span>
              <FiPlus size={25} color="#059D42" />
              <Modal ref={childRef} description="Clique aqui para adicionar reais">
                <CardModal
                  handleClose={() =>childRef?.current?.handleClose()}
                  total={total}
                  setTotal={setTotal}
                  name={name}
                />
              </Modal>
              <span
                onClick={() => setTotal(0)}
                type="button">Clique aqui para zerar
              </span>
            </span>
          </aside>
        </div>
      </Container>
    </>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
};

CardModal.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Card;
