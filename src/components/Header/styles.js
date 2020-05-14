import styled from 'styled-components';

export const Container = styled.div`
  display: ${window.screen.width > 515 ? 'none' : 'flex'};

  svg {
    margin: 5px 0 0 5px;
  }

  span {
    display: flex;
    align-items: center;

    margin-left: 20%;
  }

  height: 50px;
  width: 100%;
  background: #059D42;
`;
