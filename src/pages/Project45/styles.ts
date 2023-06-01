import styled from 'styled-components'

export const ContainerProject45 = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  display: flex;

  > button {
    position: absolute;
    top: 12px;
    left: 12px;
  }
`

interface AsideProps {
  isOpen: boolean
}

export const Aside = styled.aside<AsideProps>`
  position: fixed;

  width: 100%;
  max-width: 480px;
  min-width: 360px;

  height: 100%;

  background-color: #000;

  transform: ${({ isOpen }) =>
    isOpen ? 'translateX(0)' : 'translateX(-100%)'};

  transition: transform 0.5s linear;
  transition-delay: ${({ isOpen }) => (isOpen ? '0' : '1s')};

  > div {
    width: 95%;
    height: inherit;
    background-color: #f00;

    transform: ${({ isOpen }) =>
      isOpen ? 'translateX(0)' : 'translateX(-100%)'};
    transition: transform 0.5s linear;
    transition-delay: 0.5s;

    > div {
      position: relative;

      width: 95%;
      height: inherit;
      background-color: #fff;

      padding: 24px;

      transform: ${({ isOpen }) =>
        isOpen ? 'translateX(0)' : 'translateX(-100%)'};
      transition: transform 0.5s linear;
      transition-delay: ${({ isOpen }) => (isOpen ? '1s' : '0')};

      button {
        position: absolute;

        top: 24px;
        right: 24px;

        color: #999;
      }

      img {
        width: 50px;
        height: 70px;
        margin-bottom: 24px;
      }

      ul {
        li {
          margin-bottom: 24px;
        }

        ul {
          margin-left: 24px;
        }
      }
    }
  }
`

export const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  gap: 12px;

  img {
    width: 50px;
    height: 70px;
  }
`
