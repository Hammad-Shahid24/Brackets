import { FC } from "react";
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiGithubBadge,
  DiPostgresql,
  DiMysql,
  DiDocker,
} from "react-icons/di";

const skills = [
  { icon: <DiHtml5 className="text-orange-600 text-6xl lg:text-7xl" /> },
  { icon: <DiCss3 className="text-blue-600 text-6xl lg:text-7xl" /> },
  { icon: <DiJavascript1 className="text-yellow-500 text-6xl lg:text-7xl" /> },
  { icon: <DiReact className="text-blue-500 text-6xl lg:text-7xl" /> },
  { icon: <DiNodejsSmall className="text-green-500 text-6xl lg:text-7xl" /> },
  { icon: <DiMongodb className="text-green-600 text-6xl lg:text-7xl" /> },
  { icon: <DiGithubBadge className="text-gray-600 text-6xl lg:text-7xl" /> },
  { icon: <DiPostgresql className="text-blue-600 text-6xl lg:text-7xl" /> },
  { icon: <DiMysql className="text-blue-600 text-6xl lg:text-7xl" /> },
  { icon: <DiDocker className="text-blue-600 text-6xl lg:text-7xl" /> },
];

const TechStack: FC = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-0 sm:mt-20 px-4 pt-4 ">
      <h2 className="text-2xl sm:text-4xl mb-8 sm:mb-0 font-spaceGrotesk text-center font-semibold">
        My Tech Stack
      </h2>
      <div className="flex flex-col sm:flex-row items-center mt-0 sm:mt-14 sm:mb-14 justify-evenly">
        <div className="flex flex-wrap justify-center gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {skill.icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
