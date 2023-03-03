import styled from "styled-components";

export const ContainerProject16 = styled.div`
  width: 100%;
  height: 100%;

  background-color: #3494E4;
  display: flex;
  justify-content: center;
  padding:32px;

  >div{
    width: 100%;
    max-width: 600px;

    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
      color: #fff;
      margin-bottom: 16px;
    }

    h3{
      color: #fff;
      margin-bottom: 32px;
    }

    p{
      color: #fff;
      margin-bottom: 8px;
    }
  }
`

interface BigCupProps{
  quantity:number;
}

export const BigCup = styled.div<BigCupProps>`
  width: 150px;
  height: 350px;
  background-color: #FFF;
  overflow: hidden;

  border: 3px solid #144fc6;
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;

  display: flex;
  flex-direction: column;

  margin-bottom: 32px;

  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    overflow: hidden;

    transition: height 0.5s linear;
  }
  

  div:first-child {
    background-color: #FFF;
    height:${({quantity})=>(100/8)*(8-quantity)}%;
    span{
      color:#144fc6;
      font-size:24px;
      font-weight: 600;
    }
    small{
      color:#144fc6;
    }
  }

  div:last-child {
    height:${({quantity})=>(100/8)*quantity}%;
    background-color: #6ab3f8;

    span{
      color:#144fc6;
      font-size:32px;
      font-weight: 600;
    }
  }
`;

export const ContentSmallCup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap:16px;

  max-width:300px;
`;

interface SmallCupProps{
  fill:boolean;
}

export const SmallCup = styled.button<SmallCupProps>`
  width: 50px;
  height: 100px;
  background-color:${({fill})=>fill?'#6ab3f8':'#fff'};
  
  border: 3px solid #144fc6;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;

  display: flex;
  align-items: center;

  text-align: center;

  color:${({fill})=>fill?'#fff':'#144fc6'};

  transition:all 0.5s ease-in-out;
`