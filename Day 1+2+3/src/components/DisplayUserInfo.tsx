import React, { FC, useState } from "react";
import ReuseableBtn from "./ReuseableBtn";

interface DisplayUserInfoProps {
  name: string;
  email: string;
  age: number;
  phone: string;
}

const DisplayUserInfo: FC<DisplayUserInfoProps> = (
  props: DisplayUserInfoProps
) => {
  const { name, email, age, phone } = props;

  const [hidden, setHidden] = useState(false);
  const [counter, setCounter] = useState(0);

  const increment = () => {
    if (counter === 10) return;
    setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter === 0) return;
    setCounter(counter - 1);
  };

  const formattedPhone = phone.replace(/(\d{4})(\d+)/, "$1-$2");

  return (
    <div className="w-7/12 ">
      <div className="px-4 py-10 shadow-lg bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg">
        {" "}
        <h1 className="text-4xl font-semibold text-center text-white ">
          User Information
        </h1>
        <div
          className={`${
            hidden ? "invisible" : "flex"
          } justify-center mt-10 w-full`}
        >
          <div className="w-1/2  text-white text-center p-5 rounded-lg">
            <p className="text-xl">Name: {name}</p>
            <p className="text-xl">Email: {email}</p>
            <p className="text-xl">Age: {age}</p>
            <p className="text-xl">Phone: {formattedPhone}</p>
          </div>
        </div>
        <div className="flex space-x-5 justify-center mt-5">
          <span onClick={decrement}>
            <ReuseableBtn
              text="Hide"
              colorStyles="bg-red-600 hover:bg-red-700"
              fontStyles="text-white font-bold"
              onClick={() => setHidden(true)}
            />
          </span>
          <span onClick={increment}>
            <ReuseableBtn
              text="Show"
              colorStyles="bg-green-600 hover:bg-green-700"
              fontStyles="text-white font-bold"
              onClick={() => setHidden(false)}
            />
          </span>
        </div>
        <h1 className="my-4 text-lg text-white text-center">
          Counter: {counter}
        </h1>
      </div>
    </div>
  );
};

export default DisplayUserInfo;
