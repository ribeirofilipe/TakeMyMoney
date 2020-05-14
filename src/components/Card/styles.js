import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;

  background: #FFF;

  width: 100%;
  height: 100%;
  max-width: 900px;
  max-height: 190px;
  border-radius: 4px;
  margin-bottom: 10px;
  position: relative;

  @media (max-width: 515px) {
    display: flex;
    justify-content: center;
    height: 300px;
    width: 350px;
    max-height: 350px;
    padding-top: 20px;
  }

  @media (max-width: 968px) and (min-width: 600px) {
    width: 500px;
    height: 210px;

    max-width: 500px;
    max-height: 210px;
  }

  @media (max-height: 768px) and (min-width: 600px) {
    height: 22vh;
  }

  div {
    padding: 20px;
    display: flex;

    align-items: flex-start;

    img {
      display: ${window.screen.width > 515 ? '' : 'none'};
      margin-right: 25px;
    }

    aside {
      h4 {
        color: #059D42;
        margin-bottom: 10px;
      }

      p {
        width: 85%;
        color: #63666A;
        font-size: 12px;
      }


      div {
        padding: 0;
        margin-top: 20px;
        width: 100%;

        @media (max-height: 768px) and (min-width: 600px) {
          margin-top: 17px;
        }

        display: flex;
        flex-direction: column;
        font-size: 10px;

        p {
          margin-left: auto;
          text-align: right;
          color: #778489;
        }

        span {
          width: 95%;
          background: #E9E9E9;
          border-radius: 10px;

          input {
            transition: width 0.5s;
            color: ${(props) => (props.total > 0 ? '#FFF' : '#303030')};
            background: ${(props) => (props.total > 0 ? '#059D42' : '#E9E9E9')};
            border-radius: 10px;
            border: 0;
            padding: 2px 4px;
            width: ${(props) => (props.total > 0 ? `${props.total / 2}%` : '10%')};

            @media (max-width: 515px) {
              width: ${(props) => (props.total > 0 ? `${props.total / 2}%` : '40%')};
            }
          }
        }
      }

      span {
        display: flex;
        align-items: center;

        svg {
          margin-right: 5px;
        }

        button, span {
          cursor: pointer;
          text-align: left;
          border: 0;
          background: #FFF;
          color: #059D42;
          font-size: 12px;
          width: 35%;
          margin-bottom: 20px;

          @media (max-width: 515px) {
            width: 80%;
          }
        }

        span {
          width: 10%;
          margin-top: 10px;

          @media (max-width: 515px) {
            margin-top: 20px;
          }
        }
      }
    }
  }


`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  top: 20px;
  z-index: 1;

  position: relative;
  background: ${(props) => (props.total > 0 ? '#059D42' : '#E14646')};
  margin-left: 42%;

  height: 38px;
  width: 260px;

  img {
    margin-right: 10px;
  }

  p {
    color: #FFF;
    font-weight: bold;
  }

  @media (max-width: 515px) {
    margin-left: 32%;

    height: 38px;
    width: 255px;
    padding: 0 10px;
  }

`;
