import type { ReactNode } from 'react'
import ReactQuery from './react-query'
import TanstackDevtoolsCustom from './tanstack-devtools'

function Plugins({ children }: { children: ReactNode }) {
  return (
    <>
      <ReactQuery>
        {children}
      </ReactQuery>
      <TanstackDevtoolsCustom />
    </>
  )
}

export default Plugins
