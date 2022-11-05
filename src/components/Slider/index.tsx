import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { SliderContainer } from "./styles"
import { useState } from "react"
import { Arrow } from "../Arrow"

export const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slides: {
      perView: 3,
      spacing: 10,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
      console.log('mudou')
    },
    created() {
      setLoaded(true)
    }
  })

  // console.log(window.screen.width)

  return (
    <SliderContainer >
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide">1</div>
        <div className="keen-slider__slide">2</div>
        <div className="keen-slider__slide">3</div>
        <div className="keen-slider__slide">4</div>
      </div>
      {loaded && instanceRef.current && (
        <>
          <Arrow
            onClickLeft={(e: any) =>
              e.stopPropagation() || instanceRef.current?.prev()}
          />
          
          <Arrow 
            onClickRight={(e: any) =>
              e.stopPropagation() || instanceRef.current?.next()}
          />
        </>
      )}
    </SliderContainer>
  )
}