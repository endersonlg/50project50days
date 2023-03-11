import styled, { css } from 'styled-components'

export const ContainerProject21 = styled.div`
  width: 100%;
  height: 100%;

  background-color: steelblue;
  
  display: flex;
  justify-content: center;
  align-items: center;
  gap:24px;
`

interface BoxProps{
  backgroundURL:string|undefined;
  over:boolean;
  startDragAndDrop:boolean;
}

export const Box = styled.div<BoxProps>`
  height: 150px;
  width: 150px;

  background-color: #FFF;
  border:3px solid #000;

  >div{
    width: 100%;
    height: 100%;
  }


  ${({over})=>over&&css`
    border:3px dashed #FFF;
    background-color: #000;
  `}


  ${({backgroundURL,startDragAndDrop})=>backgroundURL&&css`
    > div{
      background-image: ${`url(${backgroundURL})`};
      opacity:${startDragAndDrop ? 0 : 1};
    }
  `}
`