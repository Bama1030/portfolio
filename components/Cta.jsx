import Link from "next/link";
import { Button } from "./ui/button";

const Cta = () => {
  return (
    <section className=" py-24 bg-tertiary dark:bg-secondary/40">
      <div className=" container mx-auto">
        <div className=" flex flex-col items-center">
          <h2 className="h2 flex-col text-center mb-8">
            Prepared to turn your ideas into reality? I'm always here to help..
          </h2>
          <Link href="/contact">
            <Button>Contact Me</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
