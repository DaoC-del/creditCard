import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the Decentralized Room Manager</h1>
      <p>
        <Link to="/room">Go to Room</Link>
      </p>
    </div>
  );
};

export default Home;
