import React from 'react';
import ReactPaginate from 'react-paginate';

export const Pagination = ({ info, pageNumber, setPageNumber }) => {
  return (
    <ReactPaginate
      className="pagination"
      forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
      nextLabel="Next"
      previousLabel="Prev"
      previousClassName="button-primary"
      nextClassName="button-primary"
      pageClassName="button-page"
      pageLinkClassName="button-pageLink"
      activeClassName="button-page-active"
      pageRangeDisplayed={2}
      marginPagesDisplayed={1}
      onPageChange={(data) => {
        setPageNumber(data.selected + 1);
      }}
      pageCount={info?.pages}
    />
  );
};
