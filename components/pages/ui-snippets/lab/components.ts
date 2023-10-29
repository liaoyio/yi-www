import BadgeAnimatedGradientBorder from './badge/BadgeAnimatedGradientBorder'
import BadgeShine from './badge/BadgeShine'
import BadgeTextGradient from './badge/BadgeTextGradient'
import ButtonBackgroundShine from './button/ButtonBackgroundShine'
import ButtonBackgroundSpotlight from './button/ButtonBackgroundSpotlight'
import ButtonGradient from './button/ButtonGradient'
import ButtonHoverGradient from './button/ButtonHoverGradient'
import ButtonRotatingBackgroundGradient from './button/ButtonRotatingBackgroundGradient'
import ButtonShadowGradient from './button/ButtonShadowGradient'
import CardAnimatedBorderGradient from './card/CardAnimatedBorderGradient'
import CardPulseBorder from './card/CardPulseBorder'
import CardSpotlight from './card/CardSpotlight'
import CardTilt from './card/CardTilt'
import InputGradientBorder from './input/InputGradientBorder'
import InputPulseBorder from './input/InputPulseBorder'
import InputSpotlightBorder from './input/InputSpotlightBorder'
import TextAnimatedGradient from './text/TextAnimatedGradient'
import TextGradient from './text/TextGradient'
import TextShine from './text/TextShine'

export const TWCONFIG = {
  ['text-gradient']: {
    animation: {
      'text-gradient': 'text-gradient 1.5s linear infinite'
    },
    keyframes: {
      'text-gradient': {
        to: {
          backgroundPosition: '200% center'
        }
      }
    }
  },
  ['background-shine']: {
    animation: {
      'background-shine': 'background-shine 2s linear infinite'
    },
    keyframes: {
      'background-shine': {
        from: { backgroundPosition: '0 0' },
        to: { backgroundPosition: '-200% 0' }
      }
    }
  },
  ['pulse-slow']: {
    animation: {
      'pulse-slow': 'pulse 6s infinite cubic-bezier(0.4, 0, 0.6, 1)'
    }
  },
  ['border-width']: {
    animation: {
      'border-width': 'border-width 3s infinite alternate'
    },
    keyframes: {
      'border-width': {
        from: { width: '10px', opacity: '0' },
        to: { width: '100px', opacity: '1' }
      }
    }
  }
}

export const COMPONENTS = [
  {
    name: 'Text Gradient',
    component: TextGradient,
    slug: 'text-gradient',
    type: 'text'
  },
  {
    name: 'Text Animated Gradient',
    component: TextAnimatedGradient,
    slug: 'text-animated-gradient',
    type: 'text',
    twConfig: TWCONFIG['text-gradient']
  },
  {
    name: 'Text Shine',
    component: TextShine,
    slug: 'text-shine',
    type: 'text',
    twConfig: TWCONFIG['background-shine']
  },
  {
    name: 'Button Background Shine',
    component: ButtonBackgroundShine,
    slug: 'button-background-shine',
    type: 'button',
    twConfig: TWCONFIG['background-shine']
  },
  {
    name: 'Button Gradient',
    component: ButtonGradient,
    slug: 'button-gradient',
    type: 'button'
  },
  {
    name: 'Button Hover Gradient',
    component: ButtonHoverGradient,
    slug: 'button-hover-gradient',
    type: 'button'
  },
  {
    name: 'Button Background Spotlight',
    component: ButtonBackgroundSpotlight,
    slug: 'button-background-spotlight',
    type: 'button'
  },
  {
    name: 'Button Rotating Background Gradient',
    component: ButtonRotatingBackgroundGradient,
    slug: 'button-rotating-background-gradient',
    type: 'button'
  },
  {
    name: 'Button Shadow Gradient',
    component: ButtonShadowGradient,
    slug: 'button-shadow-gradient',
    type: 'button'
  },
  {
    name: 'Input Gradient Border',
    component: InputGradientBorder,
    slug: 'input-gradient-border',
    type: 'input'
  },
  {
    name: 'Input Spotlight Border',
    component: InputSpotlightBorder,
    slug: 'input-spotlight-border',
    type: 'input'
  },
  {
    name: 'Input Pulse Border',
    component: InputPulseBorder,
    slug: 'input-pulse-border',
    type: 'input',
    twConfig: TWCONFIG['border-width']
  },
  {
    name: 'Badge Animated Gradient Border',
    component: BadgeAnimatedGradientBorder,
    slug: 'badge-animated-gradient-border',
    type: 'badge'
  },
  {
    name: 'Badge Shine',
    component: BadgeShine,
    slug: 'badge-shine',
    type: 'badge',
    twConfig: TWCONFIG['background-shine']
  },
  {
    name: 'Badge Text Gradient',
    component: BadgeTextGradient,
    slug: 'badge-text-gradient',
    type: 'badge'
  },
  {
    name: 'Card Animated Border Gradient',
    component: CardAnimatedBorderGradient,
    slug: 'card-animated-border-gradient',
    type: 'card'
  },
  {
    name: 'Card Spotlight',
    component: CardSpotlight,
    slug: 'card-spotlight',
    type: 'card'
  },
  {
    name: 'Card Pulse Border',
    component: CardPulseBorder,
    slug: 'card-pulse-border',
    type: 'card',
    twConfig: TWCONFIG['border-width']
  },
  {
    name: 'Card Tilt',
    component: CardTilt,
    slug: 'card-tilt',
    type: 'card'
  }
]
