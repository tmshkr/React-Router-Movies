import React, { useEffect, useState } from "react";
import axios from "axios";
import { Alert } from "reactstrap";
import { useLocation } from "react-router-dom";
import MovieList from "./MovieList";
import ReactPaginate from "react-paginate";
import key from "../config";
import "./SearchResults.scss";

function SearchResults(props) {
  const location = useLocation();
  const q = location.search.match(/q=([^&]*)/);

  const [searchResults, setSearchResults] = useState({});
  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setPage] = useState(1);

  const handleSearch = str => {
    const url = `https://www.omdbapi.com/?s=${str}&page=${currentPage}&apikey=${key}`;
    axios.get(url).then(({ data }) => {
      console.log(data);
      let filtered;
      if (data.Search) {
        filtered = data.Search.filter(movie => movie.Poster !== "N/A");
      }
      setTotalResults(data.totalResults);
      setSearchResults(filtered);
    });
  };

  const handlePageClick = ({ selected }) => setPage(selected + 1);

  useEffect(() => {
    if (q && q[1]) {
      handleSearch(q[1]);
    }
  }, [location, currentPage]);

  return (
    <div className="search-results">
      {totalResults > 0 ? (
        <>
          <MovieList movies={searchResults} />
          <nav className="pagination" aria-label="Pagination">
            <ReactPaginate
              previousLabel={"‹"}
              previousClassName={"page-item"}
              nextLabel={"›"}
              nextClassName={"page-item"}
              breakLabel={"..."}
              breakClassName={"page-item"}
              breakLinkClassName={"page-link"}
              pageCount={Math.ceil(totalResults / 10)}
              pageClassName={"page-item"}
              pageLinkClassName={"page-link"}
              previousLinkClassName={"page-link"}
              nextLinkClassName={"page-link"}
              marginPagesDisplayed={2}
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"}
            />
          </nav>
        </>
      ) : (
        <Alert color="secondary">
          Search for a movie using the search bar and the results will appear
          here
        </Alert>
      )}
    </div>
  );
}

export default SearchResults;
