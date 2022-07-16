import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import styles from "../styles/Home.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleAlt } from "@fortawesome/free-solid-svg-icons";

// import { FaRocket } from '../public/apple-brands.svg ';

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
                  {/* <Image src="/../public/apple-brands.svg" alt={'oka'} height={30} width={30} /> */}
                  {/* <FontAwesomeIcon icon="fa-brands fa-apple" /> */}
                  <div>App Store</div>
                </div>
              </ButtonCard>
              <div className="mx-2" />
              <ButtonCard>Google Play</ButtonCard>
            </div>
          </div>
        </ComponentWithBackgroundImage>
      </section>
    </Fragment>
  );
};

export default Home;
