import React, { useEffect } from 'react';
import styles from './style';
import { Navbar, Footer, Home, TVShows, Login, MovieDescription } from './components';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="w-full overflow-hidden">
      <div className={`bg-neutral-900 ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tvshows" element={<TVShows />} />
            <Route path='/login' element={<Login />} />
            <Route path='/movie/:id' element={<MovieDescription />} />
          </Routes>
        </div>
      </div>
          <Footer />
    </div>
  );
}

export default App;
