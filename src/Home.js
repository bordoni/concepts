import React from 'react';
import './Home.css';

const concepts = [
  {
    name: 'Button Group IAC',
    path: 'button-group-iac',
    description: 'A demonstration of using WordPress ToggleGroupControl for attendee registration fields.',
  },
  // Add more concepts here as they are created
];

function Home() {
  return (
    <div className="concepts-grid">
      {concepts.map((concept) => (
        <div key={concept.path} className="concept-card">
          <h2>{concept.name}</h2>
          <p>{concept.description}</p>
          <a 
            href={`/${concept.path}/`}
            className="demo-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Demo
          </a>
        </div>
      ))}
    </div>
  );
}

export default Home; 