import { useCallback, useEffect, useState } from 'react'
import { Carrossel, ContainerProject35, ContentButtons, Image } from './styles'

const image1 =
  'https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1458&q=80'
const image2 =
  'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'
const image3 =
  'https://images.unsplash.com/photo-1599423300746-b62533397364?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'
const image4 =
  'https://images.unsplash.com/photo-1599561046251-bfb9465b4c44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1492&q=80'

export function Project35() {
  const [showImage, setShowImage] = useState(0)

  const handleNext = useCallback(() => {
    setShowImage((state) => {
      if (state === 3) {
        return 0
      }
      return state + 1
    })
  }, [])

  useEffect(() => {
    const id = setInterval(handleNext, 3000)

    return () => clearInterval(id)
  }, [handleNext])

  const handlePrev = useCallback(() => {
    setShowImage((state) => {
      if (state === 0) {
        return 3
      }
      return state - 1
    })
  }, [])

  return (
    <ContainerProject35>
      <Carrossel>
        <Image src={image1} order={0 - showImage} alt="" />
        <Image src={image2} order={1 - showImage} alt="" />
        <Image src={image3} order={2 - showImage} alt="" />
        <Image src={image4} order={3 - showImage} alt="" />
      </Carrossel>
      <ContentButtons>
        <button type="button" onClick={handlePrev}>
          Prev
        </button>
        <button type="button" onClick={handleNext}>
          Next
        </button>
      </ContentButtons>
    </ContainerProject35>
  )
}
