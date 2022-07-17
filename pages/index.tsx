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
  alignItems: string;
  children: React.ReactNode;
  className?: string;
}> = ({ imagePath, className = "", children, alignItems = "" }) => {
  return (
    <div className="relative w-full" style={{ height: 590 }}>
      {/* background image */}
      <Image src={imagePath} alt={imagePath} layout="fill" objectFit="cover" />

      <div className="z-10 relative horizontal-padding h-full flex items-center">
        {/* child */}
        <div className={`flex flex-col w-full ${alignItems}`}>
          <div className="w-96">{children}</div>
        </div>
      </div>
    </div>
  );
};

const ButtonCard: React.FC<{
  children: React.ReactNode;
  backgroundColor?: string;
}> = ({ children, backgroundColor = "primary-background-color" }) => {
  return (
    <button className={`${backgroundColor} rounded-sm px-6 py-1`}>
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
      <p className="text-center py-1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue
        massa vel nibh interdum suscipit. Aliquam ut mi odio.
      </p>
    </div>
  );
};

const PaddingBetweenSections = () => {
  return <div className="py-8" />;
};

const PlanCard: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div className="bg-white py-6 px-10 rounded-md shadow-lg flex flex-col items-center justify-evenly">
      {children}
    </div>
  );
};

const Starsrating = () => {
  return (
    <div className="flex items-center mb-5">
      <svg
        aria-hidden="true"
        className="w-5 h-5 text-yellow-400"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>First star</title>
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
      <svg
        aria-hidden="true"
        className="w-5 h-5 text-yellow-400"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Second star</title>
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
      <svg
        aria-hidden="true"
        className="w-5 h-5 text-yellow-400"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Third star</title>
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
      <svg
        aria-hidden="true"
        className="w-5 h-5 text-yellow-400"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Fourth star</title>
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
      <svg
        aria-hidden="true"
        className="w-5 h-5 text-gray-300 dark:text-gray-500"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Fifth star</title>
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
    </div>
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
        <ComponentWithBackgroundImage
          imagePath="/../public/img-1_cleanup.png"
          alignItems="items-start"
        >
          <div className="flex flex-col">
            <div className="primary-text-color text-4xl py-2">Urbane</div>
            <div className="text-4xl py-2">
              Messaging now got the next level
            </div>
            <p className="py-2">
              Best in class live platform for the better customer relation
              managment
            </p>
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

      <PaddingBetweenSections />

      <section>
        <ComponentWithBackgroundImage
          imagePath="/../public/img-2_cleanup.png"
          alignItems="items-end"
        >
          <div className="text-white">
            <div className="text-lg py-2">Why you need our pixel</div>
            <div className="text-2xl py-2">
              Unmached perfromace in highend Android range
            </div>
            <p className="py-2">
              Just kidding you have to pay every month or every year to get all
              the benifits we mentioned every where. Everything comes at a cost.
            </p>
            <div className="py-2">
              <ButtonCard>Buy Now</ButtonCard>
            </div>
          </div>
        </ComponentWithBackgroundImage>
      </section>

      <section>
        <div className="horizontal-padding flex flex-row justify-between items-center">
          <div className="flex flex-col w-96">
            <div className="py-2 text-2xl">
              Real time updates and activity demographics
            </div>
            <p className="py-2">{`I don't knpw what to type here, so lets fill some random text here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue
        massa vel nibh interdum suscipit. Aliquam ut mi odio.`}</p>
          </div>
          <div className="px-2"></div>
          <div>
            <Image
              src={"/../public/img-3.png"}
              alt={"/../public/img-3.png"}
              height={725}
              width={525}
              objectFit="contain"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="horizontal-padding bg-gray-100 py-8 flex flex-row justify-between">
          <div className="flex flex-col justify-center w-96">
            <div className="py-2">Pricing</div>
            <div className="text-2xl py-2">
              Pick the right pricing plan for your needs
            </div>
            <p className="py-2">
              {
                "We have very fair pricing policy that would benefit you and us at the same time. Get the free plan & if you need moew -pay"
              }
            </p>
            <div className="flex flex-row py-2">
              <div>Have something big?</div>
              <div className="primary-text-color px-1">Contact us</div>
            </div>
          </div>
          <div className="px-2"></div>
          <div className="flex flex-row">
            <PlanCard>
              <div className="py-2 text-xl">Free Plan</div>
              <div className="pt-2 pb-4 text-3xl">Free</div>
              <div className="py-1">First basic feature</div>
              <div className="py-1">Second feature goes here</div>
              <div className="py-1">Any other third feature</div>
              <div className="py-2">
                <ButtonCard>Get Plan</ButtonCard>
              </div>
            </PlanCard>
            <div className="px-4"></div>
            <PlanCard>
              <div className="py-2 text-xl">Starter Plan</div>
              <div className="py-2 pb-4 text-3xl">$29.99</div>
              <div className="py-1">First premium feature</div>
              <div className="py-1">Second premium feature</div>
              <div className="py-1">Third premium feature</div>
              <div className="py-2">
                <ButtonCard>Buy Now</ButtonCard>
              </div>
            </PlanCard>
          </div>
        </div>
      </section>

      <PaddingBetweenSections />

      <section>
        <div className="horizontal-padding flex flex-col justify-center items-center text-center">
          <div className="py-2">
            <Image
              src={"/../public/img-4.png"}
              alt={"/../public/img-4.jpg"}
              height={100}
              width={100}
              objectFit="contain"
              className="rounded-full"
            />
          </div>
          <p className="py-2">
            Going to use some lorem here. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nunc congue massa vel nibh interdum
            suscipit. Aliquam ut mi odio. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nunc congue massa vel nibh interdum
            suscipit. Aliquam ut mi odio.
          </p>
          <div className="py-2 flex flex-col">
            <div> - Alison Burgers</div>
            <div>CEO Marga Holdings</div>
          </div>
          <div className="py-2">
            <Starsrating />
          </div>
        </div>
      </section>

      <section>
      <ComponentWithBackgroundImage
          imagePath="/../public/img-5_cleanup.png"
          alignItems="items-start"
        >
           <div className="flex flex-col justify-center w-96">
            <div className="text-2xl py-2">
              Urbane Messaging now got the next level
            </div>
            <p className="py-2">
              {
                "Just get code and sit tight. you'll withness its power and performace in lead conversion. Powerful and productive technology. Experience, then belive."
              }
            </p>
            <div className="py-2">
              <ButtonCard>Know More</ButtonCard>
            </div>
          </div>
        </ComponentWithBackgroundImage>
        {/* <div className="horizontal-padding bg-gray-100 py-8 flex flex-row justify-between">
         
          <div className="px-2"></div>
          <div className="flex flex-row">
            <Image
              src={"/../public/img-5.png"}
              alt={"/../public/img-5.png"}
              height={725}
              width={525}
              objectFit="contain"
            />
          </div>
        </div> */}
      </section>

      <PaddingBetweenSections />

      <section>
        <div className="horizontal-padding flex flex-col items-center text-center">
          <div className="py-2 text-3xl">
            Subscribe now and get lifetime premium access.
          </div>
          <p className="py-2">
            Just kidding you have to pay every month or every year to get all
            the benifits we mentioned every where. Everything comes at a cost.
          </p>
          <div className="py-2">
            <input className="bg-gray-100 px-6 py-1" type="text" />
            <button className="primary-background-color rounded-r-lg px-6 py-1">
              Subscibe
            </button>
          </div>
        </div>
      </section>

      <PaddingBetweenSections />

      <section>
        <ComponentWithBackgroundImage
          imagePath="/../public/img-6_cleanup.png"
          alignItems="items-start"
        >
          <div className="text-white flex flex-col items-center text-center">
            <div className="text-3xl py-2 font-semibold">Download App</div>
            <p className="py-2">
              Engane with app and Entertain yourself with its cool features and
              use free messenger to interact with friends.
            </p>
            <div className="py-2 pt-4 flex flex-row">
              <div className="pt-1">
                <Starsrating />
              </div>
              <div className="pl-1">(349)</div>
            </div>
            <div className="flex flex-row">
              <ButtonCard backgroundColor="bg-black">
                <div className="flex flex-row items-center">
                  <FontAwesomeIcon icon={faApple} className="text-4xl" />
                  <div className="flex flex-col items-start justify-around text-start pl-4">
                    <div className="text-xs object-scale-down w-24">
                      Download on the
                    </div>
                    <div className="text-lg object-scale-down w-24">
                      App Store
                    </div>
                  </div>
                </div>
              </ButtonCard>
              <div className="px-3"></div>
              <ButtonCard backgroundColor="bg-black">
                <div className="flex flex-row items-center">
                  <FontAwesomeIcon icon={faGooglePlay} className="text-4xl" />
                  <div className="flex flex-col items-start justify-around text-start pl-4">
                    <div className="text-xs object-scale-down w-24">
                      Get it on
                    </div>
                    <div className="text-lg object-scale-down w-24">
                      Google Play
                    </div>
                  </div>
                </div>
              </ButtonCard>
            </div>
          </div>
        </ComponentWithBackgroundImage>
      </section>

      <PaddingBetweenSections />

      <section>
        <div className="horizontal-padding flex flex-row justify-between items-center">
          <div className="w-1/2">
            <div className="py-2">
              <div className="primary-background-color text-2xl font-bold inline px-2">
                R
              </div>
            </div>
            <p className="py-2">
              Going to use some lorem here. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Nunc congue massa vel nibh interdum
              suscipit. Aliquam ut mi odio. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Nunc congue massa vel nibh interdum
              suscipit. Aliquam ut mi odio.
            </p>
            <div className="py-2">© 2022</div>
          </div>

          <div className="px-4"></div>

          <div className="w-1/2 grid grid-cols-2 gap-x-5 gap-y-5 font-medium xl:pl-48 lg:pl-24 md:pl-12 p-8">
            <button className="text-start">About Us</button>
            <button className="text-start">Privacy Policy</button>
            <button className="text-start">Product Details</button>
            <button className="text-start">User Agreement</button>
            <button className="text-start">Pricing</button>
            <button className="text-start">Contact</button>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
