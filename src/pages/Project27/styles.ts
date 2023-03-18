import styled, { css } from "styled-components";

export const ContainerProject27 = styled.div`
  position:relative;

  width:100%;
  height:100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rebeccapurple;

  >button{
    background-color: #FFF;
    color:rebeccapurple;
    font-weight: bold;
    padding:16px;
    border:0;
    border-radius: 6px;
    cursor: pointer;

    &:active{
      transform: scale(0.99);
    }
  }
`

interface ToastProps {
  type:'error'|'warning'|'success';
  index:number;
}

export const Toast = styled.div<ToastProps>`
  position: absolute;
  bottom:${({index})=>`${index * 66}px`};
  right:0;
  background-color:#FFF;
  border-radius: 6px;
  padding: 16px 32px;
  margin:8px;

  span{
    font-weight: 500;

    ${({type})=>{
      if(type==='success'){
        return css`
          color:green;
        `
      }

      if(type==='warning'){
        return css`
          color:orange;
        `
      }

      return css`
        color:red;
      `
    }}
  }
 
`