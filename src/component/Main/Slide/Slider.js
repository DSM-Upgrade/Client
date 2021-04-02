import React, { useState,useEffect,useRef } from 'react';
import Slide from './Slide';
import * as S from './style';
import {mainSlide} from '../../../assets/main';
import {mainSlideNotice} from '../../../assets/main';
import {mainSlideHomework} from '../../../assets/main';
import {mainSlideFine} from '../../../assets/main';
import {mainSlideMypage} from '../../../assets/main';
import {leftArrow} from '../../../assets/main';
import {rightArrow} from '../../../assets/main';

const TOTAL_SLIDES = 4;
export default function Slider() {
  const [currentSlide,setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const nextSlide = () => {
    if(currentSlide >= TOTAL_SLIDES){
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if(currentSlide === 0){
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  }

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  return(
    <S.Container>
      <S.Button onClick={prevSlide} src={leftArrow}/>
        <S.SliderContainer ref={slideRef}>
          <Slide img={mainSlide}/>
          <Slide img={mainSlideNotice}/>
          <Slide img={mainSlideHomework}/>
          <Slide img={mainSlideFine}/>
          <Slide img={mainSlideMypage}/>
        </S.SliderContainer>
      <S.Button onClick={nextSlide} src={rightArrow} style={{marginLeft:1480, marginTop:-350}}/>
    </S.Container>
  )
}