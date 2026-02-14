interface SectionTitleProps {
  title: string
  variant?: 'outsource' | 'solutions' | 'about'
  withContainer?: boolean
  className?: string
}

export function SectionTitle({ 
  title, 
  variant = 'outsource',
  withContainer = true,
  className
}: SectionTitleProps) {
  const classMap = {
    outsource: 'title-outsource',
    solutions: 'title-solutions',
    about: 'title-about'
  }

  const titleElement = (
    <h2 
      className={`section-title ${classMap[variant]} ${className || ''}`} 
      data-testid={`text-section-${variant}`}
    >
      {title}
    </h2>
  )

  if (!withContainer) {
    return titleElement
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          {titleElement}
        </div>
      </div>
    </div>
  )
}
