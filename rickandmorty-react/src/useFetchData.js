import { useState, useEffect } from 'react';
const url = 'https://rickandmortyapi.com/api/character/';

export const useFetchData = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);
  return { data };
};
