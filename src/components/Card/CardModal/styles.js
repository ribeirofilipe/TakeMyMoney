import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  width: 25vw;
  height: 30vh;

  @media (max-width: 768px) {
      width: 70vw;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px 5px 0 0;

    background: #059D42;
    padding: 10px;
    color: #FFF;

    svg {
      cursor: pointer;
    }
  }

  div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    padding: 20px;
    align-items: center;
    justify-content: center;

    button {
      width: 100%;
      margin: auto;
      padding: 10% 5%;
      background: #D4E4DB;
      color: #059D42;
      text-align: center;
      font-weight: bold;
      border: 0;

      cursor: pointer;
    }
  }

  footer {
    background: #F5F5F5;
    border-radius: 0px 0px 5px 5px;
    height: 40px;
    width: 100%;
  }
`;
