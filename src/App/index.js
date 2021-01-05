import React from 'react';

import Header from './components/Header'
import MainContent from './layouts/MainContent'
import SectionSale from './layouts/SectionSale';

function HomePage() {
  return (
    <div className="home">
      <Header />
      <MainContent />
      <SectionSale />
    </div>
  );
}

export default HomePage;
