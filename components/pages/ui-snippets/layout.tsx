import React from 'react'

export const List = () => {
  return (
    <div className="grid grid-cols-2 gap-4 pt-8 lg:grid-cols-4">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
        return (
          <div
            key={item}
            className="group relative flex h-32 w-full items-center justify-center rounded-xl border border-gray-7 bg-gray-2 transition-colors hover:border-gray-8"
          >
            sad {item + 1}
          </div>
        )
      })}
    </div>
  )
}

export const Sections = () => {
  return (
    <>
      <section>
        <div className="relative z-0 mx-auto max-w-3xl pb-24 pt-12 text-center">
          <div className="absolute -top-4 -z-10 flex w-full justify-center">
            <div className="animate-pulse-slow h-[310px] w-[310px] max-w-full rounded-full bg-[#8678F9] opacity-20 blur-[100px]" />
          </div>
          <div>
            <h1 className="mb-8 bg-gradient-to-t from-[#6d6d6d] to-[#f4f4f4] bg-clip-text text-4xl text-transparent md:text-5xl">
              现代 UI 组件和效果的独特集合
            </h1>
            <p className="text-xl text-slate-500">
              使用
              <span className="text-white">React 和 Tailwind CSS </span>制作。
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export const Layout = ({ children }) => {
  return (
    <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-4">
      <main className="flex-1">
        <Sections />
        <div className="mx-auto max-w-7xl py-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">{children}</div>
        </div>
      </main>
    </div>
  )
}
