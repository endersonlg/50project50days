import styled from "styled-components";

export const ContainerProject23 = styled.div`

  @keyframes rotate1 {
    0%{
      transform: rotate(0deg);
    }
    25%{
      transform: rotate(0deg);
    }
    50%{
      transform: rotate(180deg);
    }
    75%{
      transform: rotate(180deg);
    }
    100%{
      transform: rotate(360deg);
    }
  };

  @keyframes rotate2 {
    0%{
      transform: rotate(90deg);
    }
    25%{
      transform: rotate(90deg);
    }
    50%{
      transform: rotate(270deg);
    }
    75%{
      transform: rotate(270deg);
    }
    100%{
      transform: rotate(450deg);
    }
  };

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #2c3e50;

>span{
    position: absolute;
    top:calc(50% + 25px);
    left: calc(50% - 25px);
    width: 0; 
    height: 0; 
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 50px solid #FFF;
    transform-origin:top;
    animation:rotate1 2s linear infinite 0.5s;

    &:last-child{
      transform: rotate(90deg);
      animation: rotate2 2s linear infinite;
    }
  }
`

