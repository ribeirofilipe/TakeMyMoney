import React from 'react';

import { RiMenu2Line } from 'react-icons/ri';
import { Container } from './styles';


function Header() {
  return (
    <Container>
      <RiMenu2Line size={40} color="#FFF" />
    </Container>
  );
}

export default Header;
