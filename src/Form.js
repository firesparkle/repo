import React, { useState } from "react";
import { userActions } from "./Store/user";
import { useDispatch } from "react-redux";

const Form = (props) => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [mobile, setMobile] = useState("");

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const cityChangeHandler = (event) => {
    setCity(event.target.value);
  };

  const phoneChangeHandler = (event) => {
    setMobile(event.target.value);
  };

  const saveHandler = () => {
    const user = { name: name, city: city, mobile: mobile };
    props.closePanel();

    dispatch(userActions.addUser(user));
  };

  const closeHandler = () => {
    setName("");
    setCity("");
    setMobile("");
    props.closePanel();
  };

  return (
    <div>
      <label htmlFor="name">name</label>
      <input
        type="text"
        id="name"
        onChange={nameChangeHandler}
        value={name}
      ></input>
      <label htmlFor="city">city</label>
      <input
        type="text"
        id="city"
        onChange={cityChangeHandler}
        value={city}
      ></input>
      <label htmlFor="mobile">mobilenumber</label>
      <input
        type="text"
        id="mobilenumber"
        onChange={phoneChangeHandler}
        value={mobile}
      ></input>
      <button onClick={saveHandler}>save</button>
      <button onClick={closeHandler}>close</button>
    </div>
  );
};

export default Form;
