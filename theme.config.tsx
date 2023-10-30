import { useRouter } from 'next/router'
import React from 'react'

import Footer from '@components/theme/footer'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span style={{ fontWeight: 600 }}> Yi'notes </span>,
  project: {
    link: 'https://github.com/liaoyio'
  },
  docsRepositoryBase: 'https://github.com/liaoyio',
  footer: {
    component: Footer
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return { titleTemplate: "%s – Yi'notes" }
    }
  },
  editLink: {
    text: 'Edit this page on GitHub →'
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback'
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  darkMode: false,
  toc: {
    backToTop: true,
    title: '返回顶部'
  }
}

export default config
