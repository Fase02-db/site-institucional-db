import React from 'react';
import { Link } from 'react-router-dom';

const Cases: React.FC = () => {
  return (
    <div>
      <h1 style={{fontFamily: 'TTSupermolot-Regular'}}>Cases</h1>
      <Link to="/cases"></Link>
    </div>
  );
};

export default Cases;