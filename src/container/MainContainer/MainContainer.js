import React from 'react';
import Main from '../../component/Main/Main';
import { mainBackground } from '../../assets/main';

const MainContainer = () => {
  const img = mainBackground;

  return (
    <div>
      <Main img={img} />
    </div>
  );
};

export default MainContainer;