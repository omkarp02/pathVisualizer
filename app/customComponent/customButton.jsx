import { useState } from "react";
import styles from "./button.module.css";

const algorithmOptions = [
  { label: "dijkstra", value: "dijkstra" },
  { label: "astar", value: "astar" },
];

const CustomButton = ({
  text,
  customClassname,
  variant,
  border = 0,
  color = "white",
  onClick,
}) => {


  const [show, setShow] = useState(false)

  return (
    <div className={styles.customButtonContainer} >
      <button
        data-content={text}
        onClick={onClick}
        className={`${styles.custombutton}`}
      >
        {text}
      </button>
      <div className={`${show ? "visualizeContainerHeight" : ''} visualizeContainer`}>
        {algorithmOptions.map(e => {
          return <div key={e.value} className="visualizeSelect" >{e.label}</div>
        })}
      </div>
    </div>
  );
};

export default CustomButton;
