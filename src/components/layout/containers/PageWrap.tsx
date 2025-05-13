import { IChildren } from '@/types/generalTypes'
import { memo } from 'react'

const PageWrap = memo<IChildren>(({ children }) => {
  return <div className={`relative flex min-h-screen flex-col px-0`}>{children}</div>
})

PageWrap.displayName = 'PageWrap'

export default PageWrap
