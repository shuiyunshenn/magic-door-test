import { Navigate, createBrowserRouter } from 'react-router-dom'

import { PropertyDetails, PropertyListings } from '../pages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to={'/property-list'} replace />,
  },
  {
    path: '/property-list',
    element: <PropertyListings />,
  },
  {
    path: '/property-details/:id',
    element: <PropertyDetails />,
  },
  {
    path: '*',
    element: <Navigate to={'/property-list'} replace />,
  },
])
