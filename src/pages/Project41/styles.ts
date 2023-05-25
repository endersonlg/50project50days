import styled from "styled-components";

export const ContainerProject41 = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  >div{
    padding: 24px 4px;
    border: 3px solid black;
    border-radius: 8px;

    text-align: center;

    h2{
      font-weight: 500;
      font-size: 24px;
      margin-bottom: 16px;
    }

    p{
      margin-bottom: 36px;
    }

    div{
      display: flex;
      gap: 8px;

      margin-bottom: 24px;
    }

    small{
      display: block;
      margin:0 auto;
      max-width: 400px;
      
      padding:10px;
      border-radius: 6px;
      
      background-color: #eaeaea;
      color:#777;
      
      line-height: 20px;
    }
  }
`

interface InputNumberProps{
  hasValue: boolean;
}

export const InputNumber = styled.input.attrs({
  type:'number'
})<InputNumberProps>`
  width: 100px;
  height: 120px;

  font-size: 72px;
  text-align: center;

  border:1px solid ${({hasValue})=>hasValue ? '#3498db' : '#eee'};
  border-radius:6px;
  box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.25);

  /* Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type=number] {
    -moz-appearance: textfield;
  }
`