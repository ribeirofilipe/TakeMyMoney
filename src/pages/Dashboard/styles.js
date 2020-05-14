import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;

  width: 100%;
  height: 100%;

  > img {
    margin: auto;
    width: 20%;
  }

  @media (max-width: 515px) {
    justify-content: center;
  }

  @media (max-width: 968px) {
    justify-content: center;
  }

`;

export const Cards = styled.div`
  flex: 1;
  margin: 30px 120px;

  @media (max-width: 968px) {
    margin-top: 30px;
  }

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

    @media (max-height: 768px) and (min-width: 600px) {
      max-width: 755px;
    }

    button  {
      border: 0;
      background: #E9EBEE;
      cursor: pointer;

      > img {
        width: 15%;
      }

      & + p {
        margin-left: auto;
        color: #059D42;
        font-size: 16px;
        font-weight: bold;
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
