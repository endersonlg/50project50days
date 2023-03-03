import styled from 'styled-components'

interface ContainerProjectProps{
  isOpen: boolean;
}

export const ContainerProject14 = styled.div<ContainerProjectProps>`
  width: 100%;
  height: 100%;

  background:linear-gradient( to bottom, #eafbff 0%, #eafbff 50%, #5290f9 50%, #5290f9 100% );

  display: flex;
  align-items: center;
  justify-content: center;

  
  >div{
    display: flex;
    align-items: center;
    background: #FFF;
    box-shadow: 0 2px 5px rgb(0 0 0 / 30%);
    border-radius: 8px;
    padding:24px;
    
   
    
    nav{
      width: ${({isOpen})=>isOpen ? '235px':'0px'};
      transition: width 1s linear;
      overflow: hidden;
      ul{
        display: flex;
        gap:16px;

        a{
          color:#222;
        }
      }
    }
  }
`

interface ButtonProps{
  isOpen: boolean;
}

export const Button = styled.button<ButtonProps>`
  position: relative;
  height: 30px;
  width: 30px;

  outline: none;

  div{
    position: absolute;
    display: inline-block;
    width:20px;
    height: 2px;
    background:#5290f9;
    transition: all 1s linear;

    &:first-child{
      top: ${({isOpen})=>isOpen ?  '15.5px':'10px' };
      left:5px;
      transform: ${({isOpen})=>isOpen ? 'rotate(45deg)' : 'rotate(-720deg)'};
    }

    &:last-child{
      top: ${({isOpen})=>isOpen ?  '15.5px':'20px' };
      left:5px;
      transform: ${({isOpen})=>isOpen ? 'rotate(-45deg)' : 'rotate(-720deg)'};
    }
  }
`