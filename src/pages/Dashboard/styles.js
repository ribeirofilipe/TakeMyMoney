import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;

  width: 100%;
  height: 100%;

  @media (max-width: 515px) {
    justify-content: center;
  }

`;

export const Cards = styled.div`
  flex: 1;
  margin: 30px 120px;

  h1 {
    color: rgba(0, 0, 0, 0.7);
  }

  > img {
    margin: 20px auto;
    width: 30%;
  }

  span {
    display: flex;
    max-width: 900px;

    button  {
      border: 0;
      background: #E9EBEE;

      & + p {
        margin-left: auto;
        color: #059D42;
        font-size: 16px;
        font-weight: bold;
      }


      svg {
        cursor: pointer;
      }
    }

    p + button {
      margin-left: auto;
    }
  }

  @media (max-width: 515) {
    margin-top: 20px;

    h1 {
      font-size: 16px;
    }
  }
`;
