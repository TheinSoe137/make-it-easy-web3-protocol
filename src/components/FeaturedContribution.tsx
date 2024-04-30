"use client";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";
import Link from "next/link";
const featuredWebinars = [
  {
    title: "Decentralized Identity Standards",
    description:
      "Contributed to the development of decentralized identity standards, promoting privacy and security in online interactions.",
    slug: "decentralized-identity-standards",
    isFeatured: true,
  },
  {
    title: "Interoperability Solutions",
    description:
      "Designed and implemented interoperability solutions to facilitate seamless communication between diverse blockchain networks.",
    slug: "interoperability-solutions",
    isFeatured: true,
  },
  {
    title: "Smart Contract Auditing Tools",
    description:
      "Developed smart contract auditing tools to enhance security and reliability in decentralized applications (dApps).",
    slug: "smart-contract-auditing-tools",
    isFeatured: true,
  },
  {
    title: "Web 3 Developer Resources",
    description:
      "Created and curated resources to support developers in building decentralized applications (dApps) on Web 3 platforms.",
    slug: "web3-developer-resources",
    isFeatured: false,
  },
  {
    title: "Community Governance Frameworks",
    description:
      "Established community governance frameworks to foster inclusivity and transparency in decentralized organizations.",
    slug: "community-governance-frameworks",
    isFeatured: false,
  },
  {
    title: "Blockchain Education Initiatives",
    description:
      "Initiated educational programs to increase awareness and understanding of blockchain technology among diverse audiences.",
    slug: "blockchain-education-initiatives",
    isFeatured: false,
  },
];
function FeaturedContribution() {
  return (
    <div className="py-12 bg-gray-900 overflow-hidden ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED CONTRIBUTIONS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Making The Web 3 Space Better
          </p>
        </div>

        <div className="mt-10">
          <HoverEffect
            items={featuredWebinars.map((webinar) => ({
              title: webinar.title,
              description: webinar.description,
              link: "/",
            }))}
          />
        </div>
        <div className="mt-10 text-center">
          <Link
            href={"/"}
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All Contributions
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FeaturedContribution;
