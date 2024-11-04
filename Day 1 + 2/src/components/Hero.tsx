import { FC } from "react";
import Lottie from "lottie-react";
import cactusAnimation from "../assets/cactus.json";

const Hero: FC = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-4">
      <div className="flex flex-col sm:flex-row p-4 sm:p-0 justify-between items-center ">
        <p className="text-4xl font-bold mr-8  sm:ml-20 ">
          Slow and Steady Growth <br />
          <span className="text-amber-500">With minimum effort.</span>
        </p>
        <Lottie
          animationData={cactusAnimation}
          autoPlay
          loop={false}
          className="h-96 sm:mr-16"
        />
      </div>
    </div>
  );
};

export default Hero;
