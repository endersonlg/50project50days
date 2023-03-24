import styled from "styled-components";

export const ContainerProject32 = styled.div`
 width: 100%;
 height: 100%;

 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;

 h1{
  font-size: 24px;
  margin-bottom: 24px;
 }
 
 >div{
    display: flex;
    flex-direction: column;
    gap: 16px;
 }
`

export const ToggleSwitch = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  label{
    position: relative;
    display: inline-block;
    width: 80px;
    height: 40px;

    input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    span {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #d0d0d0;
      -webkit-transition: .4s;
      transition: .4s;
      border-radius: 40px;
    }

    @keyframes GrowDuringProgress {
      0%{
        height: 34px;
        width: 34px;
      }
      50%{
        height: 38px;
        width: 38px;
      }
      100%{
        height: 34px;
        width: 34px;
      }
    }

    span:before {
      position: absolute;
      content: "";
      height: 34px;
      width: 34px;
      left: 3px;
      bottom: 3px;
      background-color: white;
      -webkit-transition: .4s;
      transition: .4s;
      border-radius: 50%;

    }

    input:focus + span:before{
      animation: GrowDuringProgress 0.2s linear forwards;
    }
    

    input:checked + span {
      background-color: #8e44ad;
    }

    input:focus + span {
      box-shadow: 0 0 1px #8e44ad;
    }

    input:checked + span:before {
      -webkit-transform: translateX(40px);
      -ms-transform: translateX(40px);
      transform: translateX(40px);
    }
  }
`