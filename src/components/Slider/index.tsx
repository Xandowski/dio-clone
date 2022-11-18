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
      spacing: 20,
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
        <div className="keen-slider__slide">
          <h2>Carreira <br/> Back-end</h2>

          <ul>
            <li><div></div>Formação Java Developer</li>
            <li><div></div>Formação .NET Developer</li>
            <li><div></div>Formação Python Developer</li>
            <li><div></div>Formação Typescript Fullstack Developer</li>
            <li><div></div>Formação PHP Experience</li>
          </ul>

          <div>
            <span>124 atividades <span> 27 projetos</span></span>
            
          </div>
        </div>
        <div className="keen-slider__slide">
           <h2>Carreira <br/> Front-end</h2>

          <ul>
            <li><div></div>Formação HTML Web Developer</li>
            <li><div></div>Formação CSS Web Developer</li>
            <li><div></div>Formação JavaScript Developer</li>
            <li><div></div>Formação Angular Developer</li>
            <li><div></div>Formação React Developer</li>
            <li><div></div>Formação Typescript Fullstack Developer</li>
            <li><div></div>Formação Programação Reativa com Spring WebFlux</li>
          </ul>

          <div>
            <span>107 atividades <span> 23 projetos</span></span>
          </div>
        </div>
        <div className="keen-slider__slide">
          <h2>Carreira <br/> Mobile</h2>

          <ul>
            <li><div></div>Formação Android Developer</li>
            <li><div></div>Formação Flutter Specialist</li>
            <li><div></div>Formação Swift & iOS Experience</li>
          </ul>

          <div>
            <span>80 atividades <span> 16 projetos</span></span>
          </div>
        </div>
        <div className="keen-slider__slide">
          <h2>Carreira <br/> Infra e DevOps</h2>

          <ul>
            <li><div></div>Formação Linux Fundamentals</li>
            <li><div></div>Formação Docker Fundamentals</li>
            <li><div></div>Formação Kubernetes Fundamentals</li>
          </ul>

          <div>
            <span>41 atividades <span> 6 projetos</span></span>
            
          </div>
        </div>
        <div className="keen-slider__slide">
          <h2>Carreira do <br/> Futuro</h2>

          <ul>
            <li><div></div>Formação Machine Learning Specialist</li>
            <li><div></div>Formação Blockchain Specialist</li>
            <li><div></div>Formação Game Developer: Roblox & Metaverse</li>
            <li><div></div>Formação Scrum Master Certification</li>
          </ul>

          <div>
            <span>88 atividades <span> 17 projetos</span></span>
            
          </div>
        </div>
        <div className="keen-slider__slide">
          <h2>Carreira <br/> Infra e DevOps</h2>

          <ul>
            <li><div></div>Formação Linux Fundamentals</li>
            <li><div></div>Formação Docker Fundamentals</li>
            <li><div></div>Formação Kubernetes Fundamentals</li>
          </ul>

          <div>
            <span>41 atividades <span> 6 projetos</span></span>
            
          </div>
        </div>
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