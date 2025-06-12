import Loading from "../Loading";
import MediaBanner from "./MediaBanner";
import MediaDetails from "./MediaDetails";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./MediaDetail.module.css";
import { fetchMediaDetails } from "../../utils/api";

function MediaDetail({ mediaType }) {
  const { id } = useParams();
  const [error, setError] = useState("");
  const [media, setMedia] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getDetails() {
      setError("");
      setLoading(true);
      try {
        const data = await fetchMediaDetails(mediaType, id);
        setMedia(data);
      } catch (error) {
        console.error("Failed to fetch details", error);
        setError("Sorry, something went wrong while fetching details.");
      } finally {
        setLoading(false);
      }
    }
    getDetails();
  }, [mediaType, id]);

  return (
    <>
      <title>Movix | {media ? media.title || media.name : "Loading..."}</title>
      <main>
        <div className={styles.main}>
          {/* Error Message */}
          {error && <div className={styles.error}>{error}</div>}
          {/* Loading or Media Content */}
          {loading ? (
            <Loading />
          ) : (
            <>
              <MediaBanner media={media} />
              <MediaDetails media={media} mediaType={mediaType} />
            </>
          )}
        </div>
      </main>
    </>
  );
}

export default MediaDetail;
