import React from 'react';

import PropTypes from 'prop-types';
import { AiOutlineClose } from 'react-icons/ai';
import { Container } from './styles';

import formatNumber from '../../../utils/format';

const options = [
  { id: 1, value: 25 },
  { id: 2, value: 50 },
  { id: 3, value: 75 },
  { id: 4, value: 125 },
];

const CardModal = ({
  handleClose, name, setTotal, total,
}) => {
  function handleSelectValue(value) {
    if (total + value > 200) {
      alert('Limite atingido.');
      return;
    }

    setTotal(total + value);

    if (window.screen.width < 515) {
      handleClose();
    }
  }

  return (
    <Container>
      <header>
        <h4>
          Quantos reais adicionar para [
          {name}
          ]?
        </h4>
        <AiOutlineClose
          size={20}
          color="#FFF"
          onClick={handleClose}
        />
      </header>

      <div>
        {options.map((option) => (
          <button
            type="button"
            onClick={() => handleSelectValue(option.value)}
            key={option.id}
          >
            {formatNumber(option.value)}
          </button>
        ))}
      </div>
    </Container>
  );
};

export default CardModal;

CardModal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  setTotal: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
};
