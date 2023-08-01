import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Character } from './Character';
import { Pagination } from './Pagination';
import { CharModal } from './CharModal';
import ScrollToTop from './ScrollToTop';

export const Main = () => {
  const [dataResults, setDataResults] = useState([]);
  const [dataInfo, setDataInfo] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [isPaginate, setPagination] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [idModal, setIdModal] = useState(1);
  const [modalActive, setmodalActive] = useState(false);
  let display;
  console.log(idModal);

  const url = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

  // Fetch data for scrolling

  useEffect(() => {
    // console.log('useEffect ran');
    if (fetching && dataInfo.next !== null && !isPaginate) {
      console.log('fetching');
      axios
        .get(url)
        .then((response) => {
          setDataResults([...dataResults, ...response.data.results]);
          setDataInfo(response.data.info);
          setPageNumber((prevState) => prevState + 1);
        })
        .catch((error) => console.log(error))
        .finally(() => setFetching(false));
    }
  }, [fetching, isPaginate]);

  // Fetch data for pagination

  useEffect(() => {
    if (isPaginate) {
      axios
        .get(url)
        .then((response) => {
          setDataResults(response.data.results);
          setDataInfo(response.data.info);
        })
        .catch((error) => console.log(error));
    }
  }, [url]);

  // endless scroll logic

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return function () {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const scrollHandler = (e) => {
    if (
      !isPaginate &&
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
        100
    ) {
      setFetching(true);
    }
  };

  if (dataResults) {
    display = dataResults.map((character, index) => (
      <Character
        character={character}
        key={index}
        setIdModal={setIdModal}
        setModalActive={setmodalActive}
      />
    ));
  } else {
    display = 'No characters found :/';
  }

  return (
    <div>
      <div className="character-conteiner">
        <div className="buttons">
          <button
            onClick={(e) => {
              setPagination(true);
              console.log('isPaginate', isPaginate);
              setPageNumber(1);
              setDataResults([]);
              setFetching(false);
            }}
            className="pagin-button">
            Pagination
          </button>
          <button
            onClick={(e) => {
              setPagination(false);
              console.log('isPaginate', isPaginate);
              setPageNumber(1);
              setDataResults([]);
              setFetching(true);
            }}
            className="non-pagin-button">
            Non-Pagination
          </button>
        </div>
        <div className="cards">{display}</div>
        {isPaginate && (
          <Pagination info={dataInfo} pageNumber={pageNumber} setPageNumber={setPageNumber} />
        )}
      </div>
      <CharModal active={modalActive} setActive={setmodalActive} id={idModal} />
      {!isPaginate && <ScrollToTop />}
    </div>
  );
};
