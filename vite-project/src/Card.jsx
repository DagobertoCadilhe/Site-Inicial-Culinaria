import React from 'react';

function Card() {
  return (
    <div className="card my-card">
      <img className="card-image" src="https://via.placeholder.com/286x180" alt="placeholder" />
      <div className="card-body">
        <h5 className="card-title">Placeholder Title</h5>
        <p className="card-text">Placeholder description.</p>
      </div>
    </div>
  );
}

export default Card;
