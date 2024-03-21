"use client";
import { Blocks, GanttChartSquare, Gem } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const serviceData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Web Design",
    description: " I am specialize in creating visually stunning, user-centric websites that engage and captivate audiences. With a keen eye for aesthetics and a passion for user experience, I craft unique digital experiences that reflect the essence of each brand.",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Web Development",
    description: " Discover my portfolio showcasing innovative web development projects crafted with React, Next.js, HTML, and CSS. With expertise in front-end development, I specialize in creating dynamic and responsive web applications tailored to diverse client needs.",
  },
  {
    icon: <Gem size={70} strokeWidth={0.8} />,
    title: "App Development",
    description: "I worked on multiple projects using Flutter and React Native. Specializing in cross-platform solutions, I create immersive mobile app for Android platforms.I leverage Flutter's and React Native's capabilities to deliver sleek, responsive, and feature-rich mobile apps.",
  },
];

const Service = () => {
  return (
    <section className=" mt-10 xl:mt-10 mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className=" section-title mb-12 xl:mb-24 text-center mx-auto">
          My Services
        </h2>
        <div className=" grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {serviceData.map((item, index) => {
            return (
              <Card
                className=" w-full min-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative"
                key={index}
              >
                <CardHeader className=" text-primary absolute -top-[60px]">
                  <div className=" w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className=" text-center">
                  <CardTitle className=" mb-4">{item.title}</CardTitle>
                  <CardDescription className=" text-lg">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Service;
