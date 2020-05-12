import React from 'react';

import PropTypes from 'prop-types';
import { FiPlus } from 'react-icons/fi';
import miniDollar from '../../assets/mini-dollar.svg';
import dollar from '../../assets/dollar.svg';


import { Container, Info, Value } from './styles';

import Modal from '../Modal';

const ModalInfo = ({ name }) => (
  <Container>
    <span>
      <h4>
        Quantos reais adicionar para [
        {name}
        ]?
      </h4>
      x
    </span>

    <Value>
      R$25,00
    </Value>

    <Value>
      R$50,00
    </Value>

    <Value>
      R$75,00
    </Value>

    <Value>
      R$125,00
    </Value>
  </Container>
);

function Card({ name }) {
  return (
    <>
      <Info>
        <img src={miniDollar} alt="Grupo Saúde" />
        <p>Você não adicionou nada</p>
      </Info>
      <Container>
        <div>
          <img src={dollar} alt="Grupo Saúde" />

          <aside>
            <h4>{name || 'Filipe Ribeiro'}</h4>

            <p>Ao clicar no link abaixo, uma dialog irá aparecer perguntando quantos reais você deseja adicionar a barra de progresso. A barra deve começar em 0</p>

            <div>
              <p>Total R$200,00</p>
              <input placeholder="R$20,00" />
            </div>

            <span>
              <FiPlus size={25} color="#059D42" />
              <Modal description="Clique aqui para adicionar reais">
                <ModalInfo name={name} />
              </Modal>
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

ModalInfo.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Card;
