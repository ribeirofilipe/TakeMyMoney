import styled from 'styled-components';

export const Container = styled.div`
  display: ${window.screen.width > 515 ? 'none' : ''};

  svg {
    margin: 5px 0 0 5px;
  }

  height: 50px;
  width: 100%;
  background: #059D42;
`;
