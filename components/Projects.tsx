import React from "react";
import { motion } from "framer-motion";
type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row  max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        PROJECTS
      </h3>

      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x
      snap-mandatory z-20  scrollbar-thin
       scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
      >
        {projects.map((project, i) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              src="https://scontent-yyz1-1.xx.fbcdn.net/v/t39.30808-6/337227120_3574567802778107_6470771665603914279_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=SZBm9cbRf_cAX_YfUd7&_nc_ht=scontent-yyz1-1.xx&oh=00_AfA_uzFlHRRozHwLif2fisldBLvNBQHj-v2a4sRmfEA2zQ&oe=65B3DD3C"
              alt="Image Not Found"
              className="w-[300px] h-[300px]"
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {i + 1} of {projects.length}:
                </span>
                NETFLIX Clone
              </h4>

              <p className="text-lg text-center md:text-left ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
                cum iusto quas iure eos sunt, quaerat magni temporibus pariatur
                laboriosam atque! Ab sed quod libero natus accusamus iusto unde
                exercitationem animi fugit quia quaerat repellendus ut fuga,
                iure nemo magnam vitae, saepe accusantium sit est quis minus
                sequi harum commodi?
              </p>
            </div>
          </motion.div>
        ))}
        
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[300px] -skew-y-12"></div>
    </motion.div>
  );
};

export default Projects;
