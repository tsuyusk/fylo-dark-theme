import React from "react";
import Head from "next/head";

import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <meta name="keywords" content="storage files productive" />
      </Head>
      <div className={styles.container}>
        <Header />
        <main className={styles.pageContent}>
          <section className={styles.heroContainer}>
            <img
              src="/illustration-intro.png"
              alt="People putting papers in a folder"
            />
            <h1>
              All your files in one secure location, <br /> accessible anywhere.
            </h1>
            <p>
              Fylo stores all your most important files in one secure location.{" "}
              <br />
              Access them wherever you need, share and collaborate with friends
              family, and co-workers
            </p>
            <button className={styles.customButton} type="button">
              Get started
            </button>
            <br />
          </section>
          <section className={styles.goodPoints}>
            <div className={styles.goodPoint}>
              <img src="/icon-access-anywhere.svg" alt="Phone and computer" />
              <strong>Access your files, anywhere</strong>
              <p>
                The ability to use a smartphone, tablet, or computer to access
                your account means your files follow you everywhere.
              </p>
            </div>
            <div className={styles.goodPoint}>
              <img src="/icon-security.svg" alt="Shield" />
              <strong>Security you can trust</strong>
              <p>
                2 factor authentication and user-controlled encryption are just
                a couple of the security features we allow to help secure your
                files.
              </p>
            </div>
            <div className={styles.goodPoint}>
              <img
                src="/icon-collaboration.svg"
                alt="People and a check icon"
              />
              <strong>Real-time collaboration</strong>
              <p>
                Securely share files and folders with friends, family and
                colleagues for live collaboration. No email attachments
                required.
              </p>
            </div>
            <div className={styles.goodPoint}>
              <img src="/icon-any-file.svg" alt="Folder and files" />
              <strong>Store any kind of file</strong>
              <p>
                Whether you're sharing holiday photos or work documents, Fylo
                has you covered allowing for all file types to be securely
                stored and shared
              </p>
            </div>
          </section>
          <section className={styles.stayProductiveContainer}>
            <img src="/illustration-stay-productive.png" alt="People talking" />
            <div className={styles.stayProductiveMessage}>
              <h1>
                Stay productive, <br /> wherever you are
              </h1>
              <p>
                Never let location be an issue when accessing your files, Fylo
                has you covered for all of your file storage needs
              </p>
              <br />
              <p>
                Securely share files and folders with friends, family and
                colleagues for live collaboration. No email attachments
                required.
              </p>
              <br />
              <a href="#">
                See how Fylo works
                <img src="/icon-arrow.svg" alt="Arrow" />
              </a>
            </div>
          </section>
          <section className={styles.testimonialsContainer}>
            <div className={styles.testimonials}>
              <div className={styles.testimonialContainer}>
                <p>
                  Fylo has improved our team productivity by an order of
                  magnitude. Since making the switch our team has become a
                  well-oiled collaboration machine.
                </p>
                <div className={styles.testimonialProfileContainer}>
                  <img src="/profile-1.jpg" alt="Profile" />
                  <div>
                    <strong>Satish Patel</strong>
                    <span>Founder & CEO, Huddle</span>
                  </div>
                </div>
              </div>
              <div className={styles.testimonialContainer}>
                <p>
                  Fylo has improved our team productivity by an order of
                  magnitude. Since making the switch our team has become a
                  well-oiled collaboration machine.
                </p>
                <div className={styles.testimonialProfileContainer}>
                  <img src="/profile-2.jpg" alt="Profile" />
                  <div>
                    <strong>Satish Patel</strong>
                    <span>Founder & CEO, Huddle</span>
                  </div>
                </div>
              </div>
              <div className={styles.testimonialContainer}>
                <p>
                  Fylo has improved our team productivity by an order of
                  magnitude. Since making the switch our team has become a
                  well-oiled collaboration machine.
                </p>
                <div className={styles.testimonialProfileContainer}>
                  <img src="/profile-3.jpg" alt="Profile" />
                  <div>
                    <strong>Satish Patel</strong>
                    <span>Founder & CEO, Huddle</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer
          floatingContent={
            <div className={styles.signUpContainer}>
              <h1>Get early access today</h1>
              <p>
                It only takes a minute to sign up and our free starter tier is
                extremely generous. If you have any questions, our support team
                would be happy to help you.
              </p>
              <div className={styles.inputAndButton}>
                <input placeholder="email@example.com" type="text" />
                <button className={styles.customButton}>
                  Get started for free
                </button>
              </div>
            </div>
          }
        />
      </div>
    </>
  );
};

export default Home;
