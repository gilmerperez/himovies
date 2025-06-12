import styles from "./Pagination.module.css";

function Pagination({ page, onPageChange, totalPages = 5 }) {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className={styles.paginationContainer} aria-label="Page Navigation">
      <ul className={styles.paginationItems}>
        {/* Left Arrow */}
        <li className={`${styles.pageItem} ${page === 1 ? styles.disabled : ""}`}>
          <button
            className={styles.pageLink}
            onClick={() => page > 1 && onPageChange(page - 1)}
            disabled={page === 1}
            aria-label="Previous page"
          >
            <i className="fa-solid fa-left-long"></i>
          </button>
        </li>
        {/* Page Number */}
        {pageNumbers.map((num) => (
          <li key={num} className={`${styles.pageItem} ${page === num ? styles.active : ""}`}>
            <button
              className={styles.pageLink}
              onClick={() => onPageChange(num)}
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
            onClick={() => page < totalPages && onPageChange(page + 1)}
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
