import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import './App.css';

function App() {
  return (
    <Router basename="/concepts">
      <div className="App">
        <header className="App-header">
          <h1>Bordoni Concepts</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App; 