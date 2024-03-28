import React from "react";
import { Button } from "./button";
import { Download, Send } from "lucide-react";

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";
import DevImg from "../DevImg";
import Badge from "../Badge";
import Socials from "../Socials";
import Link from "next/link";

const Hero = () => {
  return (
    <section className=" py-10 xl:py-24 h-[88vh] xl:pt-23 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className=" flex justify-between gap-x-8">
          <div className=" flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className=" text-sm uppercase font-bold mb-4 text-primary trcking-[4px]">
              Front End Developer
            </div>
            <h1 className="h1 mb-4">Hello, my name is Bapi Mandal</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Brief description with isights into myseif, my technical journey,
              and what I engage in professionally.
            </p>
            <div className=" flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact me <Send size={18} />
                </Button>
              </Link>
                
              <Link href='https://drive.google.com/file/d/1ILBZ89_CrBsR9GIB5RkW6NkuvFBxbRz4/view?usp=sharing'>
              <Button variant="secondary" className="gap-x-2" >
                Download CV <Download size={18} />
              </Button>
              </Link>
              
            </div>
            <Socials
              containerStyles=" flex gap-x-6 mx-auto xl:mx-0"
              iconStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          <div className="hidden xl:flex relative">
            <div className=" bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
            <DevImg containerStyle=' bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom' imgSrc='/hero/Developer1.svg'/>
          </div>
        </div>
        <div className=" hidden md:flex absolute left-2/4 bottom-42 xl:bottom-10 animate-bounce">
          <RiArrowDownSLine className=" text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
