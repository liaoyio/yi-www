import Link from 'next/link'
import * as React from 'react'
import { useState } from 'react'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from './navigation-menu'
import { cn } from '@lib/utils'
import Snowfall from 'react-snowfall'

export default function Header() {
  return (
    <header>
      <Snowfall color="gray" snowflakeCount={10} />
      <div
        className="mx-auto max-w-7xl items-center justify-between pt-6 lg:flex"
        aria-label="Global"
      >
        <div className="group relative ml-8 flex items-center text-sm lg:-ml-4">
          <Nav />
        </div>

        <div className="flex gap-x-4">
          <div className="hidden rounded-md bg-neutral-900 p-1 px-5 py-2 hover:bg-neutral-900/80 lg:flex">
            <a href="#" className="text-sm font-semibold leading-6 text-white/90">
              Sign in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
          <div className="hidden rounded-md bg-white p-1 px-5 py-2 hover:bg-white/90 lg:flex ">
            <a href="#" className="text-sm font-semibold leading-6 text-[#03000A]">
              Request access
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export function Nav() {
  const components: { title: string; href: string; description: string }[] = [
    {
      title: 'Alert Dialog',
      href: '/',
      description:
        'A modal dialog that interrupts the user with important content and expects a response.'
    },
    {
      title: 'Hover Card',
      href: '/',
      description: 'For sighted users to preview content available behind a link.'
    },
    {
      title: 'Progress',
      href: '/',
      description:
        'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.'
    },
    {
      title: 'Scroll-area',
      href: '/',
      description: 'Visually or semantically separates content.'
    },
    {
      title: 'Tabs',
      href: '/',
      description:
        'A set of layered sections of content—known as tab panels—that are displayed one at a time.'
    },
    {
      title: 'Tooltip',
      href: '/',
      description:
        'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.'
    }
  ]

  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)

  function onMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect()
    setMouseX(clientX - left)
    setMouseY(clientY - top)
  }

  return (
    <div
      style={{ '--mouse-x': mouseX, '--mouse-y': mouseY } as React.CSSProperties}
      onMouseMove={onMouseMove}
    >
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
            <NavigationMenuContent className="!border-red-500">
              <ul className=" grid gap-3 bg-[#000000] p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-[#070708] p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      {/* <Icons.logo className="h-6 w-6" /> */}
                      <div className="mb-2 mt-4 text-lg font-medium">shadcn/ui</div>
                      <p className="text-sm leading-tight text-[#748397]">
                        Beautifully designed components built with Radix UI and Tailwind CSS.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/docs" title="Introduction">
                  Re-usable components built using Radix UI and Tailwind CSS.
                </ListItem>
                <ListItem href="/docs/installation" title="Installation">
                  How to install dependencies and structure your app.
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="Typography">
                  Styles for headings, paragraphs, lists...etc
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Components</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 bg-[#000000] p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <ListItem key={component.title} title={component.title} href={component.href}>
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Documentation
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem className="hidden md:block">
            <Link href="/security" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Security
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/pricing" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Pricing
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[hsl(216,34%,17%)] hover:text-[hsl(210,40%,98%)] focus:bg-[hsl(216,34%,17%)] focus:text-[hsl(210,40%,98%)] ',
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-[hsl(215.4,16.3%,56.9%)]">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  }
)
ListItem.displayName = 'ListItem'
