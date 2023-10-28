import type { ReactNode } from 'react'

import { buttonVariants } from './styles'
import type { VariantProps } from 'class-variance-authority'

export type ButtonVariantProps = VariantProps<typeof buttonVariants>

export type ButtonProps = JSX.IntrinsicElements['button'] &
  ButtonVariantProps & {
    href?: string
    leftIcon?: ReactNode
    rightIcon?: ReactNode
    newTab?: boolean
  }
