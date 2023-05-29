import styled from 'styled-components'

export const ContainerProject13 = styled.div`
  width: 100%;
  height: 100%;
  background-color: #2b88f0;

  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 600px;

    h3 {
      text-align: center;
      margin-bottom: 8px;
    }

    textarea {
      width: 100%;
      max-width: 600px;
      min-width: 300px;
      min-height: 100px;
      height: 200px;
      max-height: 600px;
      margin-bottom: 16px;
      padding: 12px;
    }

    > div {
      width: 100%;

      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      gap: 8px;

      span {
      }
    }
  }
`

interface OptionProps {
  selected: boolean
}

export const Option = styled.span<OptionProps>`
  padding: 12px 24px;
  background-color: ${({ selected }) => (selected ? '#273c75' : '#f0932b')};
  border-radius: 24px;
  color: #fff;
  font-size: 14px;
`
