import React from "react";
import { Link } from "react-router-dom";

const Pagination = (props) => {
  const { page, pages, keyword = "" } = props;

  return (
    pages > 1 && (
      <nav>
        <ul className="pagination">
          {[...Array(pages).keys()].map((item) => (
            <li
              className={`pagination-item ${item + 1 == page ? "active" : ""}`}
              key={item + 1}
            >
              <Link
                className="page-link"
                // style={(active) => ({
                //   color: active ? "white" : "none",
                //   backgroundColor: active ? "#f7941d" : "none",
                // })}
                to={
                  keyword
                    ? `/search/${keyword}/page/${item + 1}`
                    : `/page/${item + 1}`
                }
                // activeClassName="active"
              >
                {item + 1}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    )
  );
};

export default Pagination;
