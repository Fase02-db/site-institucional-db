import React, { useEffect, useState } from 'react'

const DelayRender: React.FC<{ delay: number; children: React.ReactNode }> = ({
  delay,
  children,
}) => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true)
    }, delay)
    return () => clearTimeout(timer)
  }, [delay])

  return loaded ? <>{children}</> : <div></div>
}

export default DelayRender
