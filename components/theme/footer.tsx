import React from 'react'

import { ThemeSwitcher } from '@ui'

export default function Footer() {
  return (
    <footer>
      <div className="flex items-center justify-center py-4">
        <ThemeSwitcher />
      </div>
    </footer>
  )
}
