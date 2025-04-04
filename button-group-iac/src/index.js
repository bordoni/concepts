import React from 'react';
import ReactDOM from 'react-dom/client';
import AttendeeFields from './components/AttendeeFields';
import './index.css';

const BASE_PATH = '/concepts';

function App() {
  return (
    <div className="App">
      <header className="concept-header">
        <a href={`${BASE_PATH}/`} className="home-link">
          ← Back to Concepts
        </a>
        <h1>Bordoni Concepts</h1>
      </header>
      <AttendeeFields />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 