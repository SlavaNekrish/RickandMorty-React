import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import cross from './img/cross.png';

export const CharModal = ({ active, setActive, id }) => {
  const [data, setData] = useState([]);
  const [originName, setOriginName] = useState([]);
  const [lacationName, setLocationName] = useState([]);
  const [episode, setEpisode] = useState([]);

  const url = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    axios
      .get(url)
      .then((resp) => {
        setData(resp.data);
        setOriginName(resp.data.origin.name);
        setLocationName(resp.data.location.name);
        setEpisode(
          resp.data.episode[0].split('https://rickandmortyapi.com/api/episode/').join(' '),
        );
      })
      .catch((error) => console.log(error));
  }, [url]);

  return (
    <div
      className={active ? 'modal modal--show' : 'modal'}
      onClick={() => {
        setActive(false);
        document.body.style.overflow = 'auto';
      }}>
      <div className="modal_card" onClick={(e) => e.stopPropagation()}>
        <img className="modal_character-backdrop" src={data.image} alt="char_image" />
        <ul className="modal_character-info column1">
          <li className="modal_card_bold">Name:</li>
          <li className="modal_card-discription">{data.name}</li>
          <li className="modal_card_bold">Status:</li>
          <li className="modal_card-discription">{data.status}</li>
          <li className="modal_card_bold">Species:</li>
          <li className="modal_card-discription">{data.species}</li>
        </ul>
        <ul className="modal_character-info column2">
          <li className="modal_card_bold">Origin:</li>
          <li className="modal_card-discription">{originName}</li>
          <li className="modal_card_bold">Location:</li>
          <li className="modal_card-discription">{lacationName}</li>
          <li className="modal_card_bold">Gender:</li>
          <li className="modal_card-discription">{data.gender}</li>
          <li className="modal_card_bold">Впервые - в эпизоде:</li>
          <li className="modal_card-discription">{episode}</li>
        </ul>
        <button type="button" className="modal_button-close">
          <img
            src={cross}
            alt="cross"
            onClick={() => {
              setActive(false);
              document.body.style.overflow = 'auto';
            }}
          />
        </button>
      </div>
    </div>
  );
};
