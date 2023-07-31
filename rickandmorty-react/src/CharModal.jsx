import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

export const CharModal = ({ active, setActive, id }) => {
  const [data, setData] = useState([]);

  const url = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    axios
      .get(url)
      .then((resp) => {
        setData(resp.data);
        console.log(resp.data.origin.name);
        console.log(resp.data.location.name);
        console.log(resp.data.episode[0]);
      })
      .catch((error) => console.log(error));
  }, [url]);

  return (
    <div className="modal">
      <div className="modal_card">
        <img className="modal_character-backdrop" src={data.image} alt="char_image" />
        <ul className="modal_character-info column1">
          <div className="loader"></div>
          <li className="modal_card_bold">Name:</li>
          <li className="modal_card-discription">{data.name}</li>
          <li className="modal_card_bold">Status:</li>
          <li className="modal_card-discription">{data.status}</li>
          <li className="modal_card_bold">Species:</li>
          <li className="modal_card-discription">{data.species}</li>
        </ul>
        <ul className="modal_character-info column2">
          <div className="loader"></div>
          <li className="modal_card-discription">{data.origin.name}</li>
          <li className="modal_card_bold">Origin:</li>
          <li className="modal_card_bold">Location:</li>
          <li className="modal_card-discription">{data.location.name}</li>
          <li className="modal_card_bold">Gender:</li>
          <li className="modal_card-discription">{data.gender}</li>
          <li className="modal_card_bold">Впервые - в эпизоде:</li>
          <li className="modal_card-discription">
            {data.episode[0].split('https://rickandmortyapi.com/api/episode/').join(' ')}
          </li>
        </ul>
        <button type="button" className="modal_button-close">
          <img src=".assets/img/cross.png" alt="cross" />
        </button>
      </div>
    </div>
  );
};
