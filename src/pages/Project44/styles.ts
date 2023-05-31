import styled from 'styled-components'

export const ContainerProject44 = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);

  h1 {
    position: absolute;
    top: 24px;
  }

  > div {
    position: relative;
  }
`

export const Slider = styled.input.attrs(() => ({
  type: 'range',
}))`
  height: 10px;
  width: 300px;
  background: #800080;
  z-index: 1;
  border-radius: 8px;

  -webkit-appearance: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  /*webkit*/
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #fff;
    border: 1px solid #800080;
  }
`

export interface TooltipProps {
  value: number
}

export const Tooltip = styled.label<TooltipProps>`
  position: absolute;
  bottom: 30px;
  left: ${({ value }) => value}%;
  transform: ${({ value }) =>
    `translateX(calc(-40px - ${(value - 50) * 0.01 * 15}px))`};

  width: 80px;
  padding: 5px;

  background-color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  border-radius: 4px;

  text-align: center;
`
