import styled, { css } from "styled-components";

export const ContainerProject34 = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  >div{
    width: 100px;
    height: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position:relative;


  }

  h3{
    font-size: 20px;
    margin: 8px;
  }

  @keyframes ZoomInAndOut {
    0%{
      transform: scale(1.0);
    }
   50%{
      transform: scale(1.5);
    }
    100%{
      transform: scale(1.0);
    }
  } 

  h2{
    font-size: 32px;
    margin: 8px;
    animation: ZoomInAndOut .2s forwards;
  }

  button{
    border:1px solid #BBB;
    background-color: #EEE;
    border-radius: 4px;
    padding:2px 4px;

  }
`
interface CountProps{
  isVisible: boolean;
}

export const Count = styled.span<CountProps>`

  @keyframes RotateNumber {
    0%{
      transform: translate(-50%,-50%) rotate(180deg);
    }
    30%{
      transform: translate(-50%,-50%) rotate(0deg);
    }
    70%{
      transform: translate(-50%,-50%) rotate(0deg);
    }
    100%{
      transform: translate(-50%,-50%) rotate(-180deg);
    }
  } 

  position:absolute;
  top: 50%;
  left:50%;
  transform-origin: bottom center;
  transform: translate(-50%,-50%) rotate(-180deg);

  color: #3498db;
  font-size: 48px;

  ${({isVisible})=>isVisible&&css`
    animation-name:RotateNumber;
    animation-duration:1s;
    animation-iteration-count: infinite;
  `}
`