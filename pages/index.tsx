import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import styles from "../styles/Home.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faGooglePlay } from "@fortawesome/free-brands-svg-icons";

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
import AppBarButton from "../components/app-bar-button";
import PaddingBetweenSections from "../components/padding-between-sections";
import ComponentWithBackgroundImage from "../components/component-with-background-image";
import ButtonCard from "../components/button-card";
import LoraLispumCard from "../components/lora-lispum-card";
import PlanCard from "../components/plan-card";
import StarsRating from "../components/stars-rating";

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
          imagePath="/img-1_cleanup.png"
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
          imagePath="/img-2_cleanup.png"
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

      <PaddingBetweenSections />

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
              src={"/img-3.png"}
              alt={"/img-3.png"}
              height={400}
              width={500}
              objectFit="contain"
            />
          </div>
        </div>
      </section>

      <PaddingBetweenSections />

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
              <button className="primary-text-color px-1">Contact us</button>
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
              src={"/img-4.png"}
              alt={"/img-4.png"}
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
            <StarsRating />
          </div>
        </div>
      </section>

      <section>
        <ComponentWithBackgroundImage
          imagePath="/img-5_cleanup.png"
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
          imagePath="/img-6_cleanup.png"
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
                <StarsRating />
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
            <div className="py-2">?? 2022</div>
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
