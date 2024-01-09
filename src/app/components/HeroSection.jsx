'use client';
import Image from 'next/image';
import React from 'react';
import AnimatedText from './AnimatedText';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="lg:py-16 ">
      <div className="grid grid-cols-1 sm:grid-cols-12 ">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center w-full sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r  from-primary-600 to-secondary-500">
              Hello, I am
            </span>
            <br></br>
            <AnimatedText />
          </h1>
          <p className="text-gray text-base  sm:text-lg mb-6 lg:text-xl">
            Expert in React.js and Next.js, I craft dynamic and user-centric web
            experiences, blending creativity with technical precision.
          </p>
          <div className="flex items-center flex-col sm:flex-row  gap-4">
            <Link
              href="#contact"
              className="px-6 py-3 w-full sm:w-fit rounded-full text-white bg-gradient-to-br from-primary-600 to-secondary-500 hover:element-to-rotate gradient  "
            >
              Hire Me
            </Link>

            <a
              href="/HemantResumeFrontendJan2024.pdf"
              download="Hemant_Resume_Frontend_Jan_2024.pdf"
              className="p-0.5 w-full sm:w-fit rounded-full text-white bg-gradient-to-br from-primary-600 to-secondary-500 hover:element-to-rotate gradient"
            >
              <span className="block bg-bgs hover:bg-slate-850 rounded-full px-[22px] py-[10px]">
                Download CV
              </span>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-bgp flex items-center justify-center  relative  w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]  xl:w-[500px] xl:h-[500px] ">
            <Image
              src="/images/hero-image.png"
              alt="hero-image"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
