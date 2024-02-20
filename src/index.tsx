import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import { PropertyListingsContextProvider } from './context'
import { router } from './routes'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <PropertyListingsContextProvider>
      <RouterProvider router={router} />
    </PropertyListingsContextProvider>
  </React.StrictMode>
)
