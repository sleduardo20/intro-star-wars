import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

import * as S from './styles';

interface IntroPros {
  text: string;
}

const Intro: React.FC<IntroPros> = ({ text }) => {
  const intro = useRef(null);

  useEffect(() => {
    gsap.to(intro.current, { opacity: 1, delay: 1, duration: 4.5 });
    gsap.to(intro.current, { opacity: 0, delay: 5.5, duration: 1.5 });
  }, []);

  return (
    <S.Container>
      <S.Intro ref={intro}>{text}</S.Intro>
    </S.Container>
  );
};

export default Intro;
