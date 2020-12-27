import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;

  &::before {
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 1) 20%,
      rgba(0, 0, 0, 0) 40%,
      rgba(0, 0, 0, 0) 100%
    );
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    z-index: 5;
  }
`;

export const Star = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  /* background: red; */

  &::after {
    content: ' ';
    position: absolute;
    border-radius: 50%;
    top: 0;
    left: 0;
    width: 2px;
    height: 2px;
    background: transparent;
    box-shadow: 100px 122px #ffff, 500px 756px #ffff;
    z-index: 6;
  }
`;

export const Intro = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;

  p {
    color: rgb(75, 213, 238);
    font-size: 1.25rem;
  }
`;

export const Title = styled(Intro)`
  width: 16rem;
  align-items: center;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 30%;
  z-index: 10;
`;

export const Crawl = styled.section`
  width: 90%;
  height: 80rem;
  font-size: 300%;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) perspective(300px) rotateX(28deg);
  transform-origin: 50% 100%;
`;

export const CrawlContent = styled.div`
  position: absolute;
  top: 100%;
  z-index: 10;

  p {
    font-weight: 700;
    line-height: 1.33;
    margin-bottom: 4rem;
    text-align: justify;
  }
`;

export const EpisodeNumber = styled.h1`
  font-weight: 600;
  margin-bottom: 5rem;
  text-align: center;
`;

export const EpisodeTitle = styled.h2`
  font-size: 250%;
  font-weight: 500;
  line-height: 1;
  margin-bottom: 7rem;
  transform: scale(1, 1.5);
  text-align: center;
`;

export const Volume = styled.button`
  background: transparent;
  outline: none;
  border: 0;
  position: absolute;
  top: 2.8rem;
  left: 1.8rem;
  z-index: 50;

  img {
    height: 2rem;
  }
`;
