import React from 'react';
import * as S from './style';
// import { mainBackground } from '../../assets/main';
import Header from "../Header/Header";
import Footer from "./Footer/Footer";
import Slider from './Slide/Slider';

const Main = ({img}) => {
  return (
    <S.Main>
      <Header />
      <S.Container>
          <S.Inner>
            <S.BackgroundImg img={img}></S.BackgroundImg>
            <S.SlideWrapper>
              <Slider />
            </S.SlideWrapper>
          </S.Inner>
          <Footer />
      </S.Container>
    </S.Main>
  );
};

export default Main;