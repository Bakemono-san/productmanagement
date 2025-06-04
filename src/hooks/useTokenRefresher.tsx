'use client'

import { useEffect } from 'react'

export function TokenRefresher() {
  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const res = await fetch('/api/refresh-token', {
          method: 'POST',
          credentials: 'include',
        })
        if (!res.ok) {
          console.error('Token refresh failed')
        } else {
          console.log('Token refreshed successfully')
        }
      } catch (err) {
        console.error('Token refresh error:', err)
      }
    }, 55 * 60 * 1000)

    return () => clearInterval(interval)
  }, [])

  return null
}
