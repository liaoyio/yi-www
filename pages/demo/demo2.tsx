import { useSearchParams } from 'next/navigation'
import React from 'react'

export const Demo = () => {
  const searchParams = useSearchParams()

  const name = searchParams.get('name')
  return <div>Demo2 {name}</div>
}

export default Demo
