import React from 'react';

import { RiMenu2Line } from 'react-icons/ri';
import { GiTakeMyMoney } from 'react-icons/gi';
import { Container } from './styles';


function Header() {
  return (
    <Container>
      <RiMenu2Line size={40} color="#FFF" />
      <span>
        <strong>TakeMyMoney</strong>
        <GiTakeMyMoney size={40} color="#FFF" />
      </span>
    </Container>
  );
}

export default Header;
