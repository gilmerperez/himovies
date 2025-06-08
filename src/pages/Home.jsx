import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <main>
        <div className={`container ${styles.container}`}>
          {/* Logo */}
          <a href="index.html">
            <img src="src/assets/images/logo.png" alt="HiMovies Logo" />
          </a>
          {/* Title */}
          <h1>HiMovies</h1>
          {/* Search Bar */}
          <section className={styles.searchBar}>
            <input type="text" placeholder="Enter Keywords..." />
            <button>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </section>
          {/* Social Links */}
          <section className={styles.socialLinks}>
            <a href="https://www.facebook.com/" target="_blank">
              <div className={`${styles.socialLink} ${styles.facebookSocialLink}`}>
                {/* <FontAwesomeIcon icon="fa-brands fa-facebook-f" /> */}
                <p>3.07 B</p>
              </div>
            </a>
            <a href="https://www.whatsapp.com/" target="_blank">
              <div className={`${styles.socialLink} ${styles.whatsappSocialLink}`}>
                <i className="fa-brands fa-whatsapp"></i>
                <p>3 B</p>
              </div>
            </a>
            <a href="https://www.youtube.com/" target="_blank">
              <div className={`${styles.socialLink} ${styles.youtubeSocialLink}`}>
                <i className="fa-brands fa-youtube"></i>
                <p>2.7 B</p>
              </div>
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <div className={`${styles.socialLink} ${styles.instagramSocialLink}`}>
                <i className="fa-brands fa-instagram"></i>
                <p>2 B</p>
              </div>
            </a>
            <a href="https://www.tiktok.com/" target="_blank">
              <div className={`${styles.socialLink} ${styles.tiktokSocialLink}`}>
                <i className="fa-brands fa-tiktok"></i>
                <p>1.84 B</p>
              </div>
            </a>
            <a href="https://telegram.org/" target="_blank">
              <div className={`${styles.socialLink} ${styles.telegramSocialLink}`}>
                <i className="fa-brands fa-telegram"></i>
                <p>1 B</p>
              </div>
            </a>
            <a href="https://www.messenger.com/" target="_blank">
              <div className={`${styles.socialLink} ${styles.messengerSocialLink}`}>
                <i className="fa-brands fa-facebook-messenger"></i>
                <p>965 M</p>
              </div>
            </a>
            <a href="https://www.snapchat.com/" target="_blank">
              <div className={`${styles.socialLink} ${styles.snapchatSocialLink}`}>
                <i className="fa-brands fa-snapchat"></i>
                <p>850 M</p>
              </div>
            </a>
            <a href="https://www.reddit.com/" target="_blank">
              <div className={`${styles.socialLink} ${styles.redditSocialLink}`}>
                <i className="fa-brands fa-reddit-alien"></i>
                <p>712 M</p>
              </div>
            </a>
            <a href="https://www.x.com/">
              <div className={`${styles.socialLink} ${styles.xSocialLink}`} target="_blank">
                <i className="fa-brands fa-x-twitter"></i>
                <p>563 M</p>
              </div>
            </a>
          </section>
          {/* Go to HiMovies Button */}
          <button className={styles.goToSiteButton}>Go to HiMovies</button>
          {/* Text */}
          <section className={styles.informationalText}>
            <p className={styles.heading}>Watch movies online for free and watch tv shows online free with HiMovies</p>
            <p className={styles.subheading}>
              If you are looking to stream and download free movies and TV shows, HiMovies might be your best friend.
              Although HiMovies has been around for only 3 years, with its outstanding features, it is currently one of
              most reliable and the best movies streaming site on the net.
            </p>
            <p className={styles.text}>
              <strong>Is HiMovies safe?</strong>
              <br />
              HiMovies is considered as a safe website by its users as the site is clean even after a sweep through its
              html code. And all the ads network are reviewed daily to make sure there will be no harmful ads on the
              site. We recommend you using a VPN to stay anonymous and to get better streaming speed.
            </p>
            <p className={styles.text}>
              <strong>What is HiMovies?</strong>
              <br />
              Launched in 2019, HiMovies aims to provide movies and TV shows for its users to stream movies and series
              online and download them in HD quality without paying any dime. HiMovies has been growing steadily since
              it the very first days of its launch.
            </p>
            <p className={styles.text}>
              <strong>Is HiMovies legal?</strong>
              <br />
              Streaming Free HD Movies on HiMovies is totally legal, it's only illegal if you download and store the
              movies on your device, that's why HiMovies currently does not have a download option.
            </p>
            <p className={styles.text}>
              <strong>Best alternative to HiMovies?</strong>
              <br />
              There are thousands of free online movie streaming sites to be found on the Internet, but only a small
              amount of them is safe and reliable. If you cannot access HiMovies, try some other similar sites such as
              123movies, gomovies, 6movies, and fmovies.
            </p>
            <p className={styles.text}>
              <strong>Is there a HiMovies App for Mobile/Tablet/TV?</strong>
              <br />
              To enjoy faster streaming speed, Chromecast built-in, absolutely no ads, and better customer care, you
              should install the HiMovies Android Movies Apk for your Android devices. You can find the HiMovies Android
              apk on this page
            </p>
          </section>
          <section className={styles.reviewText}>
            <p className={styles.heading}>
              Despite being the new kid on the block, HiMovies has gained massive support from movie enthusiasts all
              over the world thanks to these features
            </p>
            <p className={styles.subheading}>
              True happiness costs nothing, so does HiMovies. Let's take a look at the site's review to understand why
              you should stop paying for N*tflix and start using this site.
            </p>
            <p className={styles.text}>
              <strong>Safety</strong>
              <br />
              As stated above, HiMovies is a safe and reliable site to stream movies online as long as you take
              precautions. Use a VPN and AdBlock extension before accessing the site for your ultimate safety.
            </p>
            <p className={styles.text}>
              <strong>Extensive Content Library</strong>
              <br />
              HiMovies hosts a huge collection of up to 300,000 movies and TV shows. You can find here the latest
              releases, the goldie oldies, and even the regional gems. New titles are uploaded daily so expect it to get
              only bigger and bigger. Another good thing about HiMovies is that it provides multiple subtitles for our
              convenience. You can turn on English, Spanish, or German subtitle to enjoy the content to the fullest.
            </p>
            <p className={styles.text}>
              <strong>Fast Updates</strong>
              <br />
              HiMovies is among the fastest streaming sites to update the latest releases. New titles are uploaded on a
              daily basis to make sure your source of entertainment will never end.
            </p>
            <p className={styles.text}>
              <strong>Resolution</strong>
              <br />
              HiMovies offers the best resolution available. Most of its contents are in HD quality, however, expect CAM
              quality for the newly-released movies in theaters and SD quality for the oldies.{" "}
            </p>
            <p className={styles.text}>
              <strong>Streaming Experience</strong>
              <br />
              The streaming is as smooth as it is on paid streaming services. Loading speed is fast, seamless streaming
              is on point, ads are minimal, don't they sound too good to be true?
            </p>
            <p className={styles.text}>
              <strong>User-Friendly Interface</strong>
              <br />
              The site is extremely easy to browse and navigate. If you have a specific name in mind, you can enter its
              title in the search box. If not, you can search by categories or click on “View Full Site” to look for
              something that catches your eye. On the landing page, you can quickly check out the trending titles, the
              latest ones, and even movies and TV shows that are still not released yet.
            </p>
            <p className={styles.text}>
              <strong>Device Compatibility</strong>
              <br />
              As HiMovies is mobile friendly and Chromecast supported, you can stream its free movies and TV shows on
              your phones, tablets, or even big screen TVs.{" "}
            </p>
            <p className={styles.text}>
              <strong>Ads and Popups</strong>
              <br />
              HiMovies is not bombarded with ads. You will have to sit through one or two ads before the video starts
              but as ads is their only source of income, it's unavoidable. Popups can be avoided with an AdBlock
              extension.
            </p>
            <p className={styles.text}>
              <strong>No Account or Registration Needed</strong>
              <br />
              You don't need a signup or registration to enjoy free movies and TV shows at HiMovies. All you need is
              stable Internet, and a device to watch.
            </p>
            <p className={styles.text}>
              <strong>Customer Service</strong>
              <br />
              Unlike most free streaming sites, HiMovies listens to its users. The site is open to connect with on
              Facebook, Twitter, Telegram, email, etc. If you have any issue, simply shoot them a message. Or if
              streaming links are broken or your movie of interest is not available, make a request and they will have
              it fixed within a day.
            </p>
          </section>
          {/* Go to HiMovies Button */}
          <button className={styles.goToSiteButton}>Go to HiMovies</button>
        </div>
      </main>
    </>
  );
}

export default Home;
