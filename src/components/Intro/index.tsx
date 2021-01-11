import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

import logo from '../../assets/img/logo.svg';

import * as S from './styles';

interface IntroPros {
  text: string;
}

const Intro: React.FC<IntroPros> = ({ text }) => {
  const loading = useRef(null);
  const intro = useRef(null);
  const title = useRef(null);
  const content = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline();

    timeline
      .from(loading.current, {
        opacity: 1,
        duration: 1.5,
      })
      .to(loading.current, {
        opacity: 0,
        delay: 0.7,
        duration: 1,
      })
      .from(intro.current, {
        opacity: 0,
        delay: 0.7,
        duration: 3,
      })
      .to(intro.current, {
        opacity: 1,
        duration: 1.5,
      })
      .to(intro.current, {
        opacity: 0,
        duration: 1.5,
      })
      .from(title.current, {
        opacity: 0,
        scale: 2.75,
        duration: 3.5,
      })
      .to(title.current, {
        delay: 0.5,
        scale: 0.05,
        ease: 'power2',
        duration: 1.5,
      })
      .to(title.current, { opacity: 0, duration: 1.5 }, '-=1.5')
      .to(content.current, {
        top: '-170%',
        delay: 0.5,
        opacity: 0,
        duration: 200,
      });
  }, []);

  return (
    <S.Container>
      <S.Intro ref={loading}>
        <p>Carregando...</p>
      </S.Intro>
      <S.Intro ref={intro}>
        <p>{text}</p>
      </S.Intro>
      <S.Title ref={title}>
        <img src={logo} alt="Code Wars title" />
      </S.Title>
      <S.Crawl>
        <S.CrawlContent ref={content}>
          <S.EpisodeNumber>Episódio I</S.EpisodeNumber>
          <S.EpisodeTitle>Uma Nova Jornada</S.EpisodeTitle>
          <p>
            Durante oito anos no planeta Rad Informática, o analista de sistemas
            teve muitas consquistas pessoais e profissionais, foram muitos
            desafios, e a meta superada a sua patente e reconhecimento na equipe
            crescia em rítmo acelerado.
          </p>
          <p>
            Foi analista de suporte, analista de implantação, homologador, e
            estava atuando como desenvolvedor de relatórios gerencias, seu
            desejo por conhecimento e aperfeiçoamento estava aumentando a cada
            dia.
          </p>
          <p>
            Mas o destino fez a vida do desenvolvedor mudar de direção, no ano
            de 2019 ele e sua família resolveram partir para outro universo em
            busca de novas descorbertas, procurando por culturas diferentes em
            outros planetas.
          </p>
          <p>
            Com o objetivo de realocar nesses planetas o desenvolvedor resolveu
            aprender uma nova linguagem o JavaScript, e descobriu algo incrível.
          </p>
          <p>
            Nasce uma paixão por desenvolvimento de interfaces, agora ele estuda
            tudo sobre essa área. E nessa nova jornada o analista agora
            desenvolvedor de relatórios, busca uma oportunidade de começar uma
            nova carreia como Desenvolvedor Front-End.
          </p>
        </S.CrawlContent>
      </S.Crawl>

      <S.Star />
    </S.Container>
  );
};

export default Intro;
