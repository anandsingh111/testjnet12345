import React from "react";
import Navbar from "./Navbar";
import styles from "../styles/Home.module.css";
import LongFooter from "./LongFooter";
import Image from "next/image";

// type Props = {}

const Layout = (props: any) => {
  return (
    <>
      <Navbar />
      <main className={styles.main}>{props.children}</main>
      <LongFooter />
    </>
  );
};

export default Layout;
