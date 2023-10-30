import Link from 'next/link'

import { COMPONENTS } from '@components/pages/ui-snippets/lab/components'
import { ArrowRight } from 'lucide-react'

type CardComponentProps = {
  children: React.ReactNode
  slug: string
  name: string
}
const CardComponent: React.FC<CardComponentProps> = ({ children, slug, name }) => {
  return (
    <div className="relative flex items-center justify-center rounded-xl border border-gray-4 bg-black px-8 py-32 backdrop-blur  transition-colors hover:border-gray-6">
      <Link href={`/ui/${slug}`} className="absolute left-5 top-4 text-sm text-slate-400">
        {name}
      </Link>
      <div className="absolute right-5 top-3">
        <Link
          href={`/ui/${slug}`}
          className="flex h-7 w-7 items-center justify-center rounded transition hover:bg-gray-3"
        >
          <ArrowRight className="h-5 w-5 text-slate-400" />
        </Link>
      </div>
      {/* set the components to 160px */}
      <div className="[&>button]:w-40 [&>div]:w-40 [&>input]:w-40">{children}</div>
    </div>
  )
}

const Sections = () => {
  return (
    <>
      <section>
        <div className="relative z-0 mx-auto max-w-3xl pb-24 pt-20 text-center">
          <div className="absolute -top-4 -z-10 flex w-full justify-center">
            <div className="h-[310px] w-[310px] max-w-full animate-pulse-slow rounded-full bg-[#8678F9] opacity-20 blur-[100px]" />
          </div>
          <div>
            <h1 className="mb-8 bg-gradient-to-r from-[#6d6d6d]  to-[#bab5b5] bg-clip-text text-4xl text-transparent dark:bg-gradient-to-t dark:from-[#6d6d6d] dark:to-[#f4f4f4] md:text-5xl">
              现代 UI 组件和效果的独特集合
            </h1>
            <p className="text-xl text-slate-500">
              使用
              <span className="text-[#8678F9] dark:text-white">React 和 Tailwind CSS </span>制作。
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

const ComponentList = () => {
  return (
    <>
      <Sections />
      <div className="mx-auto max-w-7xl py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {COMPONENTS.map((item, index) => (
            <CardComponent key={index} slug={item.slug} name={item.name}>
              <item.component />
            </CardComponent>
          ))}
        </div>
      </div>
    </>
  )
}

export default ComponentList
