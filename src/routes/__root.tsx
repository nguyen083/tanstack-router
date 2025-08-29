import { createRootRoute, Outlet } from '@tanstack/react-router'
import { Plugins } from '@/plugins'
import Header from '../components/Header'

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <Plugins>
        <Outlet />
      </Plugins>
    </>
  ),
})
