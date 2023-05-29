import styled, { css } from 'styled-components'

export const ContainerProject36 = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #111;

  > div {
    width: 400px;
    height: 500px;

    display: flex;
    flex-wrap: wrap;
    gap: 4px;
  }
`

const COLORS = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']

export const Square = styled.div`
  width: 16px;
  height: 16px;

  transition: all 2s ease;

  background-color: rgb(29, 29, 29);
  box-shadow: rgb(0, 0, 0) 0px 0px 2px;

  &:hover {
    transition-duration: 0s;

    ${() => {
      const color = COLORS[Math.floor(Math.random() * COLORS.length)]

      return css`
        background-color: ${color};
        box-shadow: ${`0 0 2px ${color}, 0 0 10px ${color}`};
      `
    }}
  }
`
