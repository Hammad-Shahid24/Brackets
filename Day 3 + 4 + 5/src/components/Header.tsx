import { FC, useState } from "react";
import HeaderIcon from "../assets/header-logo.svg";
import searchIcon from "../assets/searchIcon.svg";

const Header: FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <nav className="w-full bg-white border-b border-1 hover:shadow-lg transition-shadow duration-300 fixed top-0 z-50 md:top-auto md:relative">
      <div className="max-w-screen-2xl mx-auto">
        <div className="px-4 py-3">
          <div className="flex flex-col justify-center md:flex-row md:justify-between">
            <div className="flex items-center md:gap-x-4">
              {!isDrawerOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  className="size-7 text-black   mr-7 hover:cursor-pointer block md:hidden"
                  onClick={toggleDrawer}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="size-7 text-black   mr-7 hover:cursor-pointer block md:hidden"
                  onClick={toggleDrawer}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              )}

              <img
                className="h-10 mr-8 cursor-pointer"
                src={HeaderIcon}
                alt="header logo"
              />
              <div className="hidden md:flex bg-gray-50 border pl-4 pr-5 rounded-full items-center mt-6 md:mt-0 focus-within:border-pink-500 focus-within:bg-white selection:bg-white active:bg-white outline-none transition-colors duration-300">
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="what are you looking for ?"
                  className="px-4 py-2 w-full md:w-72 lg:w-80 outline-none bg-gray-50 focus:bg-white"
                />
                <button className="bg-pink-500 p-2 rounded-full hover:bg-pink-600 transition-colors duration-300">
                  <img src={searchIcon} alt="search icon" />
                </button>
              </div>
            </div>
            <div className="flex md:hidden items-center justify-center">
              <div className="flex bg-gray-50 border pl-4 pr-5 rounded-full w-full items-center mt-2 md:mt-0 focus-within:border-pink-500 focus-within:bg-white selection:bg-white active:bg-white outline-none transition-colors duration-300">
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="what are you looking for ?"
                  className="px-4 py-2 w-full md:w-72 lg:w-80 outline-none bg-gray-50 focus:bg-white"
                />
                <button className="bg-pink-500 p-2 rounded-full hover:bg-pink-600 transition-colors duration-300">
                  <img src={searchIcon} alt="search icon" />
                </button>
              </div>
            </div>

            <div className="flex items-center w-full pt-2 md:w-fit md:pt-0 justify-center">
              <div className="hidden xl:flex items-center gap-x-5 mr-8">
                <select className="text-gray-700 hover:text-gray-900 bg-transparent font-semibold cursor-pointer transition-all duration-300 outline-none">
                  <option value="categories">Categories</option>
                  <option value="explore">Explore</option>
                  <option value="trending">Trending</option>
                </select>
                <select className="text-gray-700 hover:text-gray-900 font-semibold cursor-pointer transition-all duration-300 outline-none px-0">
                  <option value="hire">Hire a Designer</option>
                  <option value="freelancers">Freelancers</option>
                  <option value="agencies">Agencies</option>
                </select>
                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900 font-semibold cursor-pointer transition-all duration-300"
                >
                  Find Jobs
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900 font-semibold cursor-pointer transition-all duration-300"
                >
                  Blog
                </a>
              </div>
              <button className="text-gray-700 hover:text-gray-900 cursor-pointer transition-all duration-300 font-bold">
                Sign up
              </button>
              <button className="text-white bg-gray-800 rounded-full py-2.5 px-4 font-bold text-sm ml-8 hover:bg-gray-700 transition-all duration-300">
                Log in
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`fixed top-16 bottom-0 left-0 right-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isDrawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        } z-40`}
        onClick={toggleDrawer}
      >
        <div
          className={`fixed top-14 left-0 w-full h-fit bg-white shadow-lg z-50 transform transition-transform duration-300 ${
            isDrawerOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-4 border border-t space-y-4">
            <select className=" block bg-white text-black text-lg ml-7 hover:text-gray-900 font-semibold cursor-pointer transition-all duration-300 outline-none">
              <option value="explore">Explore</option>
              <option value="categories">Categories</option>
              <option value="trending">Trending</option>
            </select>
            <select className=" block bg-white text-black text-lg ml-7 hover:text-gray-900 font-semibold cursor-pointer transieion-all duration-300 outline-none px-0">
              <option value="hire">Hire a Designer</option>
              <option value="freelancers">Freelancers</option>
              <option value="agencies">Agencies</option>
            </select>
            <a
              href="#"
              className="pl-8  block text-black text-lg  hover:text-gray-900 font-semibold cursor-pointer transition-all duration-300"
            >
              Find Jobs
            </a>
            <a
              href="#"
              className="pl-8 block text-gblack text-lg hover:text-gray-900 font-semibold cursor-pointer transition-all duration-300"
            >
              Blog
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
