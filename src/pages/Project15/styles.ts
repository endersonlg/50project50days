import styled from 'styled-components'

export const ContainerProject15 = styled.div`
  width: 100%;
  height: 100%;

  background-color: #8e44ad;

  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;

    width: 100%;
    max-width: 600px;

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;

      width: 200px;
      height: 200px;

      svg {
        color: #fff;
        margin-bottom: 24px;
      }

      h3 {
        font-size: 64px;
        color: #fff;
        font-weight: 500;

        margin-bottom: 8px;
      }

      span {
        color: #fff;
      }
    }
  }
`
