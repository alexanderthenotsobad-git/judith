import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'
import { X } from './Icons'

const LightboxContext = createContext(() => {})

export const useLightbox = () => useContext(LightboxContext)

/** Single shared modal used by every photo on the page. */
export function LightboxProvider({ children }) {
  const [item, setItem] = useState(null)
  const dialogRef = useRef(null)
  const closeRef = useRef(null)
  const triggerRef = useRef(null)

  const open = useCallback((next) => {
    triggerRef.current = document.activeElement
    setItem(next)
  }, [])
  const close = useCallback(() => setItem(null), [])

  useEffect(() => {
    if (!item) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        close()
        return
      }
      if (event.key !== 'Tab' || !dialogRef.current) return
      const focusable = dialogRef.current.querySelectorAll('button, [href], img[tabindex="0"]')
      if (!focusable.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
      if (triggerRef.current instanceof HTMLElement) triggerRef.current.focus()
    }
  }, [item, close])

  return (
    <LightboxContext.Provider value={open}>
      {children}
      {item && (
        <div
          className="lightbox"
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={item.caption || 'Photo'}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) close()
          }}
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={close}
            ref={closeRef}
            aria-label="Close photo"
          >
            <X size={22} />
          </button>
          <figure className="lightbox-figure">
            <img src={item.src} alt={item.alt || ''} />
            {item.caption && <figcaption>{item.caption}</figcaption>}
          </figure>
        </div>
      )}
    </LightboxContext.Provider>
  )
}
