import { createBrowserRouter } from 'react-router-dom'
import { routes } from './routes'
import { Layout } from './components/Layout'

// Create routes from the routes config
const routeElements = Object.values(routes).map(route => ({
  path: route.path,
  element: <route.component />,
}))

// Create the router with a layout wrapper
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: routeElements,
  }
])

export { router } 