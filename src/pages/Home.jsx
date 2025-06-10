import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <main>
        <div className={`container ${styles.container}`}>
          {/* Logo */}
          <img src="src/assets/images/logo.png" alt="HiMovies Logo" className={styles.logo} />
          {/* Heading */}
          <h1 className={styles.heading}>HiMovies</h1>
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
                <i class="fa-brands fa-facebook-f"></i>
                <p>3.07B</p>
              </div>
            </a>
            <a href="https://www.whatsapp.com/" target="_blank">
              <div className={`${styles.socialLink} ${styles.whatsappSocialLink}`}>
                <i className="fa-brands fa-whatsapp"></i>
                <p>3B</p>
              </div>
            </a>
            <a href="https://www.youtube.com/" target="_blank">
              <div className={`${styles.socialLink} ${styles.youtubeSocialLink}`}>
                <i className="fa-brands fa-youtube"></i>
                <p>2.7B</p>
              </div>
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <div className={`${styles.socialLink} ${styles.instagramSocialLink}`}>
                <i className="fa-brands fa-instagram"></i>
                <p>2B</p>
              </div>
            </a>
            <a href="https://www.tiktok.com/" target="_blank">
              <div className={`${styles.socialLink} ${styles.tiktokSocialLink}`}>
                <i className="fa-brands fa-tiktok"></i>
                <p>1.84B</p>
              </div>
            </a>

            <a href="https://www.snapchat.com/" target="_blank">
              <div className={`${styles.socialLink} ${styles.snapchatSocialLink}`}>
                <i className="fa-brands fa-snapchat"></i>
                <p>850M</p>
              </div>
            </a>
            <a href="https://www.reddit.com/" target="_blank">
              <div className={`${styles.socialLink} ${styles.redditSocialLink}`}>
                <i className="fa-brands fa-reddit-alien"></i>
                <p>712M</p>
              </div>
            </a>
            <a href="https://www.x.com/">
              <div className={`${styles.socialLink} ${styles.xSocialLink}`} target="_blank">
                <i className="fa-brands fa-x-twitter"></i>
                <p>563M</p>
              </div>
            </a>
          </section>
          {/* Informational Text */}
          <section className={styles.informationalText}>
            <p className={styles.description}>
              Watch movies and TV shows online for free with HiMovies — your go-to platform for streaming and
              downloading the latest content. Although it's only been around for three years, HiMovies has quickly
              become one of the most reliable and best movie streaming sites on the web
            </p>
            <p className={styles.subheading}>Is using HiMovies legal?</p>
            <p className={styles.text}>
              Streaming Free HD Movies on HiMovies is totally legal, it's only illegal if you download and store the
              movies on your device, that's why HiMovies currently does not have a download option.
            </p>
            <p className={styles.subheading}>What is HiMovies</p>
            <p className={styles.text}>
              Launched in 2019, HiMovies aims to provide movies and TV shows for its users to stream movies and series
              online and download them in HD quality without paying any dime. HiMovies has been growing steadily since
              it the very first days of its launch.
            </p>
            <p className={styles.subheading}>Is there a HiMovies app for mobile/ipad/tv?</p>
            <p className={styles.text}>
              To enjoy faster streaming speed, Chromecast built-in, absolutely no ads, and better customer care, you
              should install the HiMovies Android Movies Apk for your Android devices. You can find the HiMovies Android
              apk on this page
            </p>
            <p className={styles.subheading}>Best alternative to HiMovies?</p>
            <p className={styles.text}>
              There are thousands of free online movie streaming sites to be found on the Internet, but only a small
              amount of them is safe and reliable. If you cannot access HiMovies, try some other similar sites such as
              123movies, gomovies, 6movies, and fmovies.
            </p>
            <p className={styles.subheading}>Is HiMovies safe?</p>
            <p className={styles.text}>
              HiMovies is considered as a safe website by its users as the site is clean even after a sweep through its
              html code. And all the ads network are reviewed daily to make sure there will be no harmful ads on the
              site. We recommend you using a VPN to stay anonymous and to get better streaming speed.
            </p>
          </section>
          {/* Review Text */}
          <section className={styles.reviewText}>
            <p className={styles.description}>
              Despite being the new kid on the block, HiMovies has quickly gained massive support from movie enthusiasts
              worldwide, thanks to its standout features. True happiness costs nothing — and neither does HiMovies. Read
              our review to see why it might be time to stop paying for N*tflix and start streaming here instead.
            </p>
            <p className={styles.subheading}>Device Compatibility</p>
            <p className={styles.text}>
              As HiMovies is mobile friendly and Chromecast supported, you can stream its free movies and TV shows on
              your phones, tablets, or even big screen TVs.
            </p>
            <p className={styles.subheading}>No Account or Registration Needed</p>
            <p className={styles.text}>
              You don't need a signup or registration to enjoy free movies and TV shows at HiMovies. All you need is
              stable Internet, and a device to watch.
            </p>
            <p className={styles.subheading}>Fast Updates</p>
            <p className={styles.text}>
              HiMovies is among the fastest streaming sites to update the latest releases. New titles are uploaded on a
              daily basis to make sure your source of entertainment will never end.
            </p>
            <p className={styles.subheading}>Streaming Experience</p>
            <p className={styles.text}>
              The streaming is as smooth as it is on paid streaming services. Loading speed is fast, seamless streaming
              is on point, ads are minimal, don't they sound too good to be true?
            </p>
            <p className={styles.subheading}>Resolution</p>
            <p className={styles.text}>
              HiMovies offers the best resolution available. Most of its contents are in HD quality, however, expect CAM
              quality for the newly-released movies in theaters and SD quality for the oldies.
            </p>
            <p className={styles.subheading}>Safety</p>
            <p className={styles.text}>
              As stated above, HiMovies is a safe and reliable site to stream movies online as long as you take
              precautions. Use a VPN and AdBlock extension before accessing the site for your ultimate safety.
            </p>
            <p className={styles.subheading}>Ads and Popups</p>
            <p className={styles.text}>
              HiMovies is not bombarded with ads. You will have to sit through one or two ads before the video starts
              but as ads is their only source of income, it's unavoidable. Popups can be avoided with an AdBlock
              extension.
            </p>
            <p className={styles.subheading}>Customer Service</p>
            <p className={styles.text}>
              Unlike most free streaming sites, HiMovies listens to its users. The site is open to connect with on
              Facebook, Twitter, Telegram, email, etc. If you have any issue, simply shoot them a message. Or if
              streaming links are broken or your movie of interest is not available, make a request and they will have
              it fixed within a day.
            </p>
            <p className={styles.subheading}>User-Friendly Design</p>
            <p className={styles.text}>
              The site is extremely easy to browse and navigate. If you have a specific name in mind, you can enter its
              title in the search box. If not, you can search by categories or click on "View Full Site" to look for
              something that catches your eye. On the landing page, you can quickly check out the trending titles, the
              latest ones, and even movies and TV shows that are still not released yet.
            </p>
            <p className={styles.subheading}>Extensive Content Library</p>
            <p className={styles.text}>
              HiMovies hosts a huge collection of up to 300,000 movies and TV shows. You can find here the latest
              releases, the goldie oldies, and even the regional gems. New titles are uploaded daily so expect it to get
              only bigger and bigger. Another good thing about HiMovies is that it provides multiple subtitles for our
              convenience. You can turn on English, Spanish, or German subtitle to enjoy the content to the fullest.
            </p>
          </section>
          {/* Go to HiMovies Button */}
          <a href="/movies">
            <button className={styles.viewMovies}>View Movies</button>
          </a>
        </div>
      </main>
    </>
  );
}

export default Home;
