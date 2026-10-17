"use client"

import { useEffect } from "react"

export function MotionCanvas() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduceMotion) return

    const root = document.documentElement
    let frame = 0

    const updateScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        root.style.setProperty("--scroll-parallax", `${Math.min(window.scrollY * 0.09, 180)}px`)
      })
    }

    const updatePointer = (event: PointerEvent) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        root.style.setProperty("--pointer-x", `${(event.clientX / window.innerWidth - 0.5) * 36}px`)
        root.style.setProperty("--pointer-y", `${(event.clientY / window.innerHeight - 0.5) * 24}px`)
      })
    }

    updateScroll()
    window.addEventListener("scroll", updateScroll, { passive: true })
    window.addEventListener("pointermove", updatePointer, { passive: true })

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", updateScroll)
      window.removeEventListener("pointermove", updatePointer)
    }
  }, [])

  return (
    <div className="motion-canvas" aria-hidden="true">
      <span className="motion-orb motion-orb-one" />
      <span className="motion-orb motion-orb-two" />
      <span className="motion-orb motion-orb-three" />
    </div>
  )
}
