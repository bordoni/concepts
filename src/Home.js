import React from 'react';
import { Button } from '@wordpress/components';
import './Home.css';

const BASE_PATH = process.env.REACT_APP_BASE_PATH || '/concepts';

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
          <Button
            href={`${BASE_PATH}/${concept.path}/`}
            variant="primary"
            target="_blank"
            rel="noopener noreferrer"
            className="demo-link"
          >
            View Demo
          </Button>
        </div>
      ))}
    </div>
  );
}

export default Home; 