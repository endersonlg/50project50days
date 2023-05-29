import styled from 'styled-components'

export const ContainerProject3 = styled.div`
  position: relative;
  background: #333;

  overflow: hidden;
`

interface ContentProps {
  isRotated: boolean
}

export const Content = styled.div<ContentProps>`
  background: #fafafa;

  padding: 64px;
  width: 100%;
  height: 100%;

  transform: ${({ isRotated }) => isRotated && 'rotate(-20deg)'};
  transform-origin: top left;
  transition: transform 0.5s linear;

  z-index: 1000;

  div {
    margin: 0 auto;
    width: 80vw;
    h4 {
      margin-bottom: 8px;
    }

    i {
      margin-bottom: 16px;
    }

    p {
      text-align: justify;
      margin-bottom: 16px;
    }

    h3 {
      margin-bottom: 16px;
    }

    img {
      max-width: 100%;
      margin-bottom: 16px;
    }
  }
`

interface MenuProps {
  isRotated: boolean
}

export const Menu = styled.div<MenuProps>`
  position: absolute;
  top: 0px;
  left: 0px;

  width: 100px;
  height: 100px;
  border-bottom-right-radius: 100px;
  background: #ff7979;

  color: #fff;

  z-index: 2;

  div {
    position: relative;
    width: 100%;
    height: 100%;

    button {
      position: absolute;
      border: 0;
      color: #fff;

      transition: all 0.5s ease-in;

      &:nth-child(1) {
        top: ${({ isRotated }) => (isRotated ? '-60%' : '0')};
        left: ${({ isRotated }) => (isRotated ? '30%' : '0')};
        svg {
          transform: ${({ isRotated }) =>
            isRotated ? 'rotate(-90deg)' : 'rotate(0)'};
        }
      }

      &:nth-child(2) {
        top: ${({ isRotated }) => (isRotated ? '0px' : '30%')};
        left: ${({ isRotated }) => (isRotated ? '0' : '-60%')};
        svg {
          transform: ${({ isRotated }) =>
            isRotated ? 'rotate(-90deg)' : 'rotate(0)'};
        }
      }

      svg {
        margin: 24px 0 0 24px;
        transition: all 0.5s ease-in;
      }
    }
  }
`

interface OptionsProps {
  isRotated: boolean
}

export const Options = styled.nav<OptionsProps>`
  position: fixed;
  left: ${({ isRotated }) => (isRotated ? '24px' : '-100px')};
  bottom: 64px;

  transition: left 0.5s linear;

  ul {
    li {
      display: flex;
      align-items: center;
      gap: 8px;
      color: #fff;
      margin-bottom: 16px;
      transition: margin-left 0.5s linear;

      :nth-child(2) {
        margin-left: ${({ isRotated }) => (isRotated ? '16px' : 0)};
      }

      :nth-child(3) {
        margin-left: ${({ isRotated }) => (isRotated ? '32px' : 0)};
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`
