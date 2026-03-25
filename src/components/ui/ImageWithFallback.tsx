'use client'
import Image from 'next/image'
import { useState } from 'react'

interface Props {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  className?: string
  fallbackColor?: string
  fallbackLabel?: string
  priority?: boolean
  loading?: 'lazy' | 'eager'
  sizes?: string
  style?: React.CSSProperties
}

export default function ImageWithFallback({
  src, alt, width, height, fill, className, fallbackColor = '#e8e6e0',
  fallbackLabel, priority, loading, sizes, style,
}: Props) {
  const [error, setError] = useState(false)

  if (error || !src) {
    return (
      <div
        className={className}
        style={{
          background: fallbackColor,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: fill ? '100%' : width,
          height: fill ? '100%' : height,
          ...style,
        }}
      >
        <span style={{ font: '11px monospace', color: 'rgba(0,0,0,0.3)', textAlign: 'center', padding: '8px' }}>
          {fallbackLabel ?? src.split('/').pop()}
        </span>
      </div>
    )
  }

  if (fill) {
    return (
      <Image
        src={src} alt={alt} fill className={className}
        onError={() => setError(true)}
        priority={priority} loading={loading} sizes={sizes ?? '100vw'} style={style}
      />
    )
  }

  return (
    <Image
      src={src} alt={alt} width={width ?? 800} height={height ?? 600}
      className={className} onError={() => setError(true)}
      priority={priority} loading={loading} sizes={sizes} style={style}
    />
  )
}
