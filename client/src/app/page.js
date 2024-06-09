"use client";

import React, { useState, useEffect, useContext } from "react";
import HeroSection from "../components/layout/HeroSection";
import { DefaultSeo } from "next-seo";
import { LatestMovieReviews } from "../components/LatestMovieReviews";
import AuthContext from "../utils/AuthContext";

export default function Home() {
  const { contract } = useContext(AuthContext);
  const [latestReviews, setLatestReviews] = useState(null);
  const [latestReviewsLoading, setLatestReviewsLoading] = useState(true);

  const [latestSort, setLatestSort] = useState("movie");

  useEffect(() => {
    const getlatestreviews = async (latestSort = "movie") => {
      try {
        if (latestSort === "movie") {
          await contract
            .getLatestMovieReviews()
            .then((res) => {
              setLatestReviews(res);
              setLatestReviewsLoading(false);
            })
            .catch((err) => {
              console.error("error while getlatestreviews for movie", err);
            });
        } else if (latestSort === "tv") {
          await contract
            .getLatestSeriesReviews()
            .then((res) => {
              setLatestReviews(res);
              setLatestReviewsLoading(false);
            })
            .catch((err) => {
              console.error("error while getlatestreviews for series", err);
            });
        }
      } catch (err) {
        console.error("error while getlatestreviews movie,series", err);
      }
    };
    if (contract) {
      getlatestreviews(latestSort);
    }
  }, [contract, latestSort]);

  return (
    <>
      <DefaultSeo
        title="ETH NFT Auction"
        description="ETH NFT Auction is a decentralized movie rating platform."
        openGraph={{
          type: "website",
          url: "",
          title: "ETH NFT Auction",
          description:
            "ETH NFT Auction is a decentralized movie rating platform.",
          site_name: "ETH NFT Auction",
        }}
      />
      <HeroSection />

      <LatestMovieReviews
        latestReviews={latestReviews}
        latestSort={latestSort}
        setLatestSort={setLatestSort}
        latestReviewsLoading={latestReviewsLoading}
        setLatestReviewsLoading={setLatestReviewsLoading}
      />
    </>
  );
}
