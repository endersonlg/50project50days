import styled, { css } from "styled-components";

export const ContainerProject25 = styled.div`
`

interface HeaderProps{
  theme:'dark'|'light'
}

export const Header = styled.header<HeaderProps>`
  position:sticky;
  top:0;
  width: 100%;
  background-color: #222;
  z-index: 3;

  transition: all 0.2s ease-in-out;
  
  nav{
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 24px;
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    transition: all 0.2s ease-in-out;

    ul{
      display:flex;
      gap:24px;

      a{
        text-decoration: none;

        color: #fff;
        transition: color 0.2s ease-in-out;

        &:hover{
          color:#c0392b;
        }
      }
    }
  }

  ${({theme})=>theme === 'light' && css`
    background: #fff; ;
    nav{
      padding:8px 24px;
      ul{
        a{
          color: #222;
        }
      }
    }
  `}
`

export const Welcome = styled.div`
  background-image: url('https://images.pexels.com/photos/450035/pexels-photo-450035.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
  width: 100%;
  height: calc(100vh - 77px);
  position: relative;
  z-index: 2;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-bottom: 24px;

  &:before{
    content: '';
    position:absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;

    background-color: rgba(0,0,0,0.5);
    z-index: -1;
  }

  h1{
    font-size: 48px;
    color: #fff;
    margin-bottom: 24px;
  }

  p{
    font-size: 24px;
    color: #fff;
  }
`

export const Content = styled.div`
  padding:0 48px 24px;

  >div{
    margin-bottom: 24px;

    h2{
      font-size: 24px;
      margin-bottom: 24px;;
    }

    p{
      color:#555;
      line-height: 30px;
      letter-spacing: 1.2px;
    }
  }
`