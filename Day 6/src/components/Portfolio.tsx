import { FC } from "react";
import ProjectTemplate1 from "./ProjectTemplate1";
import ProjectTemplate2 from "./ProjectTemplate2";

const Portfolio: FC = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-0 sm:mt-20 p-4 ">
      <h2 className="text-2xl sm:text-4xl mb-8 sm:mb-0 font-spaceGrotesk text-center font-semibold">
        Portfolio
      </h2>
      <div className="flex flex-col gap-16 items-center mt-0 sm:mt-14 sm:mb-14 justify-evenly ">
        <ProjectTemplate1 />
        <ProjectTemplate2 />
        <ProjectTemplate1 />
      </div>
    </div>
  );
};

export default Portfolio;
