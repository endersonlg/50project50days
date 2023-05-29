import styled from 'styled-components'

interface ContainerProject19Props {
  darkMode: boolean
}

export const ContainerProject19 = styled.div<ContainerProject19Props>`
  width: 100%;
  height: 100%;
  background-color: ${({ darkMode }) => (darkMode ? '#000' : '#FFF')};
  transition: all 0.2s ease-in;
  padding: 64px;

  button {
    background-color: ${({ darkMode }) => (darkMode ? '#FFF' : '#000')};
    color: ${({ darkMode }) => (darkMode ? '#000' : '#FFF')};
    padding: 8px;
    border-radius: 8px;
    transition: all 0.2s ease-in;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    height: 400px;
    width: 100%;
    text-align: center;

    h4 {
      font-size: 60px;
      font-weight: 400;
      transition: all 0.3s ease-in;
      color: ${({ darkMode }) => (darkMode ? '#FFF' : '#000')};
    }

    p {
      color: #aaa;

      span {
        padding: 4px;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        transition: all 0.3s ease-in;
        background-color: ${({ darkMode }) => (darkMode ? '#FFF' : '#000')};
        color: ${({ darkMode }) => (darkMode ? '#000' : '#FFF')};
      }
    }
  }
`

interface ClockProps {
  seconds: number
  minutes: number
  hours: number
  darkMode: boolean
}

export const Clock = styled.div<ClockProps>`
  position: relative;
  width: 100%;
  height: 200px;

  div {
    position: absolute;
    left: 50%;
    top: 50%;

    height: 3px;

    transform-origin: 0;
    transition: background 0.3s ease-in;
  }

  > div:nth-child(1) {
    width: 60px;
    background-color: ${({ darkMode }) => (darkMode ? '#FFF' : '#000')};
    transform: ${({ hours }) => `rotate(${hours * 15 - 90}deg)`};
  }

  > div:nth-child(2) {
    width: 90px;
    background-color: ${({ darkMode }) => (darkMode ? '#FFF' : '#000')};
    transform: ${({ minutes }) => `rotate(${minutes * 6 - 90}deg)`};
  }

  > div:nth-child(3) {
    width: 90px;
    background-color: #f00;
    transform: ${({ seconds }) => `rotate(${seconds * 6 - 90}deg)`};
  }

  > div:nth-child(4) {
    width: 10px;
    height: 10px;
    left: calc(50% - 5px);
    top: calc(50% - 5px);
    border-radius: 50%;
    background-color: #f00;
  }

  > div:nth-child(5) {
    width: 6px;
    height: 6px;
    left: calc(50% - 3px);
    top: calc(50% - 3px);
    border-radius: 50%;
    background-color: #000;
  }
`
