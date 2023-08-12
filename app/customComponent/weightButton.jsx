import Image from "next/image";
import React, { useRef, useState } from "react";

const WeightButton = ({value, handleChange, options, img, width, height }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="weightContainer">
      <button
        className="weightButton"
        onClick={() => {
          setShow((prev) => !prev);
        }}
      >
        <div className="position-relative">
          <Image
            src={img}
            width={width ?? 25}
            height={height ?? 25}
            alt="Picture of the author"
          />
          <span className="weightspan">{value}</span>
        </div>
      </button>
      <div className={`weightSelect ${show ? "increaseHeight" : ""}`}>
        <div className="weightList" style={{ height: "15px" }}></div>
        {options.map((e) => (
          <div
            className="weightList"
            onClick={() => {
              handleChange(e.value);
              setShow(false);
            }}
          >
            {e.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeightButton;
