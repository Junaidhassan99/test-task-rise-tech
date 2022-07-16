import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Urbane</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* Appbar */}
      <div className="flex flex-row">
        <div>Urbane</div>
        <div>Home</div>
        <div>Services</div>
        <div>Reviews</div>
        <div>Pricing</div>
        <div>Download App</div>
      </div>
    </Fragment>
  );
};

export default Home;
