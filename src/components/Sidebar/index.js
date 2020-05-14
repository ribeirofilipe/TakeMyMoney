import React from 'react';

import { GiTakeMyMoney } from 'react-icons/gi';
import { Container, Menu } from './styles';

function Sidebar() {
  return (
    <Container>
      <Menu>
        <span>
          <strong>TakeMyMoney</strong>
          <GiTakeMyMoney size={80} color="#FFF" />
        </span>
        <div>
          <h2>Dashboard</h2>
        </div>
      </Menu>
    </Container>
  );
}

export default Sidebar;
