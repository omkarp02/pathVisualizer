import React from "react";

const Speedometer = () => {
  var speed = 0;
  var prevSpeed = 0;
  var currentScale = 1;

  function increaseSpeed() {
    if (speed < 180) {
      speed = speed + 10;
      addClass();
      currentScale = currentScale + 1;
      changeActive();
      changeText();
    }
  }

  function decreaseSpeed() {
    if (speed > 0) {
      speed = speed - 10;
      addClass();
      changeActive();
      currentScale = currentScale - 1;
      changeText();
    }
  }

  function addClass() {
    let newClass = "speed-" + speed;
    let prevClass = "speed-" + prevSpeed;
    let el = document.getElementsByClassName("arrow-wrapper")[0];
    if(!el) return
    if (el.classList.contains(prevClass)) {
      el.classList.remove(prevClass);
      el.classList.add(newClass);
    }
    prevSpeed = speed;
  }

  function changeActive() {
    let tempClass = "speedometer-scale-" + currentScale;
    let el = document.getElementsByClassName(tempClass)[0];
    if(!el) return
    el.classList.toggle("active");
  }

  function changeText() {
    let el = document.getElementsByClassName("km")[0];
    if(!el) return
    el.innerText = speed;
  }

  return (
    <>
      <div className="speedometer-container">
        <div className="speedometer-text">
          <div className="static">Speed</div>
          <div className="dynamic">
            <span className="km">0</span>
            <span className="unit">KMPH</span>
          </div>
        </div>
        <div className="center-point"></div>
        <div className="speedometer-center-hide"></div>
        <div className="speedometer-bottom-hide"></div>
        <div className="arrow-container">
          <div className="arrow-wrapper speed-0">
            <div className="arrow"></div>
          </div>
        </div>
        <div className="speedometer-scale speedometer-scale-1 active"></div>
        <div className="speedometer-scale speedometer-scale-2"></div>
        <div className="speedometer-scale speedometer-scale-3"></div>
        <div className="speedometer-scale speedometer-scale-4"></div>
        <div className="speedometer-scale speedometer-scale-5"></div>
        <div className="speedometer-scale speedometer-scale-6"></div>
        <div className="speedometer-scale speedometer-scale-7"></div>
        <div className="speedometer-scale speedometer-scale-8"></div>
        <div className="speedometer-scale speedometer-scale-9"></div>
        <div className="speedometer-scale speedometer-scale-10"></div>
        <div className="speedometer-scale speedometer-scale-11"></div>
        <div className="speedometer-scale speedometer-scale-12"></div>
        <div className="speedometer-scale speedometer-scale-13"></div>
        <div className="speedometer-scale speedometer-scale-14"></div>
        <div className="speedometer-scale speedometer-scale-15"></div>
        <div className="speedometer-scale speedometer-scale-16"></div>
        <div className="speedometer-scale speedometer-scale-17"></div>
        <div className="speedometer-scale speedometer-scale-18"></div>
        <div className="speedometer-scale speedometer-scale-19"></div>
      </div>
      <div className="accelerate-container">
        <button className="increase" onclick={increaseSpeed()}>
          Increase Speed
        </button>
        <button className="decrease" onclick={decreaseSpeed()}>
          Decrease Speed
        </button>
      </div>
    </>
  );
};

export default Speedometer;
