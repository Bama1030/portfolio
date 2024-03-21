import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import ProjectCard from "./ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";

const projectData = [
  {
    image: "/work/1.png",
    category: "React js",
    name: "O Shop",
    description: "Improved responsiveness and user satisfaction on an e-commerce website by engineering a cutting-edge web app using MongoDB, Expressjs, Node and Reactjs.",
    link: "https://github.com/Bama1030/my-o-shop",
    github: "",
  },
  {
    image: "/work/4.png",
    category: "Next js",
    name: "AI Interviewer",
    description: "AI Interviewer is a web application that uses Nextjs, Express, Node, Reactjs, artificial intelligence and natural language processing to simulate a real-life interview experience for job applicants.",
    link: "https://github.com/Bama1030/Interviewer/tree/master",
    github: "",
  },
  {
    image: "/work/3.png",
    category: "Next js",
    name: "Imagenify",
    description: "write here project description",
    link: "https://github.com/Bama1030/imaginify",
    github: "",
  },
  {
    image: "/work/2.png",
    category: "React Native",
    name: "Foodi App",
    description: "I have developed a high-performance app using React Native, JavaScript and Firebase, resulting in a 40% reduction in app loading time.",
    link: "https://github.com/Bama1030/Delivery_App_using_react_native-",
    github: "",
  },
  
 
];

const Work = () => {
  return (
    <section className=" relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        <div className=" max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className=" subtitle mb-8">
          Explore my diverse portfolio featuring projects like O-Shop, an e-commerce platform, Ai Interviewer for seamless interviews, and a Food Delivery app for convenient dining. Additionally, discover Imigenify, a cutting-edge web app. Each project showcases innovation, usability, and attention to detail, reflecting my expertise in software development.
          </p>
          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className=" h-[400px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
