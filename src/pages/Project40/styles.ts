import styled from 'styled-components'

export const ContainerProject40 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 2rem;

  button {
    background-color: #f9ca24;
    color: white;
    border: 0;
    border-radius: 3px;
    font-size: 16px;
    padding: 12px 20px;
    letter-spacing: 1px;
    box-shadow: 0 3px rgba(249, 202, 36, 0.5);

    margin-bottom: 72px;

    transition: filter 0.2s ease;

    &:hover {
      filter: brightness(0.98);
    }
  }
`

interface ContentGifProps {
  isJoin: boolean
}

export const ContentGif = styled.div<ContentGifProps>`
  width: 600px;

  display: flex;
  flex-wrap: wrap;
  gap: ${({ isJoin }) => (isJoin ? '24px' : 0)};

  transition: gap 0.5s ease;
`

interface PieceOfGifProps {
  position: string
  isJoin: boolean
}

export const PieceOfGif = styled.div<PieceOfGifProps>`
  position: relative;
  height: 125px;
  width: 125px;

  background-image: url('https://media.giphy.com/media/EZqwsBSPlvSda/giphy.gif');
  background-position: ${({ position }) => position};
  background-size: 500px 500px;
  background-repeat: no-repeat;

  transform: ${({ isJoin }) => (isJoin ? 'rotate(360deg)' : 'rotate(0deg)')};

  transition: transform 0.5s ease;

  &:before {
    content: '';
    position: absolute;
    right: -15px;
    top: 8px;

    width: 15px;
    height: 125px;
    background-color: #f6e58d;
    transform: skewY(45deg);
  }

  &:after {
    content: '';
    position: absolute;
    left: 8px;
    bottom: -15px;

    width: 125px;
    height: 15px;
    background-color: #f9ca24;
    transform: skewX(45deg);
  }
`
