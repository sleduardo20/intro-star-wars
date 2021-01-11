import React from 'react';
import GlobalStyles from './styles/GlobalStyles';

import Intro from './components/Intro';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Intro text="A não pouco tempo, em uma galáxia muito perto..." />
    </>
  );
};

export default App;
