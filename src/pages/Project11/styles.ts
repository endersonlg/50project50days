import styled from "styled-components";

export const ContainerProject11 = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #e1e1e1;

  >div{
    display: flex;
    justify-content: space-between;
    gap:24px;
    width: 100%;
    max-width: 500px;

    >div{
      >p{
        color:#555;
        font-size: 14px;
        font-weight: 600;
        text-align: center;
        margin-bottom: 8px;
      }

      >div{
        min-width: 150px;
        padding:20px;
        
        border: 1px solid #999;
        background-color:#EEE;
        box-shadow: 1px 1px 3px rgb(0 0 0 / 10%);

        font-size: 20px;
        font-weight: bold;

        text-align: center;
      }
    }
  }
`