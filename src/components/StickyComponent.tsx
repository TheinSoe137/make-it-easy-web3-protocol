"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
const serviceContent = [
  {
    title: "NFT Launchpad",
    description:
      "Our NFT Launchpad service empowers creators to effortlessly launch and manage their NFT projects. With intuitive tools for minting, auctioning, and managing NFT collections, creators can bring their digital creations to life and engage with their audience in new and innovative ways.",
  },
  {
    title: "Staking Protocol",
    description:
      "Maximize your crypto holdings with our Staking Protocol service. Whether you're a seasoned investor or new to staking, our platform provides secure and reliable staking services across multiple blockchain networks. Earn rewards for participating in network validation and help secure the blockchain ecosystem.",
  },
  {
    title: "Decentralized Exchange (DEX)",
    description:
      "Trade cryptocurrencies securely and efficiently with our Decentralized Exchange (DEX) service. Our platform offers low fees, high liquidity, and a user-friendly interface, enabling users to trade various digital assets with ease. Experience decentralized finance (DeFi) in its truest form with our DEX.",
  },
  {
    title: "NFT Marketplace",
    description:
      "Explore, buy, and sell NFTs on our decentralized NFT Marketplace. Discover a diverse range of digital collectibles, art, and more, and connect with creators and collectors from around the world. Our marketplace provides a seamless and transparent platform for trading NFTs.",
  },
  {
    title: "Cross-Chain Bridging",
    description:
      "Unlock the full potential of blockchain interoperability with our Cross-Chain Bridging service. Seamlessly transfer assets between different blockchain networks, enabling users to access new opportunities and utilize assets across various ecosystems. Enjoy fast, secure, and efficient cross-chain transactions.",
  },
  {
    title: "Decentralized Identity (DID)",
    description:
      "Take control of your digital identity with our Decentralized Identity (DID) service. Safeguard your personal information and authenticate yourself securely across multiple online platforms. Our DID solutions offer privacy, security, and control over your digital footprint.",
  },
];

function StickyComponent() {
  return (
    <div>
      <StickyScroll content={serviceContent} />
    </div>
  );
}

export default StickyComponent;
