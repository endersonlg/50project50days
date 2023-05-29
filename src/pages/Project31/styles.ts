import styled from 'styled-components'

export const ContainerProject31 = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #3b3b98;
  padding: 24px;

  > div {
    width: 350px;
    padding: 32px 24px;

    background-color: #23235b;
    box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.2);

    h2 {
      text-align: center;
      color: #fff;
      margin-bottom: 24px;
    }
  }
`

export const Result = styled.div`
  height: 50px;

  padding: 12px 5px 12px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  background-color: rgba(0, 0, 0, 0.4);

  margin-bottom: 16px;

  span {
    font-size: 18px;
    color: #fff;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #3b3b98;
    width: 40px;
    height: 40px;
    color: #fff;

    transition: filter 0.2s ease-in-out;

    &:hover {
      filter: brightness(0.92);
    }
  }
`

export const Settings = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    label {
      color: #fff;
    }

    input:focus {
      outline: none;
    }
  }

  button {
    background-color: #3b3b98;
    padding: 8px 12px;
    color: #fff;
    transition: filter 0.2s ease-in-out;

    &:hover {
      filter: brightness(0.92);
    }
  }
`
