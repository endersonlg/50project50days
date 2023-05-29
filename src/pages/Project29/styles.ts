import { Heart } from 'phosphor-react'
import styled from 'styled-components'

export const ContainerProject29 = styled.div`
  padding: 24px;
  width: 100%;
  div {
    margin: 0 auto;
    width: 300px;

    text-align: center;

    h3 {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    small {
      display: block;
      margin-bottom: 16px;
    }
  }
`

export const ImageBackground = styled.div`
  position: relative;
  background-image: url('https://images.unsplash.com/photo-1504215680853-026ed2a45def?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80');
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  width: 100%;
  height: 440px;

  background-size: cover;
  cursor: pointer;
`

interface EffectProps {
  x: number
  y: number
}

export const Effect = styled(Heart)<EffectProps>`
  @keyframes scale {
    to {
      transform: translate(-50%, -50%) scale(3);
      opacity: 0;
    }
  }

  position: absolute;
  top: ${({ y }) => y}px;
  left: ${({ x }) => x}px;

  width: 100px;
  height: 100px;

  transform: translate(-50%, -50%) scale(0);
  animation: scale 0.5s ease-out;
  border-radius: 50%;
`
