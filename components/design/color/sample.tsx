import { useState } from 'react'

import { Tooltip, useToast } from '@components/ui'
import clsx from 'clsx'
import { Check, Copy } from 'lucide-react'

const ColorSample = ({ scale, index, color }) => {
  const { toast } = useToast()
  const [copied, setCopied] = useState(false)
  const [hovering, setHovering] = useState(false)
  return (
    <Tooltip content={`${index + 1}: ${color}`}>
      <button
        id={`${scale}-${index}`}
        className={clsx(
          'flex h-12 w-full items-center justify-center border border-gray-7 hover:border-gray-8 focus-visible:z-10 focus-visible:rounded focus-visible:border-l focus-visible:outline-none focus-visible:ring focus-visible:ring-blue-9 active:brightness-110',
          index > 0 ? 'border-l-0' : '',
          index === 0 ? 'rounded-l' : index === 11 ? 'rounded-r' : ''
        )}
        style={{
          transitionProperty: 'border-color, filter, color',
          transitionDuration: '150ms',
          background: color
        }}
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(color)
            toast({
              title: 'Copied to clipboard',
              description: `${scale}${index + 1} - ${color}`,
              intent: 'success'
            })
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
          } catch (err) {
            toast({ title: 'Failed to copy to clipboard', description: color, intent: 'fail' })
          }
        }}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft' && index > 0) {
            document.getElementById(`${scale}-${index - 1}`)?.focus()
          }
          if (e.key === 'ArrowRight') {
            document.getElementById(`${scale}-${index + 1}`)?.focus()
          }
        }}
        aria-label={`Copy "${color}" to clipboard`}
        type="button"
        tabIndex={0}
      >
        {!copied && hovering ? (
          <Copy
            className={clsx(
              'h-4 w-4 duration-150 animate-in fade-in',
              index > 7 ? 'text-gray-1' : 'text-gray-12'
            )}
          />
        ) : null}
        {copied ? (
          <Check
            className={clsx(
              'h-4 w-4 duration-300 animate-in fade-in zoom-in',
              index > 7 ? 'text-gray-1' : 'text-gray-12'
            )}
          />
        ) : null}
      </button>
    </Tooltip>
  )
}

export default ColorSample
