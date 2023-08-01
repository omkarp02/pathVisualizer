import Image from "next/image";
import React from "react";

const WallButton = ({setWeight}) => {
  return (
    <button
      className="weightButton mx-1"
      onClick={() =>
        setWeight((prev) => {
          return { ...prev, flag: false };
        })
      }
    >
      <Image
        src="/wall.svg"
        width={18}
        height={18}
        alt="Picture of the author"
      />
    </button>
  );
};

export default WallButton;
