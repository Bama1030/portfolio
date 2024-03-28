"use client";

import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const Form = () => {
  return (
    <form className=" flex flex-col gap-y-4">
      <div className=" relative flex items-center">
        <Input type="name" id="name" placeholder="Name" />
        <User className=" absolute right-6" size={20} />
      </div>
      <div className=" relative flex items-center">
        <Input type="email" id="email" placeholder="Email" />
        <MailIcon className=" absolute right-6" size={20} />
      </div>
      <div className=" relative flex items-center">
        <Textarea type="name" id="name" placeholder="Name" />
        <User className=" absolute top-4 right-6" size={20} />
          </div>
          <Button className=" flex items-center">Let's Connect</Button>
    </form>
  );
};

export default Form;
