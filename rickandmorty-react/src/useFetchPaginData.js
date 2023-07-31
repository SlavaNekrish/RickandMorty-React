import { useState, useEffect } from 'react';

export const useFetchPaginData = (pageNumber) => {
  const [data, setData] = useState([]);

  const url = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    getData();
  }, [url]);
  return { data };
};
