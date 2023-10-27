import { iconButtonVariants } from './styles'
import type { VariantProps } from 'class-variance-authority'

export type IconButtonVariantProps = VariantProps<typeof iconButtonVariants>

export type IconButtonProps = JSX.IntrinsicElements['button'] &
  IconButtonVariantProps & {
    href?: string
    newTab?: boolean
  }
