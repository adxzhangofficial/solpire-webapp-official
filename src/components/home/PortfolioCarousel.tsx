import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { getAssetPath } from '../../lib/utils'

interface PortfolioSlide {
  type: 'card' | 'image'
  imageSrc: string
  overlayImageSrc?: string
  alt?: string
}

interface PortfolioCarouselProps {
  slides?: PortfolioSlide[]
}

const defaultSlides: PortfolioSlide[] = [
  { type: 'card', imageSrc: getAssetPath('/assets/images/image-4.png'), alt: 'Project 1' },
  { type: 'image', imageSrc: getAssetPath('/assets/images/------------.svg'), alt: 'Card Image' },
  { type: 'card', imageSrc: getAssetPath('/assets/images/image-4.png'), alt: 'Project 1' },
  { type: 'image', imageSrc: getAssetPath('/assets/images/------------.svg'), alt: 'Card Image' },
  { type: 'card', imageSrc: getAssetPath('/assets/images/image-4.png'), alt: 'Project 1' },
  { type: 'image', imageSrc: getAssetPath('/assets/images/------------.svg'), alt: 'Card Image' },
  { type: 'card', imageSrc: getAssetPath('/assets/images/image-4.png'), alt: 'Project 1' },
  { type: 'image', imageSrc: getAssetPath('/assets/images/------------.svg'), alt: 'Card Image' },
]

export function PortfolioCarousel({ slides = defaultSlides }: PortfolioCarouselProps) {
  return (
    <div className="portfolio-cards-container">
      <Swiper
        className="portfolio-swiper"
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        breakpoints={{
          576: { slidesPerView: 1 },
          992: { slidesPerView: 5 }
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {slide.type === 'card' ? (
              <div className="portfolio-card card-main">
                <div className="card-gradient" />
                <img src={slide.imageSrc} alt={slide.alt || 'Project'} className="card-image-1" />
                {slide.overlayImageSrc && (
                  <img src={slide.overlayImageSrc} alt="Project overlay" className="card-image-2" />
                )}
              </div>
            ) : (
              <img src={slide.imageSrc} alt={slide.alt || 'Card Image'} className="portfolio-card-image" />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
