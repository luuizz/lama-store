import React, { useState } from 'react'
import "./Slider.scss"
import { EastOutlined, WestOutlined } from '@mui/icons-material'
import moda from "../../assets/moda.jpg"
import modaMasculina from "../../assets/moda masculina.webp"
import modaFeminina from "../../assets/moda casal.jpg"

export const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState("");

    const data = [
        moda,
        modaMasculina,
        modaFeminina,
    ];

    const prevSlide = () => {
      setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
    }

    const nextSlide = () => {
      setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
    }

  return (
    <div className='slider'>
      <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlined />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlined />
        </div>
      </div>
    </div>
  )
}
