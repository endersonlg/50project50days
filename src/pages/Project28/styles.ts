import styled from "styled-components";

export const ContainerProject28 = styled.div`
  width:100%;
  height:100%;

  background-color:#2a2a72;
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

  form{
    width:100%;
    max-width: 700px;
    padding:24px;

    input{
      width:100%;
      background-color: #4c2885;
      border:0;
      padding:16px;
      border-radius:8px;
      font-size:16px;
      color:#FFF;

      &:focus{
        outline: none;
      }
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  gap:24px;
  padding:48px;
  margin:0 32px;
  background-color:#4c2885;
  border-radius: 24px;

  img{
    width: 150px;
    height: 150px;

    border-radius: 50%;
    border:10px solid #2a2a72;
  }

  >div{
    h2{
      color:#FFF;
      margin-bottom: 16px;
    }
    p{
      color: #fff;
      margin-bottom: 16px;
    }

    ul{
      display: flex;
      justify-content: space-between;
      margin-bottom: 16px;

      span{
        color: #fff;
        
        strong{
          margin-left: 4px;
        }
      }
    }

    >div{
      display: flex;
      flex-wrap: wrap;
      gap:8px;

      a{
        background-color: #212a72;
        text-decoration: none;
        color: #fff;
        padding:4px 8px;
      }
    }
  }
`
