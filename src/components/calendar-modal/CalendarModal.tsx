import { useEffect, useCallback } from 'react'
import { Calendar } from '../calendar/Calendar'
import { useCalendarModalStore } from '../../stores/calendarModalStore'
import './CalendarModal.css'

export default function CalendarModal() {
  const { isOpen, close } = useCalendarModalStore()

  // Close on Escape
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') close()
  }, [close])

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, handleKeyDown])

  if (!isOpen) return null

  return (
    <div className="sp-cal-modal" onClick={close}>
      <div className="sp-cal-modal__overlay" />
      <div className="sp-cal-modal__container" onClick={(e) => e.stopPropagation()}>
        <button className="sp-cal-modal__close" onClick={close} aria-label="关闭">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <Calendar inModal />
      </div>
    </div>
  )
}
