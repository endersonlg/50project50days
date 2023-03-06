import styled from "styled-components";

export const ContainerProject17 = styled.div`
  header{
    display: flex;
    justify-content:flex-end;
    padding:16px;

    background-color: #373b69;
    
    input{
      background-color: transparent;
      border:2px solid #22254b;
      padding: 8px 16px;
      border-radius: 16px;

      color: #fff;
      outline: none;

      &:focus{
        background-color: #22254b;
      }

      transition: background 0.3s;
    }
  }

  main{
    width: 100%;
    min-height: 100%;
    padding: 24px 16px;
    display: flex;
    flex-wrap: wrap;
    gap:24px;
    background-color:#22254b;

    
    >div{
      position:relative;
      width: 300px;
      background-color: #373b69;
      box-shadow:0 4px 5px rgb(0 0 0 / 20%);
      border-radius: 8px;
      overflow: hidden;
      display: flex;
      flex-direction:column;
      
      img{
        max-width: 300px;
        max-height: 450px;
      }
      
      >div:nth-child(2){
        display: flex;
        flex:1;
        justify-content: space-between;
        align-items: center;
        gap:24px;
        padding:8px 16px;
        
        h3{
          color: #fff;
          line-height: 150%;
        }
        
        span{
          padding:8px;
          background-color: #22254b;
          border-radius: 8px;
          text-align: center;
          color:lightgreen;
          font-weight: bold;
          font-size: 16px;
        }
        
      }
      
      >div:nth-child(3){
        position:absolute;
        left:0;
        bottom:0;
        right:0;
        transform: translateY(101%);
        max-height:100%;
        padding:16px;
        background-color: #FFF;

        transition:transform 0.3s ease-in;
      }

      &:hover{
        >div:nth-child(3){
          max-height:100%;
          transform: translateY(0%);
        }
      }
    }
  }
`