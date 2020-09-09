import React from "react";
import styles from "../../styles/Footer.module.css";

interface FooterProps {
  floatingContent?: React.ReactNode;
}

const Footer: React.FC<FooterProps> = ({ floatingContent }) => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLogoContainer}>
          <img src="/logo.svg" alt="Logo" />
        </div>
        <div className={styles.footerDetails}>
          <div className={styles.footerItem}>
            <div className={styles.footerItemContent}>
              <img src="/icon-location.svg" alt="Location" />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum,
                reiciendis veniam praesentium quos a nisi vel excepturi, odit
                alias voluptatibus cumque aut? Ut molestias illo, perferendis
                cum iste aliquid tempore!
              </p>
            </div>
          </div>
          <div className={styles.footerItem}>
            <div className={styles.footerItemContent}>
              <img src="/icon-phone.svg" alt="Phone" />
              <p>+1-543-123-4567</p>
            </div>
            <div className={styles.footerItemContent}>
              <img src="/icon-email.svg" alt="email" />
              <a className="blue" href="mailto:example@fylo.com">
                example@fylo.com
              </a>
            </div>
          </div>
          <div className={styles.footerItem}>
            <div className={styles.footerItemContent}>
              <a href="#">About us</a>
            </div>
            <div className={styles.footerItemContent}>
              <a href="#">Jobs</a>
            </div>
            <div className={styles.footerItemContent}>
              <a href="#">aress</a>
            </div>
            <div className={styles.footerItemContent}>
              <a href="#">Blog</a>
            </div>
          </div>
          <div className={styles.footerItem}>
            <div className={styles.footerItemContent}>
              <a href="#">Contact Us</a>
            </div>
            <div className={styles.footerItemContent}>
              <a href="#">Terms</a>
            </div>
            <div className={styles.footerItemContent}>
              <a href="#">privacy</a>
            </div>
          </div>
          <div className={styles.footerItem}>
            <div className={styles.mediasContainer}>
              <div className={styles.media}>
                <a>
                  <img src="icon-facebook.svg" alt="facebook" />
                </a>
              </div>
              <div className={styles.media}>
                <a>
                  <img src="icon-twitter.svg" alt="twitter" />
                </a>
              </div>
              <div className={styles.media}>
                <a>
                  <img src="icon-instagram.svg" alt="instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.floatingContainer}>{floatingContent}</div>
    </footer>
  );
};

export default Footer;
