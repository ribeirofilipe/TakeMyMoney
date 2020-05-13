import styled from 'styled-components';

export const Container = styled.div`
  display: ${window.screen.width < 515 ? 'none' : ''};
  background: #059D42;

  height: 100%;
  width: 12%;
`;

export const Menu = styled.div`
  margin: 20px 10px;

  div {
    h2 {
      color: #FFF;
    }
  }
`;
