import { useEffect, useState, useCallback } from "react"

type MeetingModalProps = {
  isOpen?: boolean
  selectedDate?: string
  onClose?: () => void
}

type MeetingFormState = {
  meetingDate: string
  fullName: string
  contactEmail: string
  mobileNumber: string
  subject: string
  type: string
  message: string
}

const initialFormState: MeetingFormState = {
  meetingDate: "",
  fullName: "",
  contactEmail: "",
  mobileNumber: "",
  subject: "",
  type: "",
  message: "",
}

const MeetingModal: React.FC<MeetingModalProps> = ({
  isOpen = false,
  selectedDate = "",
  onClose = () => undefined,
}) => {
  const [formData, setFormData] = useState<MeetingFormState>(initialFormState)
  const [isVisible, setIsVisible] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  // Sync selectedDate prop to form state - intentional pattern
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFormData((prev) => ({
      ...prev,
      meetingDate: selectedDate,
    }))
  }, [selectedDate])

  // Handle modal visibility animation - intentional pattern
  useEffect(() => {
    if (isOpen) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsVisible(true)
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsAnimating(true)
        })
      })
      document.body.style.overflow = "hidden"
    } else {
      setIsAnimating(false)
      const timer = setTimeout(() => {
        setIsVisible(false)
      }, 300)
      document.body.style.overflow = ""
      return () => clearTimeout(timer)
    }
    
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const resetForm = () => {
    setFormData(initialFormState)
  }

  const handleClose = useCallback(() => {
    onClose()
  }, [onClose])

  const handleBackdropClick = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }, [handleClose])

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      handleClose()
    }
  }, [handleClose])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const SwalRef = (window as typeof window & { Swal?: { fire: (...args: unknown[]) => Promise<unknown> } }).Swal
    const summaryHtml = `
      <div style="text-align: left; padding: 10px;">
        <p><strong>Meeting Date:</strong> ${formData.meetingDate || "Not selected"}</p>
        <p><strong>Name:</strong> ${formData.fullName}</p>
        <p><strong>Email:</strong> ${formData.contactEmail}</p>
        <p><strong>Mobile:</strong> ${formData.mobileNumber}</p>
        <p><strong>Subject:</strong> ${formData.subject}</p>
        <p><strong>Type:</strong> ${formData.type}</p>
        <p><strong>Details:</strong> ${formData.message}</p>
      </div>
    `

    const finalize = () => {
      resetForm()
      onClose()
    }

    if (SwalRef) {
      SwalRef.fire({
        icon: "success",
        title: "Meeting scheduled",
        html: summaryHtml,
        confirmButtonText: "Close",
        confirmButtonColor: "#e05b5b",
        showClass: { popup: "animate__animated animate__fadeInDown" },
        hideClass: { popup: "animate__animated animate__fadeOutUp" },
      }).then(finalize)
    } else {
      alert("Meeting scheduled successfully!")
      finalize()
    }
  }

  if (!isVisible) return null

  return (
    <div
      className={`meeting-modal-overlay ${isAnimating ? "is-visible" : ""}`}
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
      aria-labelledby="meetingModalLabel"
      data-testid="meeting-modal-overlay"
    >
      <div
        className="meeting-modal-container"
        onClick={(e) => e.stopPropagation()}
        data-testid="meeting-modal-container"
      >
        <div className="meeting-modal-header">
          <h3 id="meetingModalLabel" className="meeting-modal-title">
            Schedule Meeting
          </h3>
          <button
            type="button"
            className="meeting-modal-close-btn"
            onClick={handleClose}
            aria-label="Close"
            data-testid="button-close-meeting-modal"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="meeting-modal-body">
          <form id="meetingForm" onSubmit={handleSubmit}>
            <div className="meeting-form-grid">
              <div className="form-group">
                <label htmlFor="meetingDate" className="meeting-form-label">
                  Meeting Date
                </label>
                <input
                  type="text"
                  id="meetingDate"
                  name="meetingDate"
                  className="meeting-form-input"
                  readOnly
                  value={formData.meetingDate}
                  data-testid="input-meeting-date"
                />
              </div>
              <div className="form-group">
                <label htmlFor="fullName" className="meeting-form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="meeting-form-input"
                  placeholder="Enter your name"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  data-testid="input-full-name"
                />
              </div>
            </div>

            <div className="meeting-form-grid">
              <div className="form-group">
                <label htmlFor="contactEmail" className="meeting-form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="contactEmail"
                  name="contactEmail"
                  className="meeting-form-input"
                  placeholder="Enter your email"
                  required
                  value={formData.contactEmail}
                  onChange={handleChange}
                  data-testid="input-contact-email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="mobileNumber" className="meeting-form-label">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  id="mobileNumber"
                  name="mobileNumber"
                  className="meeting-form-input"
                  placeholder="Enter your phone number"
                  required
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  data-testid="input-mobile-number"
                />
              </div>
            </div>

            <div className="meeting-form-grid">
              <div className="form-group">
                <label htmlFor="subject" className="meeting-form-label">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="meeting-form-input"
                  placeholder="Enter meeting subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  data-testid="input-subject"
                />
              </div>
              <div className="form-group">
                <label htmlFor="type" className="meeting-form-label">
                  Type
                </label>
                <select
                  id="type"
                  name="type"
                  className="meeting-form-input"
                  required
                  value={formData.type}
                  onChange={handleChange}
                  data-testid="select-type"
                >
                  <option value="">Select meeting type</option>
                  <option value="consultation">Consultation</option>
                  <option value="cooperation">Cooperation</option>
                  <option value="support">Support</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="form-group meeting-form-details">
              <label htmlFor="message" className="meeting-form-label">
                Details
              </label>
              <textarea
                id="message"
                name="message"
                className="meeting-form-textarea"
                placeholder="Share more about your request..."
                required
                value={formData.message}
                onChange={handleChange}
                data-testid="textarea-message"
              ></textarea>
            </div>

            <div className="meeting-form-actions">
              <button
                type="button"
                className="meeting-btn-cancel"
                onClick={handleClose}
                data-testid="button-cancel-meeting"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="meeting-btn-submit"
                data-testid="button-submit-meeting"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default MeetingModal
