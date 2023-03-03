import styled from "styled-components";

export const ContainerProject4 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #7d5fff, #7158e2);
`;

interface ContentInputProps{
  isOpen: boolean;
}

export const ContentInput = styled.div<ContentInputProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;

  border:1px solid #333;
  border-radius: 4px;

  transition: width 0.2s ease-in;

  input{
    width:${({isOpen})=>isOpen ? '250px' : '0' };
    height: 48px;

    border:0;
    outline: none;

    transition: all 0.5s ease-in;

    padding:${({isOpen})=>isOpen ? '16px' : '0' };
  }

  button{
    height: 50px;
    width: 50px;
  }
`;