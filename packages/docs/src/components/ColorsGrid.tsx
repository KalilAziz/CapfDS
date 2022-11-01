import { getContrast } from 'polished'

interface ColorsProps {
  colors: Record<string, string>
}

export const ColorsGrid = ({ colors }: ColorsProps) => {
  return Object.entries(colors).map(([colorName, colorValue]) => {
    return (
      <div
        key={colorName}
        style={{ backgroundColor: colorValue, padding: '2rem' }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'monospace',
            color: getContrast(colorValue, 'white') > 2 ? 'white' : 'black',
          }}
        >
          <strong>{colorName}</strong>
          <span>{colorValue}</span>
        </div>
      </div>
    )
  })
}
