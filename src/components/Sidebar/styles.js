import styled from 'styled-components';

export const Container = styled.div`
  display: none;
  background: #059D42;

  height: 100%;
  width: 12%;
  min-width: 200px;

  @media (min-width: 968px) {
    display: initial;
  }
`;

export const Menu = styled.div`
  margin: 20px 10px;

  span {
    border: 1px solid #FFF;
    border-radius: 15px;
    padding: 5px;

    display: flex;
    justify-content: center;
    align-items: center;

    strong {
      color: #FFF;
      font-size: 20px;
    }
  }

  div {
    margin-top: 25px;

    h2 {
      color: #FFF;
    }
  }
`;
