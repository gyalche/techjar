import React from "react";
import styles from "../styles/page.module.css";
import Image from "next/image";
import { breakaway, mifu } from "@/assets/images";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_left}>
        <Image
          src={breakaway}
          alt="breakaway"
          height={80}
          width={350}
          objectFit="contain"
        />
      </div>

      <h1>X</h1>
      <div className={styles.navbar_right}>
        <Image
          src={mifu}
          alt="mifu"
          height={50}
          width={150}
          // objectFit="contain"
          // layout="responsive"
          style={{ filter: "drop-shadow(1px 1px 2px black)" }}
        />
      </div>
    </div>
  );
};

export default Navbar;
