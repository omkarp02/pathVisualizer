import Image from "next/image";
import React, { useRef, useState } from "react";

const WeightButton = ({
  value,
  handleChange,
  options,
  img,
  width,
  height,
  name,
  text,
}) => {
  const [show, setShow] = useState(false);

  const getLabel = () => {
    const index = options.findIndex(e => e.value === value)
    if(index !== -1) {
      return options[index].label
    }
    return ''
  }

  return (
    <div
      className="weightContainer mx-1"
      onMouseOver={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <button className="weightButton">
        <div className="position-relative">
          {img ? (
            <Image
              src={img}
              width={width ?? 25}
              height={height ?? 25}
              alt="Picture of the author"
            />
          ) : (
            ""
          )}
          {name === "weight" ? <span className="weightspan">{value}</span> : ""}
          {name === 'speed' ? 
            <>
              <span className={'speedvalue'}>{getLabel()}</span>
            </>
            : ''
          }
        </div>
      </button>
      <div className={`weightSelect ${show ? "increaseHeight" : ""}`}>
        <div className="weightList" style={{ height: "15px" }}></div>
        {options.map((e) => (
          <div
            key={e.value}
            className="weightList"
            onClick={() => {
              handleChange(e.value);
              setShow(false);
            }}
            style={{fontSize: name === 'speed' ? '10px' : '16px',}}
          >
            <span>{e.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeightButton;
