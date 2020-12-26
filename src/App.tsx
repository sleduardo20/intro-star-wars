import React from 'react';
import GlobalStyles from './styles/GlobalStyles';

import Intro from './components/Intro';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Intro text="A long time ago, in a galaxy far, far away..." />
    </>
  );
};

export default App;
