import styled from 'styled-components'

interface ContainerProject5Props {
  loadingPercentage: number
}

export const ContainerProject5 = styled.div<ContainerProject5Props>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  > div {
    position: absolute;
    top: 0px;
    left: 0px;

    width: 100vw;
    height: 100vh;

    background-image: url('https://images.unsplash.com/photo-1576161787924-01bb08dad4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2104&q=80');
    filter: ${({ loadingPercentage }) =>
      `blur(${10 - loadingPercentage * 0.1}px)`};
  }

  p {
    font-size: 48px;
    color: #fff;
    opacity: ${({ loadingPercentage }) => `${1 - loadingPercentage * 0.01}`};
  }
`

export const Background = styled.div``
