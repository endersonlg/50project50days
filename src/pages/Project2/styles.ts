import styled from 'styled-components'

export const ContainerProject2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  background: #f6f7fb;
`;

export const Progress = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;

  width: 350px;

  margin-bottom: 24px;

  &:after{
    content: "";

    position: absolute;
    top: calc(50% - 2px);

    height: 4px;
    width: 100%;

    background: #e0e0e0;
  }
`;

interface StepsProps {
  selected:boolean;
}

export const Steps = styled.div<StepsProps>`
  position: relative;
  width: 30px;
  height: 30px;
  background: #FFF;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 3px solid ${({selected})=>selected ? '#3498db' : '#e0e0e0'};
  border-radius: 50%;
  transition: ${({selected})=>selected && 'border-color 0.6s step-end'};

  color:#999;
  z-index: 2;



  &:not(:first-child):after{
      content: '';
      position: absolute;

      width:${({selected})=>selected ? '79px' : '0px'};
      height: 4px;

      top: calc(50% - 2px);
      left: -79px;

      height: 4px;
      background:  #3498db;
      transition:width 0.5s ease-in;
  }
`;

export const ContentButtons = styled.div`
  display: flex;
  gap:8px;
`;

interface ButtonProps {
  disabled: boolean;
}

export const Button = styled.button<ButtonProps>`
  border-radius: 4px;
  padding:8px 24px;
  background:${({disabled})=>disabled ?  '#e0e0e0' : '#3498db'};

  color: #fff;
  font-size: 12px;

  transition:background 0.5s ease-in;
`;