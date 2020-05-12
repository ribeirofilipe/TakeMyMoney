import styled from 'styled-components';

export const Container = styled.div`
  display: ${window.screen.width > 515 ? 'none' : 'flex'};

  height: 50px;
  width: 20px;
  background: #059D42;
`;
