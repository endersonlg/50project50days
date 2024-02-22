import styled from 'styled-components'

export const ContainerProject46 = styled.div`
  height: 100%;
  background: linear-gradient(315deg, #b8c6db 0%, #f5f7fa 100%);

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Question = styled.div`
  background: white;

  border-radius: 12px;
  box-shadow: 0 0 10px 2px rgba(100, 100, 100, 0.1);
  width: 600px;

  overflow: hidden;

  div {
    padding: 64px;

    h2 {
      text-align: center;
      margin-bottom: 48px;
    }

    ul {
      li {
        font-size: 20px;
        margin-bottom: 16px;

        label {
          cursor: pointer;
          margin-left: 4px;
        }
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`

export const Button = styled.button`
  padding: 21px;
  font-size: 18px;
  width: 100%;
  background: #8e44ad;

  color: white;

  &:hover {
    filter: brightness(0.95);
  }
`

export const Conclusion = styled.div`
  background: white;

  border-radius: 12px;
  box-shadow: 0 0 10px 2px rgba(100, 100, 100, 0.1);
  width: 600px;

  overflow: hidden;

  div {
    padding: 16px;

    h2 {
      text-align: center;
    }
  }
`
