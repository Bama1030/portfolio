"use client";
import ProjectCard from "@/components/ProjectCard";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import React, { useState } from "react";

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

const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projectData.filter((project) => {
    return category === "all projects"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className=" container mx-auto">
        <h2 className=" section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className=" w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          <div className=" text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
