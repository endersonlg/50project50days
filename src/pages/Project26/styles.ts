import styled from 'styled-components'

export const ContainerProject26 = styled.div`
  height: 100vh;
  width: 100vw;

  position: relative;
  overflow: hidden;
`

interface InformationProps {
  backgroundColor: string
  y: number
}

export const Information = styled.div<InformationProps>`
  position: absolute;
  top: ${({ y }) => `${y * 100}%`};
  left: 0;

  width: 30%;
  height: 100%;
  background-color: ${({ backgroundColor }) => backgroundColor};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  transition: top 1s ease-in-out;

  h1 {
    font-size: 40px;
    color: #fff;
    margin-bottom: 8px;
  }
  span {
    color: #fff;
  }
`

interface LandscapeProps {
  backgroundImage: string
  y: number
}

export const Landscape = styled.div<LandscapeProps>`
  position: absolute;
  top: ${({ y }) => `${-y * 100}%`};
  right: 0;

  width: 70%;
  height: 100%;

  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  transition: top 1s ease-in-out;
`

const Button = styled.button`
  position: absolute;
  width: 44px;
  height: 48px;

  background-color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #aaa;

  transition: color 0.2s ease-in;

  &:hover {
    color: #222;
  }
`

export const ButtonUp = styled(Button)`
  top: calc(50% - 44px);
  left: calc(30% - 0px);

  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
`

export const ButtonDown = styled(Button)`
  top: 50%;
  left: calc(30% - 44px);

  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`
