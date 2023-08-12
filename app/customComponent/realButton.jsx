import React from "react";
import styles from './index.module.css'

const RealButton = ({onClick}) => {
  return (
    <div className={`${styles.realButton} mx-2`} onClick={onClick} ontouchstart="">
    </div>
  );
};

export default RealButton;
