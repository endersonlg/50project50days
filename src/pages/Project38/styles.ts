import styled from "styled-components";

export const ContainerProject38 = styled.div`
  background-color:rgba(155, 89, 182, 0.7);
  height:100%;
  width:100%;

  display:flex;
  align-items:center;
  justify-content:center;
`

export const Phone = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:flex-end;
  position:relative;

  width:340px;
  height:600px;
  background-color:#FFF;

  border: 3px solid #eee;
  border-radius: 15px;

  overflow: hidden;
`

interface ImageProps{
  isSelected: boolean;
}

export const Image = styled.img<ImageProps>`
  position:absolute;
  top:0;
  
  width: 100%;
  height:calc(100% - 70px);
  
  object-fit: cover;

  opacity:${({isSelected})=>isSelected ? 1 : 0};

  transition:opacity 0.5s ease-in-out;
`

export const Navigation = styled.nav`
  padding:12px;

  ul{
    display: flex;
    justify-content:space-around;

    button{
      color:#777;
      transition:color 0.2s ease-in-out;

      svg{
        margin-bottom:4px;
      }

      &:hover{
        color:#8e44ad;
      }

      span{
        font-size:12px;
        display: block;
      }

    }

  }

`