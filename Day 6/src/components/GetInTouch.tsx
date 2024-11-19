import { FC } from "react";

const GetInTouch: FC = () => {
  return (
    <div className="w-full bg-slate-800 py-16">
      <div className="mx-auto max-w-screen-2xl w-11/12 md:w-8/12">
        <div className="flex flex-col items-center gap-y-4 bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl md:text-4xl text-white text-center font-josefin">
            Let's get in touch
          </h1>
          <input
            className="w-full md:w-2/3 lg:w-1/2 py-2 px-4 rounded bg-white bg-opacity-20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Your Name..."
          />
          <input
            className="w-full md:w-2/3 lg:w-1/2 py-2 px-4 rounded bg-white bg-opacity-20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            placeholder="Your Email..."
          />
          <textarea
            className="w-full md:w-2/3 lg:w-1/2 pt-2 pb-8 px-4 rounded bg-white bg-opacity-20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Message..."
          ></textarea>
          <button
            className="w-full md:w-2/3 lg:w-1/2 py-2 px-4 mt-4 rounded bg-slate-600 border-slate-600 border border-1 text-white font-semibold hover:bg-gray-700 hover:border-white transition-colors duration-300"
            type="submit"
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
