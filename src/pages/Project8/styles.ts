import styled from 'styled-components'

export const ContainerProject8 = styled.div`
  width: 100%;
  height: 100%;

  background: steelblue;

  display: flex;
  align-items: center;
  justify-content: center;

  form {
    padding: 32px 24px;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 8px;

    h1 {
      color: #fff;
      font-weight: 600;
      text-align: center;
      margin-bottom: 32px;
    }

    div {
      position: relative;
      display: flex;
      flex-direction: column;
      margin-bottom: 32px;
      border-bottom: 1px solid #fff;

      label {
        position: absolute;
        top: 8px;
        left: 0;

        span {
          display: inline-block;
          color: #fff;
          transform: translateY(0px) color;
          transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);

          &:nth-child(1) {
            transition-delay: 0.2s;
          }

          &:nth-child(2) {
            transition-delay: 0.4s;
          }

          &:nth-child(3) {
            transition-delay: 0.6s;
          }

          &:nth-child(4) {
            transition-delay: 0.8s;
          }

          &:nth-child(5) {
            transition-delay: 1.2s;
          }
          &:nth-child(6) {
            transition-delay: 1.4s;
          }
          &:nth-child(7) {
            transition-delay: 1.8s;
          }
          &:nth-child(8) {
            transition-delay: 2s;
          }
        }
      }

      input {
        border: 0;
        background: transparent;
        outline: none;
        padding: 8px 0;
        color: #fff;

        &:focus + label span {
          transform: translateY(-24px);
          color: lightblue;
        }

        &:focus {
          outline: none;
        }
      }
    }

    button {
      background: lightblue;
      width: 100%;
      padding: 15px;
      font-size: 16px;
      border-radius: 8px;
      margin-bottom: 24px;
    }

    span {
      color: #fff;
      a {
        color: lightblue;
      }
    }
  }
`
