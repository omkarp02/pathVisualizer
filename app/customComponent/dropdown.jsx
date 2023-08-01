import React from "react";
import styles from './index.module.css'

const Dropdown = ({placeholder, options, handleChange, value}) => {
  return (
    <select className={` ${styles.dropdown}`} value={value} aria-label="Default select example" onChange={handleChange}>
      {options.map((item)=> <option key={item.value} value={item.value}>{item.label}</option>)}
    </select>
  );
};

export default Dropdown;
