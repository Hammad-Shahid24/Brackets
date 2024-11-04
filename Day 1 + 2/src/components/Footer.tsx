import { FC } from "react";

const Footer: FC = () => {
  return (
    <div className="w-full bg-gray-800 text-gray-400 ">
      <div className="max-w-screen-xl mx-auto">
        <div className="px-4 py-3 ">
          <div className="flex justify-between items-center ">
            <a
              href="https://github.com/Hammad-Shahid24/Brackets"
              target="_blank"
              className="block cursor-pointer hover:text-white transition-all duration-300"
            >
              @HammadAtBrackets
            </a>
            <a
              href="https://github.com/Hammad-Shahid24/Cactus"
              target="_blank"
              className="block  cursor-pointer hover:text-white transition-all duration-300"
            >
              Github Repo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
