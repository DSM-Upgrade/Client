import React from 'react';
import * as S from './style';
import { mainBackground } from '../../assets/main';
import Header from "../Header/Header";
import Footer from "./Footer/Footer";

const Main = () => {
  return (
    <S.Main>
      <Header />
      <S.Container>
          <S.Inner>
            <S.BackgroundImg img={mainBackground}></S.BackgroundImg>
            <S.Glass></S.Glass>
          </S.Inner>
          <Footer />
      </S.Container>
    </S.Main>
  );
};

export default Main;