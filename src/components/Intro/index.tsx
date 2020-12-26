import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

import logo from '../../assets/img/logo.svg';
import * as S from './styles';

interface IntroPros {
  text: string;
}

const Intro: React.FC<IntroPros> = ({ text }) => {
  const intro = useRef(null);
  const title = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(intro.current, {
      opacity: 1,
      delay: 0.7,
      duration: 4.5,
    })
      .to(intro.current, { opacity: 0, duration: 1.5 })
      .set(title.current, { opacity: 1, scale: 2.75 })
      .to(title.current, { scale: 0.85, ease: 'power2', duration: 8 })
      .to(title.current, { opacity: 0, duration: 1.5 }, '-=1.5');
  }, []);

  return (
    <S.Container>
      <S.Intro ref={intro}>
        <p>{text}</p>
      </S.Intro>
      <S.Title ref={title}>
        <img src={logo} alt="Code Wars title" />
      </S.Title>
      <S.Crawl>
        <S.CrawlContent>
          <S.EpisodeNumber>Episode X</S.EpisodeNumber>
          <S.EpisodeTitle>The App Eduardo</S.EpisodeTitle>
          <p>
            The Development Team Lead has vanished. In her absence, the sinister
            FUNCTIONAL BUG has risen from the ashes of the CI Tool and will not
            rest until the last developer has been destroyed.
          </p>
          <p>
            With the support of the QA TEAM, the Software Developer leads a
            brave RESISTANCE. He is desperate to find his Lead and gain her help
            in restoring peace and justice to the repository.
          </p>
          <p>
            The Developer has sent his most daring editor theme on a secret
            mission to the production branch, where an old ally has discovered a
            clue to the Lead’s whereabouts....
          </p>
        </S.CrawlContent>
      </S.Crawl>
    </S.Container>
  );
};

export default Intro;
