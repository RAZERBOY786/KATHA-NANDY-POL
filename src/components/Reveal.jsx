import { useEffect, useRef, useState } from 'react'

function useInView(threshold = 0.15) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(el)
        }
      },
      { threshold, rootMargin: '0px 0px -60px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, inView }
}

const animations = {
  fade: {
    hidden: 'opacity-0',
    visible: 'opacity-100',
  },
  up: {
    hidden: 'opacity-0 translate-y-10',
    visible: 'opacity-100 translate-y-0',
  },
  down: {
    hidden: 'opacity-0 -translate-y-10',
    visible: 'opacity-100 translate-y-0',
  },
  left: {
    hidden: 'opacity-0 -translate-x-10',
    visible: 'opacity-100 translate-x-0',
  },
  right: {
    hidden: 'opacity-0 translate-x-10',
    visible: 'opacity-100 translate-x-0',
  },
  zoom: {
    hidden: 'opacity-0 scale-90',
    visible: 'opacity-100 scale-100',
  },
}

export default function Reveal({
  children,
  animation = 'up',
  delay = 0,
  duration = 700,
  className = '',
  threshold = 0.15,
  as: Tag = 'div',
}) {
  const { ref, inView } = useInView(threshold)
  const anim = animations[animation] || animations.up

  return (
    <Tag
      ref={ref}
      className={`transition-all ease-out will-change-transform motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100 ${className} ${
        inView ? anim.visible : anim.hidden
      }`}
      style={{
        transitionDelay: inView ? `${delay}ms` : '0ms',
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </Tag>
  )
}
