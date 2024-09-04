"use client";
import { useState } from "react";
import styles from "./Pagination.module.scss";

const Pagination = ({ totalPages }: any) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = (page: any) => {
    setCurrentPage(page);
  };

  const handlePreviousClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const renderPages = () => {
    const pages = [];
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);

    if (startPage > 1) {
      pages.push(
        <button
          key={1}
          onClick={() => handlePageClick(1)}
          className={`${styles.pageButton} ${
            currentPage === 1 ? styles.active : ""
          }`}
        >
          1
        </button>
      );

      if (startPage > 2) {
        pages.push(
          <span key="startEllipsis" className={styles.ellipsis}>
            ...
          </span>
        );
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          className={`${styles.pageButton} ${
            currentPage === i ? styles.active : ""
          }`}
        >
          {i}
        </button>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push(
          <span key="endEllipsis" className={styles.ellipsis}>
            ...
          </span>
        );
      }

      pages.push(
        <button
          key={totalPages}
          onClick={() => handlePageClick(totalPages)}
          className={`${styles.pageButton} ${
            currentPage === totalPages ? styles.active : ""
          }`}
        >
          {totalPages}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className={styles.pagination}>
      <button
        onClick={handlePreviousClick}
        disabled={currentPage === 1}
        className={styles.navButton}
      >
        Previous
      </button>
      {renderPages()}
      <button
        onClick={handleNextClick}
        disabled={currentPage === totalPages}
        className={styles.navButton}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
