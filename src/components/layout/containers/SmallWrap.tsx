import { IChildren } from '@/types/generalTypes'
import { memo } from 'react'

interface IProps extends IChildren {
  id?: string
}

const SmallWrap = memo<IProps>(({ children, id }) => {
  return (
    <section
      id={id}
      className="mx-auto flex h-full min-h-min w-full max-w-screen-lg flex-col flex-nowrap px-11"
    >
      {children}
    </section>
  )
})

SmallWrap.displayName = 'SmallWrap'

export default SmallWrap
