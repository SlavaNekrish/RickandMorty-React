import React from 'react';
import { Character } from './Character';
import { Pagination } from './Pagination';
import { useFetchData } from './useFetchData';

export const Main = () => {
  const { data } = useFetchData();
  let display;
  // const [currentPage, setCurrentPage] = useState(1);
  // const [recordsPerPage] = useState(8);

  // const indexOfLastRecord = currentPage * recordsPerPage;
  // const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  // const currentRecords = data.slice(indexOfFirstRecord)

  if (data.results) {
    display = data.results.map((character, index) => (
      <Character character={character} key={index} />
    ));
  } else {
    display = 'No characters found :/';
  }

  return (
    <div>
      <div className="character-conteiner">{display}</div>
      <Pagination />
    </div>
  );
};
