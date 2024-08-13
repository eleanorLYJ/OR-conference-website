import { Stars } from './Stars'
import { Meteors } from './MeteorLanguages'
import { Background } from './Background'

export function PageBackground({ children }) {
  return (
    <section className='relative px-4 pb-20 before:bg-gradient-to-b before:from-[#020617] before:via-[#020617] before:-z-10 before:inset-0 before:to-[#0B217D] before:size-full before:absolute border-b border-midu-primary inset-0 m-auto'>
      <Stars />
      <Meteors />
      <Background />
      {children}
    </section>
  )
}