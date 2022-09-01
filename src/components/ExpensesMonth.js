import React, { useContext } from "react";
import ListContext from "../context/UseContext";

export default function ExpensesMonth (){

  const { list } = useContext(ListContext);
  
  return (
    <ul>
      {list.map ((gasto, index) =>( <li key = {index}>{gasto}</li>))}
    </ul>
  );
}
