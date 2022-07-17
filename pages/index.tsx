import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import styles from "../styles/Home.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faApple,
  faGooglePay,
  faGooglePlay,
} from "@fortawesome/free-brands-svg-icons";

const AppBarButton: React.FC<{
  title: string;
  className?: string;
}> = ({ title, className = "" }) => {
  return <button className={`mx-4 ${className}`}>{title}</button>;
};

const ComponentWithBackgroundImage: React.FC<{
  imagePath: string;
  children: React.ReactNode;
  className?: string;
}> = ({ imagePath, className = "", children }) => {
  return (
    <div className="horizontal-padding-left flex flex-row justify-between items-center">
      {children}
      <Image
        // loader={myLoader}
        src={imagePath}
        alt={imagePath}
        width={800}
        height={590}
        objectFit="fill"
      />
    </div>
  );
};

const ButtonCard: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <button className="primary-background-color rounded-sm px-6 py-1">
      {children}
    </button>
  );
};

const AppleIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
      className="text-red-500"
    >
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  );
};

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Urbane</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      {/* Appbar */}
      <section>
        <div className="horizontal-padding flex flex-row justify-between items-center py-6">
          <div className="primary-text-color text-2xl font-semibold">
            Urbane
          </div>
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
      </section>

      <section>
        <ComponentWithBackgroundImage imagePath="/../public/img-1.png">
          <div className="flex flex-col">
            <div className="primary-text-color text-4xl py-2">Urbane</div>
            <div className="text-4xl py-2">
              Messaging now got the next level
            </div>
            <div className="py-2">
              Best in class live platform for the better customer relation
              managment
            </div>
            <div className="py-2 flex flex-row">
              <ButtonCard>
                <div className="flex flex-row items-center">
                  <FontAwesomeIcon icon={faApple} size={"lg"} />
                  <div className="pl-2">App Store</div>
                </div>
              </ButtonCard>
              <div className="mx-2" />
              <ButtonCard>
                <div className="flex flex-row items-center">
                  <FontAwesomeIcon icon={faGooglePlay} size={"lg"} />
                  <div className="pl-2">Google Play</div>
                </div>
              </ButtonCard>
            </div>
          </div>
        </ComponentWithBackgroundImage>
      </section>
    </Fragment>
  );
};

export default Home;
