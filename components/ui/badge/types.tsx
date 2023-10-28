import { badgeVariants } from './styles'
import type { VariantProps } from 'class-variance-authority'

export type BadgeVariantProps = VariantProps<typeof badgeVariants>

export type BadgeProps = JSX.IntrinsicElements['div'] & BadgeVariantProps
