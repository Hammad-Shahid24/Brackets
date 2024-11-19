import { FC } from "react";
import hiveproof from "../assets/hiveproof.png";

const ProjectTemplate2: FC = () => {
  return (
    <div className="w-full flex flex-col sm:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
      <div className="p-6 sm:p-8">
        <h3 className="text-2xl font-semibold mb-4">
          Ecommerce Solution in UK
        </h3>
        <p className="text-gray-700 mb-4">
          A comprehensive ecommerce solution tailored for the UK market,
          featuring a user-friendly interface and robust backend.
        </p>
      </div>
      <img
        className="w-full sm:w-1/3 h-48 sm:h-auto object-cover"
        src={hiveproof}
        alt="Project 1"
      />
    </div>
  );
};

export default ProjectTemplate2;
