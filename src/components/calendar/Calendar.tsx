import { useState, useMemo, useRef } from 'react'
import Swal from 'sweetalert2'
import './Calendar.css'

type CalendarDay = {
  date: string
  label: string
  dayOfWeek: number // 0=Sun, 1=Mon, ...
}

type CalendarProps = {
  onDaySelect?: (day: { date: string; label: string; description: string }) => void
  inModal?: boolean
}

const WEEKDAYS = ['日', '一', '二', '三', '四', '五', '六']

function generateMonth(year: number, month: number): (CalendarDay | null)[] {
  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const cells: (CalendarDay | null)[] = []

  for (let i = 0; i < firstDay; i++) cells.push(null)

  for (let d = 1; d <= daysInMonth; d++) {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`
    const dayOfWeek = new Date(year, month, d).getDay()
    cells.push({ date: dateStr, label: String(d), dayOfWeek })
  }

  return cells
}

export const Calendar: React.FC<CalendarProps> = ({ onDaySelect, inModal: _inModal }) => {
  const today = new Date()
  const [currentMonth, setCurrentMonth] = useState(today.getMonth())
  const [currentYear, setCurrentYear] = useState(today.getFullYear())
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [view, setView] = useState<'calendar' | 'form' | 'thanks'>('calendar')
  const [animating, setAnimating] = useState(false)
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', company: '', message: '' })
  const cardRef = useRef<HTMLDivElement>(null)

  const days = useMemo(() => generateMonth(currentYear, currentMonth), [currentYear, currentMonth])

  const monthLabel = new Date(currentYear, currentMonth).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
  })

  // Prevent going before current month
  const isCurrentMonth = currentYear === today.getFullYear() && currentMonth === today.getMonth()

  const prevMonth = () => {
    if (isCurrentMonth) return
    if (currentMonth === 0) { setCurrentMonth(11); setCurrentYear(y => y - 1) }
    else setCurrentMonth(m => m - 1)
  }

  const nextMonth = () => {
    if (currentMonth === 11) { setCurrentMonth(0); setCurrentYear(y => y + 1) }
    else setCurrentMonth(m => m + 1)
  }

  const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`

  const handleDayClick = (day: CalendarDay) => {
    if (day.dayOfWeek === 0) return // Sunday disabled
    setSelectedDate(day.date)
    // Animate: fade out calendar, then show form
    setAnimating(true)
    setTimeout(() => {
      setView('form')
      setAnimating(false)
    }, 280)
  }

  const handleBack = () => {
    setAnimating(true)
    setTimeout(() => {
      setSelectedDate(null)
      setView('calendar')
      setAnimating(false)
    }, 280)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (selectedDate && onDaySelect) {
      onDaySelect({ date: selectedDate, label: selectedDate, description: formData.message || '会议预约' })
    }
    await Swal.fire({
      icon: 'success',
      title: '预约提交成功！',
      text: `我们已收到您 ${selectedDate} 的会议预约，将尽快与您确认。`,
      confirmButtonText: '好的',
      confirmButtonColor: '#6366f1',
      showClass: { popup: 'animate__animated animate__fadeInDown' },
      hideClass: { popup: 'animate__animated animate__fadeOutUp' },
    })
    // After SweetAlert closes, show thanks view
    setAnimating(true)
    setTimeout(() => {
      setView('thanks')
      setAnimating(false)
    }, 280)
  }

  return (
    <section className="sp-calendar">
      <div className="container">
        <div className="sp-calendar__header">
          <div className="sp-calendar__header-text">
            <span className="sp-section__label">预约会议</span>
            <h2 className="sp-section__title">有项目想法？让我们聊聊</h2>
            <p className="sp-section__desc">
              选择一个可用日期，我们将尽快与您确认会议时间
            </p>
          </div>
        </div>

        <div className="sp-calendar__card" ref={cardRef}>
          <div className={`sp-calendar__view ${animating ? 'sp-calendar__view--fading' : 'sp-calendar__view--visible'}`}>
          {view === 'calendar' ? (
            <>
              {/* Month Navigation */}
              <div className="sp-calendar__nav">
                <button className={`sp-calendar__nav-btn${isCurrentMonth ? ' sp-calendar__nav-btn--disabled' : ''}`} onClick={prevMonth} aria-label="上个月" disabled={isCurrentMonth}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
                </button>
                <h3 className="sp-calendar__month">{monthLabel}</h3>
                <button className="sp-calendar__nav-btn" onClick={nextMonth} aria-label="下个月">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
                </button>
              </div>

              {/* Weekday Headers */}
              <div className="sp-calendar__weekdays">
                {WEEKDAYS.map(w => (
                  <div key={w} className="sp-calendar__weekday">{w}</div>
                ))}
              </div>

              {/* Day Grid */}
              <div className="sp-calendar__grid">
                {days.map((day, i) => {
                  if (!day) return <div key={`blank-${i}`} className="sp-calendar__cell sp-calendar__cell--blank" />

                  const isToday = day.date === todayStr
                  const isSunday = day.dayOfWeek === 0
                  const cls = [
                    'sp-calendar__cell',
                    isToday ? 'sp-calendar__cell--today' : '',
                    isSunday ? 'sp-calendar__cell--sunday' : 'sp-calendar__cell--available',
                  ].filter(Boolean).join(' ')

                  return (
                    <div key={day.date} className={cls} onClick={() => handleDayClick(day)}>
                      <span className="sp-calendar__day-num">{day.label}</span>
                      {!isSunday && <span className="sp-calendar__dot sp-calendar__dot--available" />}
                    </div>
                  )
                })}
              </div>
            </>
          ) : view === 'form' ? (
            /* ── Booking Form ── */
            <div className="sp-calendar__form">
              <button className="sp-calendar__back-btn" onClick={handleBack} type="button">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
                返回日历
              </button>

              <h3 className="sp-calendar__form-title">预约会议</h3>

              <div className="sp-calendar__form-date">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span>{selectedDate}</span>
              </div>

              <form onSubmit={handleSubmit} className="sp-calendar__fields">
                <div className="sp-calendar__field-row">
                  <div className="sp-calendar__field">
                    <label htmlFor="cal-name">姓名 *</label>
                    <input
                      id="cal-name"
                      type="text"
                      required
                      placeholder="请输入您的姓名"
                      value={formData.name}
                      onChange={e => setFormData(d => ({ ...d, name: e.target.value }))}
                    />
                  </div>
                  <div className="sp-calendar__field">
                    <label htmlFor="cal-phone">手机号码 *</label>
                    <input
                      id="cal-phone"
                      type="tel"
                      required
                      placeholder="请输入手机号码"
                      value={formData.phone}
                      onChange={e => setFormData(d => ({ ...d, phone: e.target.value }))}
                    />
                  </div>
                </div>
                <div className="sp-calendar__field-row">
                  <div className="sp-calendar__field">
                    <label htmlFor="cal-email">邮箱 *</label>
                    <input
                      id="cal-email"
                      type="email"
                      required
                      placeholder="请输入您的邮箱"
                      value={formData.email}
                      onChange={e => setFormData(d => ({ ...d, email: e.target.value }))}
                    />
                  </div>
                  <div className="sp-calendar__field">
                    <label htmlFor="cal-company">公司名称</label>
                    <input
                      id="cal-company"
                      type="text"
                      placeholder="请输入公司名称（选填）"
                      value={formData.company}
                      onChange={e => setFormData(d => ({ ...d, company: e.target.value }))}
                    />
                  </div>
                </div>
                <div className="sp-calendar__field">
                  <label htmlFor="cal-message">备注信息</label>
                  <textarea
                    id="cal-message"
                    rows={3}
                    placeholder="简要描述您的项目需求..."
                    value={formData.message}
                    onChange={e => setFormData(d => ({ ...d, message: e.target.value }))}
                  />
                </div>
                <button type="submit" className="sp-btn sp-btn--primary sp-calendar__submit">
                  确认预约
                </button>
              </form>
            </div>
          ) : (
            /* ── Thanks View ── */
            <div className="sp-calendar__thanks">
              <div className="sp-calendar__thanks-icon">
                <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h3 className="sp-calendar__thanks-title">感谢您的预约！</h3>
              <p className="sp-calendar__thanks-desc">
                我们已收到您 <strong>{selectedDate}</strong> 的会议预约请求。<br />
                团队成员将在 24 小时内通过邮件或电话与您确认会议详情。
              </p>
              <button
                type="button"
                className="sp-btn sp-btn--outline sp-calendar__thanks-btn"
                onClick={() => {
                  setAnimating(true)
                  setTimeout(() => {
                    setSelectedDate(null)
                    setFormData({ name: '', phone: '', email: '', company: '', message: '' })
                    setView('calendar')
                    setAnimating(false)
                  }, 280)
                }}
              >
                返回日历
              </button>
            </div>
          )}          </div>        </div>
      </div>
    </section>
  )
}
