import { FC, useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import personAnimation from "../assets/person-hero.json";
import linkedinAnimation from "../assets/linkedin2.json";
import githubAnimation from "../assets/github.json";
import Typed from "typed.js";

const Hero: FC = () => {
  const typedElement = useRef(null);
  const [linkedinPlaying, setLinkedinPlaying] = useState(false);
  const [githubPlaying, setGithubPlaying] = useState(false);

  useEffect(() => {
    const options = {
      strings: ["Web Designer", "Consultant", "Fullstack Dev"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto mt-24 md:mt-24">
      <div className="flex flex-col sm:flex-row p-4 sm:p-0 justify-between items-center mx-4">
        <div className="w-full sm:w-2/3 text-left ">
          <p className="block text-3xl text-left w-full text-gray-600 font-semibold mt-4 mb-1 rounded">
            <span ref={typedElement}></span>
          </p>
          <p className="text-4xl font-josefin font-bold ">
            HEY, I AM
            <br />
            <span className="text-blue-800">HAMMAD SHAHID</span>
          </p>
          <p className="block text-2xl text-left w-full text-gray-600 font-semibold mt-4 rounded">
            with over 1 year of experience.
          </p>
          <div className="flex space-x-4 mt-3 ">
            <span
              className="inline "
              onMouseEnter={() => setLinkedinPlaying(true)}
              onMouseLeave={() => setLinkedinPlaying(false)}
            >
              <Lottie
                animationData={linkedinAnimation}
                loop={linkedinPlaying}
                autoPlay={linkedinPlaying}
                className="h-20 w-fit cursor-pointer"
              />
            </span>
            <span
              className="inline"
              onMouseEnter={() => setGithubPlaying(true)}
              onMouseLeave={() => setGithubPlaying(false)}
            >
              <Lottie
                animationData={githubAnimation}
                loop={githubPlaying}
                autoPlay={githubPlaying}
                className="h-12 w-fit mt-3.5 cursor-pointer"
              />
            </span>
          </div>
        </div>
        <div className="w-full sm:2/3">
          <Lottie
            animationData={personAnimation}
            loop
            autoPlay
            className="h-96 sm:mr-16"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
