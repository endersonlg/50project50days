import styled from "styled-components";

export const ContainerProject30 = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  display:flex;
  align-items: center;
  justify-content: center;

  background-color: darksalmon;

  @keyframes typing {
    from { max-width: 0 }
    to { max-width: 100% }
  }

  @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: orange; }
}

  >span{
    /* overflow: hidden;
    max-width: 0px;
    white-space: nowrap; */

    font-size: 32px;
    font-weight: 600;
/* 
    animation: typing 3.5s steps(40, end) infinite,blink-caret .75s step-end infinite;
    letter-spacing: .15em; */
    /* animation-duration: 1.5s;
    animation-timing-function: ;
    animation-fill-mode: ; */
  }


  >div{
    position: absolute;
    bottom:16px;

    padding:10px 20px;

    display: flex;
    align-items: center;
    gap:8px;

    background-color: rgba(0,0,0,0.1);

    label{
      font-size:18px;
    }

    input{
      width:50px;
      padding:5px;
      font-size: 18px;
      background-color: darksalmon;
      border:0;
      text-align:center;
      border-radius: 4px;

      &:focus{
        outline: 0;
      }
    }
  }
`