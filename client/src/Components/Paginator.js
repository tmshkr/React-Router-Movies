import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import "./Paginator.scss";

function Paginator(props) {
  const { handlePage, totalResults } = props;
  const [currentPage, setPage] = handlePage;
  const totalPages = Math.ceil(totalResults / 10);
  const items = [];

  function changePage(num) {
    document.getElementById("root").scrollIntoView();
    setPage(num);
  }

  const Item = (curr, i) => (
    <PaginationItem key={i} active={curr === i}>
      <PaginationLink onClick={() => changePage(i)}>{i}</PaginationLink>
    </PaginationItem>
  );

  if (totalPages - currentPage >= 3) {
    if (currentPage < 4) {
      for (let i = 1; i <= 5; i++) {
        items.push(Item(currentPage, i));
      }
    } else {
      for (let i = currentPage - 2; i < currentPage + 3; i++) {
        items.push(Item(currentPage, i));
      }
    }
  } else {
    for (let i = totalPages - 4; i <= totalPages; i++) {
      items.push(Item(currentPage, i));
    }
  }

  return (
    <Pagination className="pagination" aria-label="Page navigation example">
      <PaginationItem>
        <PaginationLink
          previous
          onClick={() => changePage(currentPage - 1)}
          disabled={currentPage === 1}
        />
      </PaginationItem>
      {items}
      <PaginationItem>
        <PaginationLink
          next
          onClick={() => changePage(currentPage + 1)}
          disabled={currentPage === totalPages}
        />
      </PaginationItem>
    </Pagination>
  );
}

export default Paginator;
