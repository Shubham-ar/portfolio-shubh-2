import React from "react";
import { motion } from "framer-motion";
import { Experience } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article
      className="flex flex-col drop-shadow-xl rounded-3xl items-center 
    space-y-0 flex-shrink-0 w-72 md:w-[600px] xl:w-[700px]
    snap-center bg-[#FFFFFF] bg-gradient-to-tr from-white to-[#2C6975]/20  p-5 md:p-10 hover:opacity-100 opacity-80
    cursor-pointer transition-opacity duration-200"
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
        className="md:invisible xl:visible md:h-0 w-28 h-28 md:w-0 rounded-full xl:w-[150px] xl:h-[150px] mb-2 object-cover object-center"
        src={urlFor(experience?.companyImage).url()}
        alt="Image Not Found"
      ></motion.img>

      <div className="w-full px-0 md:px-10">
        <div className=" md:flex md:justify-between items-center">
          <div>
            <h4 className="text-lg md:text-3xl font-light text-black">
              {experience?.jobTitle}
            </h4>
            <p className="font-bold text-md md:text-2xl  mt-1 text-lightGreen">
              {experience?.company}
            </p>
            <div className="flex space-x-2 my-2">
              {experience?.technologies.map((technology) => (
                <img
                  key={technology._id}
                  className="h-10 w-10 rounded-full object-cover"
                  src={urlFor(technology?.image).url()}
                  alt=""
                />
              ))}
            </div>
          </div>
          <motion.img
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="invisible md:visible xl:invisible xl:h-0 xl:w-0 h-0 w-0 md:h-28 md:w-28  rounded-full mb-0 object-cover object-center"
            src={urlFor(experience?.companyImage).url()}
            alt=""
          />
        </div>
        <p className="uppercase py-2 md:py-5 text-gray-500 text-sm md:text-lg">
          {new Date(experience?.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience?.dateEnded).toDateString()}
        </p>
      </div>
      <ul
        className=" px-0 md:px-10 list-disc text-black space-y-2 md:space ml-5 text-lg h-96 pr-5 pl-5 overflow-y-scroll
        scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-[#2C6975]/80
        "
      >
        {experience?.points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </article>
  );
};

export default ExperienceCard;
