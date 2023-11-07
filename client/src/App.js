import React from 'react';
import styles from './style';
import { Card, Navbar } from './components';

function App() {
  return (
    <div className="bg-neutral-900 w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-white ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          Hero
        </div>
      </div>
    </div>
  );
}

export default App;
