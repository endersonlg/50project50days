import styled from 'styled-components'

export const Container = styled.div`
  overflow: hidden;
  position: relative;
  max-width: 900px;
  height: 500px;
  margin: 0 auto;
`

export const Content = styled.div`
  display: flex;
`

type BackgroundImageProps = {
  url: string
  position: number
}

export const BackgroundImage = styled.div<BackgroundImageProps>`
  width: 900px;
  height: 450px;
  background-image: ${({ url }) => `url(${url})`};
  position: absolute;
  top: 0;
  left: ${({ position }) => `${position * 900}px`};
  transform: ${({ position }) =>
    `rotateY(${90 * position}deg)  translateZ(${position === 0 ? 0 : -450}px)`};

  transition: all 1s ease-in-out;
`

export const ContentProgress = styled.div`
  position: absolute;
  bottom: 0px;
  right: 50%;
  transform: translateX(50%);

  display: flex;
  gap: 4px;
`

type StepProps = {
  position: number
}

export const Step = styled.span<StepProps>`
  position: relative;
  display: block;
  width: 50px;
  height: 4px;
  border-radius: 9999999px;
  background: gray;

  overflow: hidden;

  &:after {
    content: '';
    position: absolute;
    inset: 0;

    width: 50px;
    height: 4px;
    background: red;

    transform: ${({ position }) => `translateX(${position * -100}%)`};

    transition: all 1s ease-in-out;
  }
`
