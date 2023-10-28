'use client'

import { useTheme } from 'next-themes'

const SunIcon = () => {
  return (
    <svg
      fill="none"
      className="h-4 w-4 text-current"
      height="16"
      width="16"
      shapeRendering="geometricPrecision"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="5" />
      <path d="M12 1v2" />
      <path d="M12 21v2" />
      <path d="M4.22 4.22l1.42 1.42" />
      <path d="M18.36 18.36l1.42 1.42" />
      <path d="M1 12h2" />
      <path d="M21 12h2" />
      <path d="M4.22 19.78l1.42-1.42" />
      <path d="M18.36 5.64l1.42-1.42" />
    </svg>
  )
}

const SystemIcon = () => {
  return (
    <svg
      fill="none"
      className="h-4 w-4 text-current"
      height="16"
      width="16"
      shapeRendering="geometricPrecision"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <path d="M8 21h8" />
      <path d="M12 17v4" />
    </svg>
  )
}

const DarkIcon = () => {
  return (
    <svg
      fill="none"
      className="h-4 w-4 text-current"
      height="16"
      width="16"
      shapeRendering="geometricPrecision"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  )
}
const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(e.target.value)
  }
  const isChecked = (value: string) => theme === value

  return (
    <div className="flex rounded-full border-[1px] border-solid border-[--theme-border] bg-[--theme-bg] p-[3px]">
      <span style={{ height: '100%' }}>
        <input
          className="peer/system absolute appearance-none outline-none"
          type="radio"
          id="theme-switcher-system"
          value="system"
          onChange={handleChange}
          checked={isChecked('system')}
        />
        <label
          className={
            'flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-none transition-all duration-100 ease-in-out' +
            ' ' +
            'hover:bg-[--theme-bg]' +
            ' ' +
            'peer-checked/system:bg-[--theme-active-bg]' +
            ' ' +
            '[&_svg]:!text-[--theme-btn-color] [&_svg]:transition-colors [&_svg]:duration-100 [&_svg]:ease-in-out' +
            ' ' +
            'hover:[&_svg]:!text-[--hover-btn-svg] peer-checked/system:[&_svg]:!text-[--active-svg]'
          }
          htmlFor="theme-switcher-system"
          aria-label="Switch to system mode"
          title="Switch to system mode"
        >
          <SystemIcon />
        </label>
      </span>
      <span style={{ height: '100%' }}>
        <input
          className="peer/dark absolute appearance-none outline-none"
          type="radio"
          id="theme-switcher-dark"
          value="dark"
          onChange={handleChange}
          checked={isChecked('dark')}
        />
        <label
          className={
            'flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-none transition-all duration-100 ease-in-out' +
            ' ' +
            'hover:bg-[--theme-bg]' +
            ' ' +
            'peer-checked/dark:bg-[--theme-active-bg]' +
            ' ' +
            '[&_svg]:!text-[--theme-btn-color] [&_svg]:transition-colors [&_svg]:duration-100 [&_svg]:ease-in-out' +
            ' ' +
            'hover:[&_svg]:!text-[--hover-btn-svg] peer-checked/dark:[&_svg]:!text-[--active-svg]'
          }
          htmlFor="theme-switcher-dark"
          aria-label="Switch to dark mode"
          title="Switch to dark mode"
        >
          <DarkIcon />
        </label>
      </span>
      <span style={{ height: '100%' }}>
        <input
          className="peer/light absolute appearance-none outline-none"
          type="radio"
          id="theme-switcher-light"
          value="light"
          onChange={handleChange}
          checked={isChecked('light')}
        />
        <label
          className={
            'flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-none transition-all duration-100 ease-in-out' +
            ' ' +
            'hover:bg-[--theme-bg]' +
            ' ' +
            'peer-checked/light:bg-[--theme-active-bg]' +
            ' ' +
            '[&_svg]:!text-[--theme-btn-color] [&_svg]:transition-colors [&_svg]:duration-100 [&_svg]:ease-in-out' +
            ' ' +
            'hover:[&_svg]:!text-[--hover-btn-svg] peer-checked/light:[&_svg]:!text-[--active-svg]'
          }
          htmlFor="theme-switcher-light"
          aria-label="Switch to light mode"
          title="Switch to light mode"
        >
          <SunIcon />
        </label>
      </span>
    </div>
  )
}

export default ThemeSwitcher
