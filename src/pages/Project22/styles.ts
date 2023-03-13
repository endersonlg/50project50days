import styled from 'styled-components'
import CanvasDraw from 'react-canvas-draw'

export const ContainerProject22 = styled.div`
  width:100%;
  height:100%;
  padding:64px;

  display: flex;
  justify-content: center;
  align-items: center;

  >div{
    width:100%;
    height: 100%;
    max-width: 800px;
    max-height: 800px;

    border:2px solid steelblue;

    display: flex;
    flex-direction: column;

    >canvas{
      flex:1;
    }

    >div{
      display: flex;
      justify-content: space-between;
      align-items: center;

      padding:24px;
      background-color:steelblue;

      button,span,input{
        background-color: #FFF;
        font-size: 32px;
        width: 50px;
        height: 50px;
        padding:4px;

        display: flex;
        justify-content: center;
        align-items: center;
      }

      >div{
        display: flex;
        align-items: center;
        gap: 8px;
      }
    }
    
  }
`

export const Canvas = styled(CanvasDraw)`
  width: 100%;
  max-width: 800px;
  flex:1;
  div{
    padding:0;
  }
`