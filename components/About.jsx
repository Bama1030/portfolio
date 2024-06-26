import React from "react";
import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  MailIcon,
  User2,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Bapi Mandal",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+91 7586007479",
  },
  {
    icon: <MailIcon size={20} />,
    text: "bapimandal12340@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 7 Aug, 2000",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "B.Tech in Computer Science and Engineering",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Buniadpur, West Bengal, India, 733121",
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "University of Engineering and Management, Jaipur",
        qualification: "Bachelor in Technology",
        years: "2020 - 2024",
      },
      {
        university: "Banshihari High School(H.S)",
        qualification: "Higher Secondary in Science",
        years: "2017 - 2019",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "ABC Inc.",
        role: "Software Engineer",
        years: "2023 - 2024",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "Front-end Development",
      },
      {
        name: "HTML,CSS,React.js, Next.js,",
      },
      {
        name: "App Development",
      },
      {
        name: "Flutter, React Native",
      },
      {
        name: "Back-end Development",
      },
      {
        name: "Java, JavaScript,Node.js",
      },
      {
        name: "Database",
      },
      {
        name: "SQL, MongoDB, Firebase",
      },
      
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/reactjs.svg",
      },
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/flutter.svg",
      },
      {
        imgPath: "/about/figma.svg",
      },
      {
        imgPath: "/about/notion.svg",
      },
      
      
     
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-14 text-center mx-auto">
          About me
        </h2>
        <div className=" flex flex-col xl:flex-row">
          <div className=" hidden xl:flex flex-1 relative">
            <DevImg
              containerStyle="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/about/developer0.png"
            />
          </div>
          <div className=" flex-1">
            <Tabs defaultValue="personal">
              <TabsList className=" w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className=" w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className=" w-[162px] xl:w-auto"
                  value="qualification"
                >
                  Qualification
                </TabsTrigger>
                <TabsTrigger className=" w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              <div className=" text-lg mt-12 xl:mt-8">
                <TabsContent value="personal">
                  <div className=" text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Currently I am persuing B.Tech final year In CSE.
                    </h3>
                    <p className=" subtitle max-w-xl mx-auto xl:mx-0">
                      I specialized in crafting intutive Website and Android App development 
                      with cutting-edge technology, delivering dynamic and
                      engaging User experiences.
                    </p>
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div className=" flex items-center gap-x-4 mx-auto xl:mx-8" key={index}>
                            <div className="text-primary">{item.icon}</div>
                            <div>{ item.text}</div>
                          </div>
                        )
                      })}
                    </div>
                    <div className=" flex flex-col gap-y-2">
                      <div className="text-primary">Languages Known</div>
                      <div className=" border-b border-border"></div>
                      <div>English, Hindi, Bengali</div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="qualification">
                  
                  <div>
                    <h3 className=" h3 mb-8 text-center xl:text-left">My Awesome Journey</h3>
                    <div className=" grid md:grid-cols-2 gap-y-8">
                      {/* experience  */}
                      {/* <div className=" flex flex-col gap-y-6">
                        <div className=" flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className=" capitalize font-medium">
                            {getData(qualificationData, 'experience').title}
                          </h4>
                        </div>
                        <div className=" flex flex-col gap-y-8">
                          {getData(qualificationData, 'experience').data.map((item, index) => {
                            const { company, role, years } = item;
                            return (
                              <div className=" flex gap-x-2 group" key={index}>
                                <div className=" h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className=" w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] trnsition-all duration-500"></div>
                                </div>
                                <div >
                                  <div className=" font-semibold text-xl leading-none mb-2">{company}</div>
                                  <div className=" text-lg leading-none to-muted-foreground mb-4">{ role}</div>
                                  <div className=" text-base font-medium">{ years}</div>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </div> */}
                      {/* Education */}
                      <div className=" flex flex-col gap-y-6">
                        <div className=" flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className=" capitalize font-medium">
                            {getData(qualificationData, 'education').title}
                          </h4>
                        </div>
                        <div className=" flex flex-col gap-y-8">
                          {getData(qualificationData, 'education').data.map((item, index) => {
                            const { university, qualification, years } = item;
                            return (
                              <div className=" flex gap-x-2 group" key={index}>
                                <div className=" h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className=" w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] trnsition-all duration-500"></div>
                                </div>
                                <div >
                                  <div className=" font-semibold text-xl leading-none mb-2">{university}</div>
                                  <div className=" text-lg leading-none to-muted-foreground mb-4">{ qualification}</div>
                                  <div className=" text-base font-medium">{ years}</div>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="skills">
                  <div className=" text-center xl:text-left">
                    <h3 className="h3 mb-8">What I use Everyday</h3>
                    {/* skills  */}
                    <div className=" mb-10">
                      <h4 className=" text-xl font-semibold mb-2">Skills</h4>
                      <div className=" border-b border-border mb-4"></div>
                      {/* skils  */}
                      <div>
                        {
                          getData(skillData, 'skills').data.map((item, index) => {
                            const { name } = item;
                            return (
                              <div className=" w-2/4 text-center xl:text-left mx-auto xl:mx-0" key={index}>
                                <div>
                                  <h3 className=" text-gray-600 dark:text-gray-400">{name}</h3>
                                </div>
                              </div>
                            )
                          })
                        }
                      </div>
                    </div>
                    {/* tools  */}
                    <div>
                      <h4 className=" text-xl font-semibold mb-2 xl:text-left">Technologies</h4>
                      <div className=" border-b border-border mb-4"></div>
                      <div className=" flex gap-x-8 justify-center xl:justify-start">
                        {getData(skillData, 'tools').data.map((item, index) => {
                          const { imgPath } = item;
                          return (
                            <div key={index}>
                              <Image
                                src={imgPath}
                                width={48}
                                height={48}
                                alt=""
                                priority
                              />
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
