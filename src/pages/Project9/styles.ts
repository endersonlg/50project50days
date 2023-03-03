import styled from "styled-components";

export const ContainerProject9 = styled.div`
  width: 100%;
  height: 100%;

  background: rgba(161,100,233);

  display: flex;
  justify-content: center;
  align-items: center;

  >div{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap:32px;

    >button{
      padding: 24px 48px;
      background: rebeccapurple;
      border-radius: 4px;
      font-size: 1.2rem;
      color: #fff;

      transition: color 0.2s ease-out;

      &:hover{
        filter: brightness(0.96);
      }
    }
  }
`;