import { FC } from "react";

const Header: FC = () => {
  return (
    <nav className="w-full border-b border-1 ">
      <div className="max-w-screen-xl mx-auto">
        <div className="px-4 py-3">
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-bold cursor-pointer">Cactus</h1>

            <button className="bg-red-600 text-white px-8 py-2.5 text-center text-sm shadow-lg font-semibold rounded-[4px] hover:bg-red-700 transition-colors duration-300">
              TRY IT OUT
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
