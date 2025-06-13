import styles from "./Pagination.module.css";
import { useMemo, useCallback } from "react";

function Pagination({ page, onPageChange, totalPages = 5 }) {
  // Generate page numbers based on totalPages, memoized for performance
  const pageNumbers = useMemo(() => Array.from({ length: totalPages }, (_, i) => i + 1), [totalPages]);

  // * Handlers wrapped in useCallback to optimize renders
  // Navigate to previous page
  const handlePrevious = useCallback(() => {
    if (page > 1) onPageChange(page - 1);
  }, [page, onPageChange]);

  // Navigate to specific page
  const handlePageClick = useCallback(
    (num) => {
      onPageChange(num);
    },
    [onPageChange]
  );

  // Navigate to next page
  const handleNext = useCallback(() => {
    if (page < totalPages) onPageChange(page + 1);
  }, [page, totalPages, onPageChange]);

  return (
    <nav className={styles.paginationContainer} aria-label="Page Navigation">
      <ul className={styles.paginationItems}>
        {/* Left Arrow */}
        <li className={`${styles.pageItem} ${page === 1 ? styles.disabled : ""}`}>
          <button className={styles.pageLink} onClick={handlePrevious} disabled={page === 1} aria-label="Previous page">
            <i className="fa-solid fa-left-long"></i>
          </button>
        </li>
        {/* Page Numbers */}
        {pageNumbers.map((num) => (
          <li key={num} className={`${styles.pageItem} ${page === num ? styles.active : ""}`}>
            <button
              className={styles.pageLink}
              onClick={() => handlePageClick(num)}
              aria-current={page === num ? "page" : undefined}
              aria-label={`Page ${num}`}
            >
              {num}
            </button>
          </li>
        ))}
        {/* Right Arrow */}
        <li className={`${styles.pageItem} ${page === totalPages ? styles.disabled : ""}`}>
          <button
            className={styles.pageLink}
            onClick={handleNext}
            disabled={page === totalPages}
            aria-label="Next page"
          >
            <i className="fa-solid fa-right-long"></i>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
