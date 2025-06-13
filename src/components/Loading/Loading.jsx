import styles from "./Loading.module.css";

function Loading() {
  return (
    <>
      {/* Loading Component */}
      <div className={styles.loadingContainer}>
        <h2 className={styles.loadingText}>Loading...</h2>
      </div>
    </>
  );
}

export default Loading;
