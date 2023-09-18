import React from 'react';

function PersonCard({ image, firstname, lastname }) {
  return (
    <div className="personCard">
      <img src={image} alt="Person" />
      <p>{firstname} {lastname}</p>
    </div>
  );
}

export default PersonCard;
