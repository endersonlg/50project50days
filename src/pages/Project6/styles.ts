import styled from 'styled-components'

export const ContainerProject6 = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  h1 {
    margin-bottom: 24px;
  }
`

interface CardProps {
  show: boolean
}

export const Card = styled.div<CardProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 200px;
  width: 400px;

  background: steelblue;
  border-radius: 16px;

  color: #fff;
  font-size: 48px;

  margin-bottom: 24px;

  transition: transform 0.5s linear;

  &:nth-child(odd) {
    transform: ${({ show }) => (show ? 'translateX(0)' : 'translateX(400%)')};
  }

  &:nth-child(even) {
    transform: ${({ show }) => (show ? 'translateX(0)' : 'translateX(-400%)')};
  }

  &:last-child {
    margin-bottom: 0;
  }
`
