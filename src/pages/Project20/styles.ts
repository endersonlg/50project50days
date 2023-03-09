import styled from 'styled-components'

export const ContainerProject20 = styled.div`
  height: 100%;
  width: 100%;

  background-color: #000;

  display: flex;
  align-items: center;
  justify-content: center;



  button{
    position:relative;
    background-color: purple;
  
    color: #fff;  
    font-size:14px;
    letter-spacing: 2px;
    padding: 20px 30px;
    overflow: hidden;


  }
`

interface EffectProps {
  x:number;
  y:number;
}

export const Effect = styled.div<EffectProps>`
  @keyframes scale {
    to {
      transform: translate(-50%, -50%) scale(3);
      opacity: 0;
    }
  }

  position: absolute;
  top:${({y})=>y}px;
  left:${({x})=>x}px;

  width: 100px;
  height: 100px;
  background-color:#FFF;

  transform: translate(-50%, -50%) scale(0);
  animation: scale 0.5s ease-out;
  border-radius: 50%;
`