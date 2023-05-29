import styled from 'styled-components'

export const ContainerProject42 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  border-radius: 6px;
  width: 300px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`

export const Form = styled.form`
  padding: 24px 16px;
  background-color: #3e57db;
  color: #fff;

  h3 {
    font-size: 16px;
    margin-bottom: 8px;
  }

  p {
    font-size: 12px;
    opacity: 0.8;
    margin-bottom: 24px;
  }

  input {
    width: 100%;
    border-radius: 99999px;
    border: 0;
    background-color: rgba(0, 0, 0, 0.3);
    padding: 10px;
    color: #fff;

    &:focus {
      outline: none;
    }
  }
`

export const List = styled.ul`
  height: 400px;
  overflow-y: auto;

  li {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 16px 24px;
    border-bottom: 1px solid #eee;

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }

    div {
      strong {
        display: block;
        margin-bottom: 8px;
      }

      small {
        font-size: 12px;
        color: #333;
      }
    }
  }
`
