import styled from "styled-components";

interface ContainerProject18Props{
  image:string;
}

export const ContainerProject18 = styled.div<ContainerProject18Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  width:100vw;
  height: 100vh;
  background-image: ${({image})=>`url(${image})`};
  background-position:center;
  background-repeat:no-repeat;
  background-size:cover;

  
  transition: background-image 0.3s ease-in;

  &:before{
    content:"";
    position:absolute;
    top:0;
    left:0;
    width:100vw;
    height: 100vh;

    background-color:rgba(0,0,0,0.5);
    z-index:1;
  }

  >div{
    position:relative;
    height:70vh;
    width:70vw;
    overflow:hidden;
    box-shadow:0 3px 6px rgb(0 0 0 / 16%), 0 3px 6px rgb(0 0 0 / 23%);
  }

  button{
    border-color:orange;
    border-top:2px solid orange;
    border-bottom:2px solid orange;
    color: #fff;
    padding:8px;
    &:first-child{
      border-left:2px solid orange;
    }
    &:last-child{
      border-right:2px solid orange;
    }
    z-index:1;
  }
`;

interface IMGProps{
  selected: boolean;
  src: string;
}

export const IMG = styled.div<IMGProps>`
  position:absolute;
  top:-15vh;
  left:-15vw;
  width:100vw;
  height: 100vh;
  z-index:2;

  opacity: ${({selected})=>selected ? 1 : 0};
  background-position:center;
  background-repeat:no-repeat;
  background-size:cover;
  background-image: ${({src})=>`url(${src})`};

  transition: all 0.3s ease-in;
`