import type { ReactNode } from 'react'

import { Framer, Lucide, RadixUI, Shadcn, TailwindCSS, VercelDesign } from '@components/icons/lib'
import { Github } from 'lucide-react'

type Lib = {
  name: string
  description: string
  symbol: ReactNode
  href: string
}

export const libList: Lib[] = [
  {
    name: 'Tailwind CSS',
    description: '实用优先的 CSS 框架',
    symbol: <TailwindCSS />,
    href: 'https://tailwindcss.com'
  },
  {
    name: 'Radix UI Primitives',
    description: '自定义优先的开源 UI 组件',
    symbol: <RadixUI />,
    href: 'https://www.radix-ui.com/docs/primitives/overview/introduction'
  },
  {
    name: 'cva (class variance authority)',
    description: '计算并返回类型安全的 UI 组件样式',
    symbol: <Github />,
    href: 'https://cva.style/docs'
  },
  {
    name: 'Radix UI Colors',
    description: 'Radix UI 色彩设计',
    symbol: <RadixUI />,
    href: 'https://www.radix-ui.com/docs/colors/getting-started/installation'
  },
  {
    name: 'Lucide Icons',
    description: '一个漂亮丰富且风格一致的图标库',
    symbol: <Lucide />,
    href: 'https://lucide.dev'
  },
  {
    name: 'Framer Motion',
    description: '简单而强大的 React 运动库',
    symbol: <Framer />,
    href: 'https://www.framer.com/motion'
  }
]

export const tailwindCSSpluginsList = [
  {
    name: 'tailwindcss-animate',
    description: 'Tailwind CSS 的动画插件',
    symbol: <Github />,
    href: 'https://github.com/jamiebuilds/tailwindcss-animate'
  },
  {
    name: 'windy-radix-palette',
    description: '将Radix Colors 集成到 Tailwind CSS样式里',
    symbol: <Github />,
    href: 'https://github.com/brattonross/windy-radix-palette'
  },
  {
    name: '@tailwindcss/typography',
    description: 'HTML排版样式',
    symbol: <TailwindCSS />,
    href: 'https://tailwindcss.com/docs/typography-plugin'
  },
  {
    name: '@tailwindcss/aspect-ratio',
    description: 'Tailwind CSS 的宽高比插件',
    symbol: <TailwindCSS />,
    href: 'https://github.com/tailwindlabs/tailwindcss-aspect-ratio'
  },
  {
    name: 'windy-radix-typography',
    description: '将 Radix UI 排版风格添加到 @tailwindcss/typography',
    symbol: <Github />,
    href: 'https://github.com/brattonross/windy-radix-palette#typography'
  }
]

export const acknowledgementsList = [
  {
    name: 'shadcn/ui',
    description: '现代化直接复制组件的开源UI组件库',
    symbol: <Shadcn />,
    href: 'https://ui.shadcn.com'
  },
  {
    name: 'Geist',
    description: 'Vercel设计体系',
    symbol: <VercelDesign />,
    href: 'https://vercel.com/design/introduction'
  }
]
