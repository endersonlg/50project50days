import styled from 'styled-components'

export const ContainerProject12 = styled.div`
  background-color: #f0f0f0;
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding:48px 32px;

  h1{
    margin-bottom: 32px;
  }
`;

interface CardProps{
  isOpen?:boolean;
}

export const Card = styled.div<CardProps>`
  position: relative;

  width: 100%;
  max-width: 600px;

  padding:24px;

  background-color: ${({isOpen})=>isOpen ? '#fff' : 'transparent'};
  box-shadow: ${({isOpen})=>isOpen&&'0 3px 6px rgb(0 0 0 / 10%), 0 3px 6px rgb(0 0 0 / 10%)'};

  border:1px solid #9fa4a8;
  border-radius: 8px;
  margin-bottom: 24px;


  h3{
    margin-bottom: ${({isOpen})=>isOpen&&'32px'};
  }


  &:last-child{
    margin-bottom: 0;
  }

  p{
    display: ${({isOpen})=>isOpen ? 'unset' : 'none'};
  }

  button{
    position: absolute;
    top:24px;
    right: 24px;
    color:${({isOpen})=>isOpen?'#9fa4a8':'#000'};
  }
`