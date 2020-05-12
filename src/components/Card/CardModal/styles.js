import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  width: 30vw;
  height: 35vh;

  @media (max-width: 515px) {
      width: 100vw;
      height: 90vh;
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
    margin: 20px auto;

    @media (max-width: 515px) {
      padding: 50px;
    }

    button {
      width: 100%;
      margin: auto;
      padding: 10% 5%;
      background: #D4E4DB;
      color: #059D42;
      text-align: center;
      font-weight: bold;
      border: 0;

      @media (max-width: 515px) {
        padding: 60% 25%;
      }

      cursor: pointer;
    }
  }
`;
