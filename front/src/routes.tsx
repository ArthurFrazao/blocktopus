import { createBrowserRouter } from 'react-router-dom'

import { Login } from './pages/Login'
import { ServerStatus } from './pages/ServerStatus'

export const router = createBrowserRouter([
  {
    path: '*',
    element: <Login />
  },
  {
    path: '/server-status',
    element: <ServerStatus />
  }
])
