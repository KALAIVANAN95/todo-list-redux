import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../store/actions/item";
import '../App.css'
const TextInput = () => {
  const [item, setItem] = useState("");

  const dispatch = useDispatch();

  const addItemToStore = () => {
    //console.log("disspatching");
    dispatch(addItem(item));
    console.log(dispatch);
    setItem('')
  };
  return (
    <div className="form">
      <input
        type="text"
        placeholder="Add new item"
        name="item"
        value={item}
        onChange={(event) => setItem(event.target.value)}
      />
      <button onClick={addItemToStore}><span>Add</span></button>
    </div>
  );
};

export default TextInput;
