import { useState } from 'react'
import { ContainerProject44, Slider, Tooltip } from './styles'

export function Project44() {
  const [valueSlider, setValueSlider] = useState<number>(50)

  return (
    <ContainerProject44>
      <h1>Custom Range Slider</h1>
      <div>
        <Slider
          value={valueSlider}
          max={100}
          min={0}
          step={1}
          onMouseUp={(e) => {
            // setTooltipVisible(false)
            // changeNSteps(Number(e.target.value))
          }}
          // onMouseDown={() => setTooltipVisible(true)}
          onChange={(e) => setValueSlider(Number(e.target.value))}
          data-testid="input-slider-n-steps"
          data-cy="input-slider-n-steps"
        />
        <Tooltip value={valueSlider}>{valueSlider}</Tooltip>
      </div>
    </ContainerProject44>
  )
}
