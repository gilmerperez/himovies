import styles from "./Contact.module.css";

function Contact() {
  return (
    <>
      <title>Movix | Contact</title>
      <main>
        <div className={`container ${styles.container}`}>
          {/* Heading */}
          <h1 className={styles.heading}>Contact Us</h1>
          {/* Subheading */}
          <p className={styles.subheading}>
            Have a question or feature request? We're here to help. Submit the form below and we'll get back to you as
            soon as possible.
          </p>
          {/* Form */}
          <section className={styles.formContainer}>
            <form action="mailto:gilmer2002@outlook.com" method="post" enctype="text/plain">
              {/* Name Field */}
              <div className={`${styles.formGroup} ${styles.formFloating}`}>
                <input type="text" className={styles.formControl} id="name" placeholder="Name" required />
                <label for="name">Name</label>
              </div>
              {/* Subject Field */}
              <div className={`${styles.formGroup} ${styles.formFloating}`}>
                <input type="text" className={styles.formControl} id="subject" placeholder="Subject" required />
                <label for="subject">Subject</label>
              </div>
              {/* Email Address Field */}
              <div className={`${styles.formGroup} ${styles.formFloating}`}>
                <input type="email" className={styles.formControl} id="email" placeholder="Email Address" required />
                <label for="email">Email Address</label>
              </div>
              {/* Message Field */}
              <div className={`${styles.formGroup} ${styles.formFloating}`}>
                <textarea className={styles.formControl} id="message" placeholder="Message" required></textarea>
                <label for="message">Message</label>
              </div>
              {/* Submit Button */}
              <button type="submit" className={styles.submitBtn}>
                Send Message
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </form>
          </section>
        </div>
      </main>
    </>
  );
}

export default Contact;
