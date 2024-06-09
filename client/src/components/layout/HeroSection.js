import React from "react";
import Image from "next/image";
import nftIMG from "../../asset/nft.png";

const HeroSection = () => {
  return (
    <>
      <section className="my-6 pb-6">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl dark:text-white">
              The place where art and Ethereum meet!
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-400 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Discover NFT art
            </p>
            <a
              href="##TrendingNFTS"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-gray-300 rounded-lg focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Explore Now
            </a>
          </div>
          <div className="hidden lg:col-span-5 lg:flex lg:justify-center">
            <div className="flex justify-center">
              <Image
                src={nftIMG}
                width={300}
                height={450}
                className="rounded-t-md"
                alt="nft-img"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
