import { FC } from "react";
import Lottie from "lottie-react";
import galleryAnimation from "../assets/gallery.json";

const Hero: FC = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-4">
      <div className="flex flex-col sm:flex-row p-4 sm:p-0 justify-between items-center ">
        <p className="text-4xl font-bold mr-8  sm:ml-20 ">
          Inspirational designs, illustrations, and graphic elements
          <br />
          <span className="text-blue-800">
            from the world’s best designers.
          </span>
        </p>
        <Lottie
          animationData={galleryAnimation}
          loop
          autoPlay
          className="h-96 sm:mr-16"
        />
      </div>
    </div>
  );
};

export default Hero;
