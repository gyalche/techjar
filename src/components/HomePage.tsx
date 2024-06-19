import HomePageWrapper from "@/wrapper/HomePageWrapper";
import React from "react";
import styles from "../styles/page.module.css";
import ApplyNow from "./ApplyNow";


const HomePage = () => {
  return (
    <HomePageWrapper>
      <div className={styles.heading}>
        <h1>
          Become an Influencer For <br></br>Breakaway x Mifu
        </h1>
      </div>
      <div className={styles.description}>
        <p>
          Whether you&apos;re the person with the most likes or followers on
          campus, or a hard-worker looking to build your network and gain
          marketing experience, we want to HEAR from you.
        </p>
        <p>
          Becoming a part of the Breakaway Influencer and Ambassador team is
          pretty simple. Just apply by selecting your preferred market below.
          Complete your application and attach your Instagram handle for a
          chance to be considered!
        </p>
      </div>
      <ApplyNow />
    </HomePageWrapper>
  );
};

export default HomePage;
