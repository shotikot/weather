import React, { useState } from "react";
import { changeCity } from "../actions/weatherActions";
import { connect } from "react-redux";
import "./styles/ChangeCity.css";

const ChangeCity = props => {
  let [value, setValue] = useState("");
  let [left, setLeft] = useState(-180);
  const onChangeHandler = e => {
    setValue(e.target.value);
  };
  const toggleClick = () => {
    if (left === 0) {
      setLeft(-180);
      if (value.length !== 0) {
        props.changeCity(value);
      }
    } else {
      setLeft(0);
    }
  };
  const enterHandler = e => {
    let keyCode = e.keyCode;
    if (keyCode === 13) {
      props.changeCity(value);
      setValue("");
      setLeft(-180);
    }
  };
  return (
    <div className="input-container" style={{ left: left + "px" }}>
      <input
        type="text"
        value={value}
        onChange={onChangeHandler}
        onKeyDown={enterHandler}
        className="change-input"
        placeholder="City"
      />
      <button className="search-btn" onClick={toggleClick}>
        &nbsp;
      </button>
    </div>
  );
};

export default connect(null, { changeCity })(ChangeCity);
