import React from 'react';
import './App.css';

const myTaxNumber = '8943150958';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1 data-testid="tax-number">
          {myTaxNumber.split('').map((char, index) => (
            <span className={`tax-number-letter-${index}`}>{char}</span>
          ))}
        </h1>
      </header>
    </div>
  );
}

export default App;
