import React, { FC } from "react";

interface ReuseableBtnProps {
  colorStyles?: string;
  fontStyles?: string;
  text: string;
  onClick: () => void;
}

const ReuseableBtn: FC<ReuseableBtnProps> = ({
  colorStyles = "bg-white",
  text,
  fontStyles = "text-black",
  onClick,
}) => {
  return (
    <button
      className={`px-10 py-2 rounded ${colorStyles} ${fontStyles} transition-all duration-300 ease-in-out`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ReuseableBtn;
