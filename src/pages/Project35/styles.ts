import styled from 'styled-components'

export const ContainerProject35 = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Carrossel = styled.div`
  position: relative;
  width: 500px;
  height: 500px;

  display: flex;
  overflow: hidden;
`

interface ImageProps {
  order: number
}

export const Image = styled.img<ImageProps>`
  width: 100%;
  height: 100%;
  object-fit: cover;

  position: absolute;
  top: 0;
  left: ${({ order }) => order * 500}px;

  transition: left 0.5s ease-in-out;
`

export const ContentButtons = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-between;
  gap: 16px;

  > button {
    width: 100%;
    background-color: rebeccapurple;
    color: #fff;
    font-size: 14px;
    border: none;
    padding: 0.5rem;
    cursor: pointer;
  }
`
