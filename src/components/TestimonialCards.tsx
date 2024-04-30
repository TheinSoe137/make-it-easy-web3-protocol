"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
const serviceTestimonials = [
  {
    quote:
      "Using Make It Easy Web 3 Protocol has been a game-changer for our NFT project. The NFT Launchpad made it incredibly simple to mint and manage our collections, and the support for Multichain ensured broad accessibility.",
    name: "Alice Johnson",
    title: "CEO, Artify Studios",
  },
  {
    quote:
      "The Staking Protocol provided by Make It Easy Web 3 Protocol has been instrumental in maximizing our crypto holdings. The platform's reliability and ease of use have made staking a seamless experience for our team.",
    name: "Michael Lee",
    title: "Blockchain Developer, CryptoFund",
  },
  {
    quote:
      "Make It Easy Web 3 Protocol's Decentralized Exchange (DEX) offers a refreshing alternative to traditional exchanges. The low fees, high liquidity, and user-friendly interface have made trading cryptocurrencies a breeze.",
    name: "Sophia Rodriguez",
    title: "Crypto Trader, DeFi Enthusiast",
  },
  {
    quote:
      "I've been blown away by the NFT Marketplace provided by Make It Easy Web 3 Protocol. As an artist, it's given me a platform to showcase and sell my digital art globally. It's easy to use and has a vibrant community.",
    name: "David Smith",
    title: "Digital Artist, Founder of PixelCanvas",
  },
  {
    quote:
      "The Cross-Chain Bridging service offered by Make It Easy Web 3 Protocol has simplified asset transfers between different blockchain networks. It's fast, secure, and has expanded our access to new opportunities in the blockchain space.",
    name: "Emily Chen",
    title: "Blockchain Analyst, TechCorp",
  },
];

function TestimonialCards() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center  overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10 dark:text-white">
        Hear From Our Customer: Voices of success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={serviceTestimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default TestimonialCards;
