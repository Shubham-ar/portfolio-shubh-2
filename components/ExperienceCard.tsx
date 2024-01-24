import React from "react";
import { motion } from "framer-motion";
type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article
      className="flex flex-col rounded-l items-center 
    space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px]
    snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40
    cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://scontent-yyz1-1.xx.fbcdn.net/v/t39.30808-6/337227120_3574567802778107_6470771665603914279_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=SZBm9cbRf_cAX_YfUd7&_nc_ht=scontent-yyz1-1.xx&oh=00_AfA_uzFlHRRozHwLif2fisldBLvNBQHj-v2a4sRmfEA2zQ&oe=65B3DD3C"
        alt="Image Not Found"
      ></motion.img>

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Software Developer</h4>
        <p className="font-bold text-2xl mt-1">Netflix</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/3/30/React_Logo_SVG.svg"
            alt="Image Not Found"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/3/30/React_Logo_SVG.svg"
            alt="Image Not Found"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/3/30/React_Logo_SVG.svg"
            alt="Image Not Found"
          />
        </div>
        <p className="uppercase py-5 text-gray-300">
          Started Work ... Exded ,,,,
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
