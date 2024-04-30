"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/moving-border";
import Link from "next/link";

function page() {
  return (
    <div className=" h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div
        className=" flex flex-col items-center
     justify-center relative overflow-hidden mx-auto py-10 md:py-0"
      >
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Get In Touch
        </h1>

        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Welcome,We would love to hear from you! Simply fill out the form
          below, and a member of our dedicated team will reach out to you
          shortly. Please provide your email address so we can get back to you.
        </p>
        <input
          type="text"
          placeholder="Put your email "
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 text-neutral-500"
        />
        <div className="mt-4">
          <Link href={"#"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              SENT
            </Button>
          </Link>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}

export default page;
