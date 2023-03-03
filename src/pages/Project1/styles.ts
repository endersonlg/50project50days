import styled from 'styled-components'



export const ContainerProject1 = styled.div`
  display: flex;
  align-items: center;
  gap:24px;

  width:90vw;
  height: 100%;
  margin: 0 auto;

  overflow: hidden;
  
`

interface CardProps {
  selected: boolean;
  backgroundURL: string;
}

export const Card = styled.div<CardProps>`
  position: relative;
  flex: ${({selected })=>selected ? 5 : 0.5};
  height: 80vh;
  border-radius: 50px;
  
  background-image:${({backgroundURL})=> `url(${backgroundURL})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
  cursor: pointer;

  transition:flex 0.7s ease-in;

  h3{
    position:absolute;
    bottom:24px;
    left:24px;

    color: #fff;
    opacity:${({selected })=>selected ? 1 : 0};
    transition:opacity 0.7s ease-in;
  }
`

