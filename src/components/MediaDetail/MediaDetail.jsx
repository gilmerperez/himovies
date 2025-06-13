import MediaBanner from "./MediaBanner";
import Loading from "../Loading/Loading";
import MediaDetails from "./MediaDetails";
import styles from "./MediaDetail.module.css";
import { useParams } from "react-router-dom";
import { fetchMediaDetails } from "../../utils/api";
import { useState, useEffect, useRef } from "react";

function MediaDetail({ mediaType }) {
  // State Hooks
  const { id } = useParams();
  const [error, setError] = useState("");
  const [media, setMedia] = useState(null);
  const [loading, setLoading] = useState(true);
  const isMounted = useRef(true);

  // Track mount status to avoid setting state on unmounted component
  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  // Update page title based on media
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
        if (isMounted.current) {
          setMedia(data);
        }
      } catch (error) {
        console.error("Failed to fetch details", error);
        if (isMounted.current) {
          setError("Sorry, something went wrong while fetching details.");
          setMedia(null);
        }
      } finally {
        if (isMounted.current) {
          setLoading(false);
        }
      }
    }
    getDetails();
  }, [mediaType, id]);

  return (
    <main>
      <div className={styles.main}>
        {error && (
          <div className={styles.error} role="alert">
            {error}
          </div>
        )}
        {loading ? (
          <Loading />
        ) : (
          media && (
            <>
              <MediaBanner backdropPath={media.backdrop_path} title={media.title || media.name} />
              <MediaDetails media={media} mediaType={mediaType} />
            </>
          )
        )}
      </div>
    </main>
  );
}

export default MediaDetail;
