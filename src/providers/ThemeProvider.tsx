
import React from 'react'
import {HeroUIProvider} from '@heroui/react'

export const ThemeProvider = ({children}: { children: React.ReactNode }) => {
  return (
    <HeroUIProvider className="dark">
      {children}
    </HeroUIProvider>
  )
}