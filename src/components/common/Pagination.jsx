import React from "react";

import "./Pagination.css";

function Pagination({ postsPerPage, totalPosts, paginate }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination">
      {pageNumbers.map((number) => (
        <li key={number} className="page-item">
          <button className="page-link" onClick={() => paginate(number)}>
            Page {number}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Pagination;
