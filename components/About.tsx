import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "@/typings";
import { urlFor } from "@/sanity";
// src="https://scontent-yyz1-1.xx.fbcdn.net/v/t39.30808-6/337227120_3574567802778107_6470771665603914279_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=SZBm9cbRf_cAX_YfUd7&_nc_ht=scontent-yyz1-1.xx&oh=00_AfA_uzFlHRRozHwLif2fisldBLvNBQHj-v2a4sRmfEA2zQ&oe=65B3DD3C"

type Props = {
  pageInfo: PageInfo;
};

const About = ({ pageInfo }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left md:flex-row h-screen max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 tracking-[20px] text-gray-500 text-2xl">
        ABOUT
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        src={urlFor(pageInfo?.profilePic).url()}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
      ></motion.img>

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span
            className="underline decoration-wavy
 decoration-[#F7ABBA]/50"
          >
            little Background
          </span>{" "}
        </h4>
        <p className="text-sm">{pageInfo?.backgroundInformation}</p>
      </div>
    </motion.div>
  );
};

export default About;
