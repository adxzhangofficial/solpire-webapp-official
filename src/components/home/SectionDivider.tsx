interface SectionDividerProps {
  variant?: 'geooptix' | 'image'
  imageSrc?: string
  imageClassName?: string
}

export function SectionDivider({ 
  variant = 'geooptix',
  imageSrc = "/assets/images/line-2.svg",
  imageClassName = "divider divider-6"
}: SectionDividerProps) {
  if (variant === 'image') {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <img
              src={imageSrc}
              alt="Divider"
              className={imageClassName}
            />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="line-flex">
            <div className="geooptix-line1" />
          </div>
        </div>
      </div>
    </div>
  )
}
