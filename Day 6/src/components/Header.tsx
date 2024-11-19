import { FC, useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";

const Header: FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      drawerRef.current &&
      !drawerRef.current.contains(event.target as Node)
    ) {
      setIsDrawerOpen(false);
    }
  };

  useEffect(() => {
    if (isDrawerOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDrawerOpen]);

  return (
    <nav className="w-full bg-white bg-opacity-50 backdrop-blur fixed top-0 z-50">
      <div className="max-w-screen-2xl mx-auto">
        <div className="px-4 py-3">
          <div className="flex flex-col justify-center md:flex-row md:justify-between">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                {!isDrawerOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                    className="size-7 text-black mr-7 hover:cursor-pointer block md:hidden"
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
                    className="size-7 text-black mr-7 hover:cursor-pointer block md:hidden"
                    onClick={toggleDrawer}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                )}

                <Link
                  to="top"
                  smooth={true}
                  duration={500}
                  className="flex items-center"
                >
                  <h1 className="text-5xl font-passionsConflict cursor-pointer hover:scale-105 transition-all duration-300">
                    H.S
                  </h1>
                </Link>
              </div>
              <div className="block sm:hidden group relative">
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="text-gray-700 hover:text-gray-900 cursor-pointer transition-all duration-300 font-bold"
                >
                  Contact
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </Link>
              </div>
            </div>
            <div className="hidden sm:flex justify-center items-center font-spaceGrotesk">
              <div className="group relative">
                <Link
                  to="hero"
                  smooth={true}
                  duration={500}
                  className="text-gray-700 hover:text-gray-900 cursor-pointer transition-all duration-300 font-bold"
                >
                  About
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </Link>
              </div>
              <div className="group relative ml-7">
                <Link
                  to="techstack"
                  smooth={true}
                  duration={500}
                  className="text-gray-700 hover:text-gray-900 cursor-pointer transition-all duration-300 font-bold"
                >
                  Tech Stack
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </Link>
              </div>
              <div className="group relative ml-7">
                <Link
                  to="portfolio"
                  smooth={true}
                  duration={500}
                  className="text-gray-700 hover:text-gray-900 cursor-pointer transition-all duration-300 font-bold"
                >
                  Portfolio
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </Link>
              </div>
            </div>

            <div className="hidden sm:flex items-center w-full pt-2 md:w-fit md:pt-0 justify-center">
              <div className="group relative">
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="text-gray-700 font-josefin hover:text-gray-900 cursor-pointer transition-all duration-300 font-bold"
                >
                  Contact
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </Link>
              </div>
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
          ref={drawerRef}
          className={`fixed top-14 left-0 w-full h-fit bg-white shadow-lg z-50 transform transition-transform duration-300 ${
            isDrawerOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-4 border-t space-y-4">
            <div className="group relative">
              <Link
                to="hero"
                smooth={true}
                duration={500}
                className="text-gray-700 hover:text-gray-900 cursor-pointer transition-all duration-300 font-bold"
              >
                About
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Link>
            </div>
            <div className="group relative">
              <Link
                to="techstack"
                smooth={true}
                duration={500}
                className="text-gray-700 hover:text-gray-900 cursor-pointer transition-all duration-300 font-bold"
              >
                Tech Stack
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Link>
            </div>
            <div className="group relative">
              <Link
                to="portfolio"
                smooth={true}
                duration={500}
                className="text-gray-700 hover:text-gray-900 cursor-pointer transition-all duration-300 font-bold"
              >
                Portfolio
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
