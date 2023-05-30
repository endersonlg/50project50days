import styled, { css } from 'styled-components'

export const ContainerProject43 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fef9f2;

  > div {
    background-color: #fff;
    padding: 30px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

    text-align: center;
  }
`

export const ContentCongratulation = styled.div`
  background-color: #fff;
  padding: 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

  svg {
    display: block;
    margin: 0 auto 8px;
    color: red;
  }

  strong {
    display: block;
    margin-bottom: 12px;
  }
`

interface CardProps {
  selected: boolean
}

export const Cards = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  gap: 8px;
`

export const Card = styled.button<CardProps>`
  display: flex;
  gap: 4px;
  flex: 1;
  flex-direction: column;
  align-items: center;

  padding: 20px;

  color: #555;

  span {
    font-size: 12px;
  }

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  ${({ selected }) =>
    selected &&
    css`
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    `}
`

export const ButtonSend = styled.button`
  margin-top: 24px;
  background-color: #302d2b;
  padding: 12px 24px;
  color: #fff;
  border-radius: 6px;
`
