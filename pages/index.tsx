import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap  overflow-y-scroll overflow-x-hidden z-0 
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
    >
      <Header />
      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>
      {/* Experience */}
      <section id="workexperience" className="snap-center">
        <WorkExperience />
      </section>
      {/* Skills */}
      <section id="skills" className="snap-center">
        <Skills />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      {/* Contact Me */}
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      {/* <Link href="#hero"> */}
      <footer className="sticky bottom-5 w-full cursor-pointer">
        <div className="flex items-center justify-center">
          <img
            className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0"
            src="https://scontent-yyz1-1.xx.fbcdn.net/v/t39.30808-6/337227120_3574567802778107_6470771665603914279_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=SZBm9cbRf_cAX_YfUd7&_nc_ht=scontent-yyz1-1.xx&oh=00_AfA_uzFlHRRozHwLif2fisldBLvNBQHj-v2a4sRmfEA2zQ&oe=65B3DD3C"
            alt="Image Not Found"
          />
        </div>
      </footer>
      {/* </Link> */}
    </div>
  );
}
