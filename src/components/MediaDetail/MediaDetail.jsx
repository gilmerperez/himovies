import Loading from "../Loading/Loading";
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

  // Change page title according to media
  useEffect(() => {
    if (media) {
      document.title = `Movix | ${media.title || media.name}`;
    } else {
      document.title = "Movix | Loading...";
    }
  }, [media]);

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
      <main>
        <div className={styles.main}>
          {/* Error Message */}
          {error && <div className={styles.error}>{error}</div>}
          {/* Loading or Media Content */}
          {loading ? (
            <Loading />
          ) : (
            <>
              <MediaBanner backdropPath={media.backdrop_path} title={media.title || media.name} />
              <MediaDetails media={media} mediaType={mediaType} />
            </>
          )}
        </div>
      </main>
    </>
  );
}

export default MediaDetail;
