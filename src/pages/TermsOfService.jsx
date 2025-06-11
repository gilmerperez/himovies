import styles from "./TermsOfService.module.css";

function TermsOfService() {
  return (
    <>
      <title>Movix | Terms of Service</title>
      <main>
        <div className={`container ${styles.container}`}>
          {/* Heading */}
          <h1 className={styles.heading}>Terms of Service</h1>
          <section className={styles.terms}>
            {/* Description */}
            <p className={styles.description}>
              These Terms of Service govern your use of this website. By accessing or using this site, you agree to
              these terms. If you do not agree, please do not use the site.
            </p>
            {/* No Account Required */}
            <p className={styles.termHeading}>User Accounts</p>
            <p className={styles.termText}>
              No user accounts, registrations, or logins are required to use this site. We do not collect personal
              information or track users.
            </p>
            {/* Usage Restrictions */}
            <p className={styles.termHeading}>Acceptable Use</p>
            <p className={styles.termText}>
              You agree to use this site for lawful, non-commercial purposes only. You may not misuse the content or
              attempt to gain unauthorized access to the site or its services.
            </p>
            {/* Updates */}
            <p className={styles.termHeading}>Changes to These Terms</p>
            <p className={styles.termText}>
              These terms may be updated periodically. Continued use of the site after changes are made implies
              acceptance of the updated terms. Last updated: {new Date().getFullYear()}.
            </p>
            {/* Intellectual Property */}
            <p className={styles.termHeading}>Intellectual Property</p>
            <p className={styles.termText}>
              All movie and TV show metadata, trailers, and images are provided by The Movie Database (TMDB) via public
              APIs and remain the property of their respective owners. This site does not host or stream any video
              content directly.
            </p>
            {/* Content and Purpose */}
            <p className={styles.termHeading}>Purpose of the Site</p>
            <p className={styles.termText}>
              This site is a personal portfolio project intended for educational and demonstrative purposes only. It
              allows users to browse public information about movies and TV shows, including trailers, descriptions,
              cast details, and ratings, sourced from third-party APIs such as TMDB.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}

export default TermsOfService;
