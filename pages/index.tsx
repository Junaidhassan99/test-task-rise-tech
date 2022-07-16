import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import styles from "../styles/Home.module.css";

const AppBarButton: React.FC<{
  title: string;
  className?: string;
}> = ({ title, className = "" }) => {
  return <button className={`mx-4 ${className}`}>{title}</button>;
};

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Urbane</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* Appbar */}
      <div className="horizontal-padding flex flex-row justify-between items-center py-6">
        <div className="primary-text-color text-2xl font-semibold">Urbane</div>
        <div className="flex flex-row">
          <AppBarButton title="Home" />
          <AppBarButton title="Services" />
          <AppBarButton title="Reviews" />
          <AppBarButton title="Pricing" />
          <AppBarButton
            title="Download App"
            className="primary-background-color rounded-md px-2 py-1"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
