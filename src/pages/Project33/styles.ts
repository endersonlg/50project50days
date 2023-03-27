import styled from "styled-components";

export const ContainerProject33 = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #7bdaf3;
  padding: 48px 24px 24px;

  >button{
    position: fixed;
    top: 24px;
    right: 24px;

    display: flex;
    align-items: center;
    gap: 4px;
    background-color: #9ec862;
    padding:8px;
    border-radius: 6px;
    color: #fff;

    transition: filter .2s;
    

    &:hover{
      filter: brightness(0.96);
    }
  }

  >div{
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
  }
`

export const Note = styled.div`
  display: flex;
  flex-direction: column;
  
  width: 400px;
  height: 400px;
  box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.1);

  >div{
    width: 100%;
    padding: 8px;
    background-color: #9ec862;

    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap:8px;

    >button{
      color: #FFF;
      line-height: 0;
    }
  }

  textarea{
    flex:1;
    width: 100%;

    resize: none;

    border:0;
    padding: 24px;

    font-size: 24px;

    &:focus{
      outline: none;
    }
  }
`