'use client'

import { useState } from 'react'

import { Check, Copy } from 'lucide-react'

const CopyCode = ({ code }) => {
  const [hasCheckIcon, setHasCheckIcon] = useState(false)

  const onCopy = () => {
    navigator.clipboard.writeText(code)
    setHasCheckIcon(true)

    setTimeout(() => {
      setHasCheckIcon(false)
    }, 1000)
  }

  return (
    <div
      className="cursor-pointer rounded-md border border-neutral-900 bg-neutral-800 p-2 transition hover:bg-neutral-700"
      onClick={onCopy}
    >
      {hasCheckIcon ? (
        <Check className="h-4 w-4 text-white" />
      ) : (
        <Copy className="h-4 w-4 text-white" />
      )}
    </div>
  )
}

export default CopyCode
