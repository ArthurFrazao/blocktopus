import { createBrowserRouter } from 'react-router-dom'

import { Login } from './pages/Login'
import { ServerStatus } from './pages/ServerStatus'
import { LocalSaves } from './pages/LocalSaves'

export const router = createBrowserRouter([
  {
    path: '*',
    element: <Login />
  },
  {
    path: '/server-status',
    element: <ServerStatus />
  },
  {
    path: '/local-saves',
    element: <LocalSaves />
  }
])
