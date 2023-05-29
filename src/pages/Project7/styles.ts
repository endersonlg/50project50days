import styled from 'styled-components'

export const ContainerProject7 = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  height: 100%;

  > div {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;

    height: 100%;

    background-repeat: no-repeat;
    background-size: cover;

    transition: flex-grow 1s linear;
    &:hover {
      flex-grow: 3;
    }

    &::before {
      content: '';
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
    }

    button {
      padding: 24px;
      width: 240px;
      border: 3px solid #fff;
      z-index: 1;
      background: transparent;

      color: #fff;
    }
  }

  > div:nth-child(1) {
    background-image: url('https://50projects50days.com/projects/split-landing-page/ps.jpg');

    &:before {
      background: rgba(87, 84, 236);
      opacity: 0.7;
    }
  }

  > div:nth-child(2) {
    background-image: url('https://50projects50days.com/projects/split-landing-page/xbox.jpg');

    &:before {
      background: rgba(43, 43, 43);
      opacity: 0.8;
    }
  }
`
