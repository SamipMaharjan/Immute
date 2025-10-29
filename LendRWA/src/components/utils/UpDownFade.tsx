'use client'

import { useRef } from 'react'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { cn } from '@/lib/utils'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface UpDownFadeProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

const UpDownFade = ({ children, delay = 0, className }: UpDownFadeProps) => {
  const ref = useRef(null)
  useGSAP(
    () => {
      gsap.from(ref.current, {
        y: -10,
        opacity: 0,
        delay: `${delay}`,
        duration: 0.9
      })
    },
    { scope: ref }
  )
  return (
    <div className={cn('', className)} ref={ref}>
      {children}
    </div>
  )
}

export default UpDownFade
