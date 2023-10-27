/** Nextjs 13.5.6 使用 Radix UI的Tooltip组件报错:
 *  TypeError: (0 , react__WEBPACK_IMPORTED_MODULE_1__.createContext) is not a function
 *  要使用 React.Context ， 需要在文件顶部添加 "use client"; 指令。
 *  参考 🔗: https://stackoverflow.com/questions/74340466/typeerror-react-createcontext-is-not-a-function-with-next-js-13-and-radix-ui
 */
import { type ForwardedRef, forwardRef } from 'react'

import { tooltipArrowVariants, tooltipVariants } from './styles'
import type { TooltipProps } from './types'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

const Tooltip = forwardRef(
  (
    {
      className,
      sideOffset = 4,
      content,
      inverted = true,
      hasArrow = true,
      noDelay = false,
      children,
      ...rest
    }: TooltipProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => (
    <TooltipPrimitive.Provider delayDuration={noDelay ? 0 : 500}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            ref={ref}
            sideOffset={sideOffset}
            className={twMerge(clsx(tooltipVariants({ inverted }), className))}
            {...rest}
          >
            {hasArrow ? (
              <TooltipPrimitive.Arrow
                className={tooltipArrowVariants({ inverted })}
                width={8}
                height={4}
              />
            ) : null}
            {content}
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
)
Tooltip.displayName = 'Tooltip'

export default Tooltip
