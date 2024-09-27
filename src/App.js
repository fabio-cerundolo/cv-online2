// Percorso file: src/App.js

import React from 'react';
import './App.css';
import CVComponent from './components/CVComponent'; // Assicurati di importare correttamente il componente

function App() {
  return (
    <div className="App">
      {/* Mostra solo il componente CV */}
      <main>
        <CVComponent />
      </main>
    </div>
  );
}

export default App;
