import React, { useEffect, useState } from 'react'
import { ContainerProject5 } from './styles'

export function Project5() {
  const [loadingPercentage, setLoadingPercentage] = useState(0)

  useEffect(() => {
    ;(async () => {
      if (loadingPercentage < 100) {
        await new Promise(() => {
          setTimeout(() => {
            setLoadingPercentage(loadingPercentage + 1)
          }, 10)
        })
      }
    })()
  }, [loadingPercentage])

  return (
    <ContainerProject5 loadingPercentage={loadingPercentage}>
      <div />
      <p>{loadingPercentage}%</p>
    </ContainerProject5>
  )
}
