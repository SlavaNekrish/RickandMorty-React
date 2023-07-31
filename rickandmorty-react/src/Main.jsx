import React from 'react';
import { useState, useEffect } from 'react';
import { Character } from './Character';
import { Pagination } from './Pagination';
import { useFetchPaginData } from './useFetchPaginData';

export const Main = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [isPaginate, setPagination] = useState(false);
  const { data } = useFetchPaginData(pageNumber);
  const { info, results } = data;
  let display;

  // endless scroll logic

  // useEffect(() => {
  //   document.addEventListener('scroll', scrollHandler);
  //   return () => {
  //     document.removeEventListener('scroll', scrollHandler);
  //   };
  // }, []);

  // const scrollHandler = (e) => {
  //   if (
  //     !isPaginate &&
  //     e.target.documentElement.scrollHeight -
  //       (e.target.documentElement.scrollTop + window.innerHeight) <
  //       100 &&
  //     pageNumber < 43
  //   ) {
  //     setFetching(true);
  //     console.log('scroll');
  //     console.log(isPaginate);
  //   }
  //   console.log('scrollHeight', e.target.documentElement.scrollHeight);
  // console.log('scrollTop', e.target.documentElement.scrollTop);
  // console.log('innerHeight', window.innerHeight);
  // };

  if (data.results && isPaginate) {
    display = results.map((character, index) => <Character character={character} key={index} />);
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
            }}
            className="pagin-button">
            Pagination
          </button>
          <button
            onClick={(e) => {
              setPagination(false);
            }}
            className="non-pagin-button">
            Non-Pagination
          </button>
        </div>
        <div className="cards">{display}</div>
        {isPaginate && (
          <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber} />
        )}
      </div>
    </div>
  );
};
