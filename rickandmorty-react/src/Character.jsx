import React from 'react';

export const Character = ({ character, setIdModal }) => {
  return (
    <div className="card" onClick={() => setIdModal(character.id)}>
      <div className="card_cover-inner">
        <img src={character.image} alt="character" className="card_cover" />
        <div className="card_cover--darkened"></div>
      </div>
      <div className="card_info">
        <div className="card_title">{character.name}</div>
      </div>
    </div>
  );
};
