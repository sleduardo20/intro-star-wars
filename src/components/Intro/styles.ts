import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
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
