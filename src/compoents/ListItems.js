import React from "react";
import {useSelector,useDispatch} from 'react-redux'

import { deleteItem } from "../store/actions/item";

const ListItems = () => {
    //const items=["items1","items2","items3"]

    const items = useSelector((state)=>{
        // console.log(state);
        return state.items
    })

    const dispatch = useDispatch()

    const deleteItemFromStore = (id)=>{
        console.log("deetettt");
        dispatch(deleteItem(id))
    }
  return (
    <div className="items">
      {items.map((item, index) => {
        return (
          <div key={index} >
            <li onClick={()=>deleteItemFromStore(index)}>{item}</li>
            
          </div>


        );
      })}
    </div>
  );
};

export default ListItems;
