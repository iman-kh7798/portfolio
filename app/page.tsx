import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { Button } from "flowbite-react";

export default function Home() {
  return (
    <div className="">
      <h1 className="text-gray-primary text-5xl font-bold ">IMAN KHOSRAVI</h1>
      <p className="text-teal-primary">Frontend Developer</p>
      <Button className="bg-gray-primary">
        Get in Touch
        <ArrowRightIcon />
      </Button>
    </div>
  );
}
