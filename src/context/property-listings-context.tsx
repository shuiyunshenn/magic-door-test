import React, { createContext, useState } from 'react'

interface Context {
  lastViewedPropertyId: number | null
  setLastViewedPropertyId: (id: number) => void
}

export const PropertyListingsContext = createContext<Context>({
  lastViewedPropertyId: null,
  setLastViewedPropertyId: (id: number) => {},
})

export const PropertyListingsContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [lastViewedPropertyId, setLastViewedPropertyId] = useState<number | null>(null)

  return (
    <PropertyListingsContext.Provider value={{ lastViewedPropertyId, setLastViewedPropertyId }}>
      {children}
    </PropertyListingsContext.Provider>
  )
}
