import React, { useEffect } from 'react';
import styles from './style';
import { Navbar, Hero, Movies, Footer } from './components';

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
          <Hero />
          <Movies />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
