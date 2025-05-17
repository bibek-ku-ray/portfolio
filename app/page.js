import Image from "next/image";
import Description from "./component/Description";
import About from "./component/About";
import Project from "./component/Project";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center p-4">
      <div className="text-white max-w-3xl w-full p-8 md:p-12 rounded-lg ">
        <Description />
        <About />
        <Project />
      </div>
    </div>
  );
}
