import { useEffect } from 'react'

export default function SecurityGuard({ enabled = true }) {
  useEffect(() => {
    if (!enabled) return

    const preventDefault = (e) => e.preventDefault()

    const blockKeys = (e) => {
      const k = String(e.key).toLowerCase()
      const combined = (e.ctrlKey || e.metaKey) && ['u', 'p', 's', 'a', 'x'].includes(k)
      if (combined) {
        e.preventDefault()
      }
      if (e.key === 'F12') {
        e.preventDefault()
      }
    }

    const blockDroppedImage = (e) => {
      if (e.dataTransfer && Array.from(e.dataTransfer.types).includes('Files')) {
        e.preventDefault()
      }
    }

    document.addEventListener('contextmenu', preventDefault)
    document.addEventListener('dragstart', preventDefault)
    document.addEventListener('drop', blockDroppedImage)
    document.addEventListener('keydown', blockKeys)

    return () => {
      document.removeEventListener('contextmenu', preventDefault)
      document.removeEventListener('dragstart', preventDefault)
      document.removeEventListener('drop', blockDroppedImage)
      document.removeEventListener('keydown', blockKeys)
    }
  }, [enabled])

  return null
}
