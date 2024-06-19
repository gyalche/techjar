import React, { PropsWithChildren } from "react";
import styles from "../styles/page.module.css";

const HomePageWrapper = ({ children }: PropsWithChildren) => {
  return <div className={styles.home_page_wrapper}>{children}</div>;
};

export default HomePageWrapper;
