import { ImageResponse } from 'next/og'

export const alt = 'Smooth Swing — Pre-Owned Golf Equipment'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    <div
      style={{
        background: '#1c2e1a',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px',
        position: 'relative',
      }}
    >
      {/* Subtle texture overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 60% 40%, #2e4a2c 0%, #1c2e1a 70%)',
        }}
      />

      {/* Top label */}
      <div
        style={{
          color: '#7aaa6e',
          fontSize: 18,
          letterSpacing: '6px',
          textTransform: 'uppercase',
          marginBottom: 32,
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        Pre-Owned Golf Equipment
      </div>

      {/* Wordmark */}
      <div
        style={{
          color: '#f0efec',
          fontSize: 100,
          fontWeight: 900,
          letterSpacing: '-3px',
          lineHeight: 1,
          fontFamily: 'sans-serif',
          position: 'relative',
          marginBottom: 36,
        }}
      >
        Smooth Swing
      </div>

      {/* Divider */}
      <div
        style={{
          width: 64,
          height: 3,
          background: '#7aaa6e',
          borderRadius: 2,
          marginBottom: 36,
          position: 'relative',
        }}
      />

      {/* Tagline */}
      <div
        style={{
          color: '#c8c4bc',
          fontSize: 28,
          fontFamily: 'sans-serif',
          position: 'relative',
          letterSpacing: '0.5px',
        }}
      >
        Tour-quality clubs at real-world prices
      </div>
    </div>,
    { ...size }
  )
}
