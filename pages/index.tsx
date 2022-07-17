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
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";

import {
  faMobileScreen,
  faCloud,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";
import {
  faMessage,
  faEnvelope,
  faNewspaper,
} from "@fortawesome/free-regular-svg-icons";

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

const LoraLispumCard: React.FC<{
  icon: IconDefinition;
  rotate?: number;
}> = ({ icon, rotate }) => {
  return (
    <div className="flex flex-col items-center ">
      <div className="py-1">
        <FontAwesomeIcon icon={icon} className="text-7xl" rotate={rotate} />
      </div>
      <div className="text-center text-xl py-1">Lorem Ipsum</div>
      <div className="text-center py-1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue
        massa vel nibh interdum suscipit. Aliquam ut mi odio.
      </div>
    </div>
  );
};

const PaddingBetweenSections = () => {
  return <div className="py-8" />;
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
        <div className="horizontal-padding flex flex-row justify-between items-center">
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

      <PaddingBetweenSections />

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

      <PaddingBetweenSections />

      <section>
        <div className="text-3xl text-center">
          Our software features custom designed for startups to excel.
        </div>
        <div className="pt-14 px-16 grid grid-cols-3 gap-x-24 gap-y-10 justify-center items-center">
          <LoraLispumCard icon={faMessage} />
          <LoraLispumCard icon={faEnvelope} />
          <LoraLispumCard icon={faMobileScreen} />
          <LoraLispumCard icon={faNewspaper} />
          <LoraLispumCard icon={faCloud} />
          <LoraLispumCard icon={faSliders} />
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
