import { FC } from "react";

const Message: FC = () => {
  return (
    <div className=" w-full bg-slate-800">
      <div className="mx-auto max-w-screen-2xl w-8/12  py-16">
        <svg
          className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
          viewBox="0 0 24 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
            fill="currentColor"
          ></path>
        </svg>
        <p className="text-center text-white  text-3xl font-bold ">
          "A cactus doesn't live in the desert because it likes the desert;{" "}
          <br />
          it lives there because the desert hasn't killed it yet."
        </p>
        <div className="flex justify-center items-center  mt-6">
          <p className="text-center  text-white font-semibold text-lg ">
            Hope Jahren
          </p>
          <div className="h-8 border-l border-gray-400 mx-4"></div>

          <p className="text-center   text-gray-400 text-lg ">
            American Geochemist
          </p>
        </div>
      </div>
    </div>
  );
};

export default Message;
