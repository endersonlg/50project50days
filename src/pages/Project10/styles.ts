import styled from 'styled-components'

export const ContainerProject10 = styled.div`
  height: 100%;
  width: 100%;
  background: #686de0;

  padding: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    max-width: 800px;

    padding: 32px 24px;
    border-radius: 8px;

    background: #fff;
    box-shadow: 0 10px 20px rgb(0 0 0 / 10%), 0 6px 6px rgb(0 0 0 / 10%);

    h3 {
      opacity: 0.5;
      margin-bottom: 48px;
    }

    p {
      text-align: center;
      font-size: 32px;
      line-height: 40px;
      max-width: 600px;
      margin-bottom: 48px;
    }

    button {
      color: #fff;
      border-radius: 8px;

      background: #9f68e0;
      box-shadow: 0 5px 15px rgb(0 0 0 / 10%), 0 6px 6px rgb(0 0 0 / 10%);
      padding: 16px 12px;
    }
  }
`
