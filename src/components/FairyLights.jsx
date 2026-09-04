const colorSet = ['#C59B27', '#F5CE5E', '#FFB4A3', '#A27814', '#FFDAD2', '#E5C158']

function buildLights(count, seed = 7) {
  const lights = []
  const unit = 100 / count
  for (let i = 0; i < count; i++) {
    const idx = i * 2 + 1
    const sway = Math.sin((idx + seed) * 0.9) * 10
    lights.push({
      left: idx * unit - unit / 2,
      dangle: Math.abs(sway) + 6,
      color: colorSet[(idx + seed * 2) % colorSet.length],
      duration: 4.5 + ((idx + seed) % 6) * 0.7,
      delay: -((idx + seed) % 10) * 0.35,
      radius: 3 + (i % 3),
    })
  }
  return lights
}

const lights = buildLights(22)

export default function FairyLights() {
  return (
    <div className="absolute inset-x-0 top-0 h-40 pointer-events-none -z-10 overflow-visible" aria-hidden="true">
      {lights.map((light, i) => (
        <svg
          key={i}
          className="absolute overflow-visible"
          style={{
            left: `${light.left}%`,
            top: '0',
            filter: 'drop-shadow(0 0 3px rgba(255,220,160,0.55))',
          }}
          width="1"
          height={`${light.dangle}px`}
          viewBox="0 0 1 60"
          preserveAspectRatio="none"
        >
          <line x1="0.5" y1="0" x2="0.5" y2="58" stroke={light.color} strokeWidth="0.6" opacity="0.35" />
          <circle
            cx="0.5"
            cy="57"
            r={light.radius}
            fill={light.color}
            style={{ animation: `fairy-twinkle ${light.duration}s ease-in-out ${light.delay}s infinite` }}
          />
        </svg>
      ))}

      <style>
        {`
          @keyframes fairy-twinkle {
            0%, 100% { opacity: 0.2; }
            50% { opacity: 1; }
          }
        `}
      </style>
    </div>
  )
}