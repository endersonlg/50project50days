import styled from 'styled-components'

export const ContainerProject37 = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: 48px;

  background: linear-gradient(to right, #d4d3dd, #efefbb);

  h1 {
    letter-spacing: 3px;
    text-align: center;
    margin-bottom: 36px;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 24px;
  }
`

const BackgroundByTypes = {
  fire: '#FDDFDF',
  grass: '#DEFDE0',
  electric: '#FCF7DE',
  water: '#DEF3FD',
  ground: '#f4e7da',
  rock: '#d5d5d4',
  fairy: '#fceaff',
  poison: '#98d7a5',
  bug: '#f8d5a3',
  dragon: '#97b3e6',
  psychic: '#eaeda1',
  flying: '#F5F5F5',
  fighting: '#E6E0D4',
  normal: '#F5F5F5',
} as const

interface CardProps {
  type: keyof typeof BackgroundByTypes
}

export const Card = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 160px;

  background-color: ${({ type }) => BackgroundByTypes[type]};
  padding: 24px;
  border-radius: 10px;
  box-shadow: 0 3px 15px rgba(100, 100, 100, 0.5);

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-color: white;
    margin-bottom: 24px;
  }

  span {
    background-color: rgba(0, 0, 0, 0.1);
    padding: 5px 10px;
    border-radius: 10px;
    width: 50px;
    margin-bottom: 12px;
  }

  h3 {
    margin-bottom: 8px;
  }
`
