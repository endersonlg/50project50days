import styled from 'styled-components'

export const ContainerProject39 = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  form {
    z-index: 10;
    padding: 40px;
    background-color: white;

    border-radius: 8px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);

    h1 {
      font-weight: 400;
      margin-bottom: 12px;
      text-align: center;
    }

    span {
      display: inline-block;
      font-size: 16px;
      margin-bottom: 24px;
      text-align: center;
    }

    button {
      width: 100%;
      color: white;
      padding: 12px;
      border-radius: 4px;
      background-color: black;
    }
  }
`

interface BackgroundImageProps {
  passwordStrength: number
}

export const BackgroundImage = styled.div<BackgroundImageProps>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: url('https://images.unsplash.com/photo-1556745757-8d76bdb6984b')
    no-repeat center center/cover;

  filter: ${({ passwordStrength }) => `blur(${10 - passwordStrength}px)`};
`

export const ContentInput = styled.div`
  margin-left: auto;
  label {
    display: block;
    margin-bottom: 8px;
  }

  input {
    width: 100%;
    padding: 12px;
    border: 1px solid #e2e8f0;
    border-radius: 4px;
    margin-bottom: 24px;

    &:focus {
      outline: none;
    }
  }
`
