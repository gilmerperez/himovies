import styles from "./TermsOfService.module.css";

function TermsOfService() {
  return (
    <>
      <head>
        <title>HiMovies | Terms of Service</title>
      </head>

      <main>
        <div className={`container ${styles.container}`}>
          {/* Title */}
          <h1 className={styles.heading}>Terms of Service</h1>
          {/* Description */}
          <p className={styles.terms}>
            This Agreement contains the complete terms and conditions that apply to your participation in our site. If
            you wish to use the site including its tools and services please read these terms of use carefully. By
            accessing this site or using any part of the site or any content or services hereof, you agree to become
            bound by these terms and conditions. If you do not agree to all the terms and conditions, then you may not
            access the site or use the content or any services in the site.
          </p>
          {/* Terms */}
          <p className={styles.termHeading}>Modifications of Terms and Conditions</p>
          <p className={styles.termText}>
            Amendments to this agreement can be made and effected by us from time to time without specific notice to
            your end. Agreement posted on the Site reflects the latest agreement and you should carefully review the
            same before you use our site.
          </p>
          <p className={styles.termHeading}>Registration Information</p>
          <p className={styles.termText}>
            For you to complete the sign-up process in our site, you must provide your full legal name, current address,
            a valid email address, member name and any other information needed in order to complete the signup process.
            You must qualify that you are 18 years or older and must be responsible for keeping your password secure and
            be responsible for all activities and contents that are uploaded under your account. You must not transmit
            any worms or viruses or any code of a destructive nature. Any information provided by you or gathered by the
            site or third parties during any visit to the site shall be subject to the terms of YesMovies.to's Privacy
            Policy.
          </p>
          <p className={styles.termHeading}>Use of the site</p>
          <p className={styles.termText}>
            The Site allows you to post offers, sell, advertise, bid and shop online. However, you are prohibited to do
            the following acts, to wit: (a) use our sites, including its services and or tools if you are not able to
            form legally binding contracts, are under the age of 18, or are temporarily or indefinitely suspended from
            using our sites, services, or tools (b) posting of an items in inappropriate category or areas on our sites
            and services; (c) collecting information about users' personal information; (d) maneuvering the price of any
            item or interfere with other users' listings; (f) post false, inaccurate, misleading, defamatory, or
            libelous content; (g) take any action that may damage the rating system.
          </p>
        </div>
      </main>
    </>
  );
}

export default TermsOfService;
