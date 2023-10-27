import type { ComponentPropsWithoutRef, ReactNode } from 'react'

import { tooltipVariants } from './styles'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import type { VariantProps } from 'class-variance-authority'

type TooltipVariantProps = VariantProps<typeof tooltipVariants>

export type TooltipProps = ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> &
  TooltipVariantProps & {
    content: ReactNode
    hasArrow?: boolean
    noDelay?: boolean
  }
