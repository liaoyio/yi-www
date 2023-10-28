import { useMemo } from 'react'

import ColorSample from './sample'

const ColorScale = ({ scale }) => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const radixColors = require('@radix-ui/colors')
  const lightColors = useMemo(() => Object.entries(radixColors[scale]), [radixColors, scale])
  const darkColors = useMemo(
    () => Object.entries(radixColors[`${scale}Dark`]),
    [radixColors, scale]
  )
  return (
    <>
      <div className="flex space-x-0 py-4 dark:hidden">
        {lightColors.map((color, index) => (
          <ColorSample key={color} scale={scale} index={index} color={color[1]} />
        ))}
      </div>
      <div className="hidden space-x-0 py-4 dark:flex">
        {darkColors.map((color, index) => (
          <ColorSample key={color} scale={`${scale}Dark`} index={index} color={color[1]} />
        ))}
      </div>
    </>
  )
}

export default ColorScale
