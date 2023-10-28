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
  }
}

export default config
