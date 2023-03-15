import styled from "styled-components";

export const ContainerProject24 = styled.div`
  height: 100%;
  width: 100%;
  background-color: #ecf0f1;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Card = styled.div`
  width: 350px;
  background-color: #FFF;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;

  >img{
    width: 350px;
    height: 200px;
  }
  >div{
    padding:24px;

    h3{
      margin-bottom: 8px;
    }

    >p{
      color:#777;
      margin-bottom: 16px;
    }
  }
`

export const CardLoading = styled.div`
  width: 350px;
  background-color: #FFF;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  overflow: hidden;

  >div:nth-child(2){
    padding:24px;
    display: flex;
    flex-direction: column;
    
    >div:first-child{
      margin-bottom: 8px;
    }
    >div:nth-child(2){
      margin-bottom: 4px;
    }
    >div:last-child{
      margin-top: 16px;
      display: flex;
      gap:12px;
      >div:first-child{
        border-radius: 50%;
      }
      >div:nth-child(2){
        flex:1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }
  }
`

export const Profile = styled.div`
  display: flex;
  gap:12px;

  img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  div{
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    span{
      font-size: 12px;
      color:#777;
    }
  }
`

interface SkeletonProps{
  width?:string;
  height?:string;
}

export const Skeleton = styled.div<SkeletonProps>`

 @keyframes shimer{
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }

  width:${({width})=>width??'100%'};
  height:${({height})=>height??'100%'};
  background-size: 400%, 400%;

  background-image:linear-gradient( to right, #f6f7f8 0%, #edeef1 10%, #f6f7f8 20%, #f6f7f8 100% );
  animation: shimer 1s linear infinite;
`