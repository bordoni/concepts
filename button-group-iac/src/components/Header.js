import React from 'react';
import './Header.css';

const BASE_PATH = '/concepts';

function Header() {
  return (
    <header className="concept-header">
      <a href={`${BASE_PATH}/`} className="home-link">
        ← Back to Concepts
      </a>
      <h1>Bordoni Concepts</h1>
    </header>
  );
}

export default Header; 