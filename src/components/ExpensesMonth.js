import React, { useContext } from "react";
import ListContext from "../context/UseContext";

export default function ExpensesMonth (){

  const context = useContext(ListContext);
  
  return (
    <ul>
      {context.spend.map ((gasto, index) =>( <li key = {index}>{gasto}</li>))}
    </ul>
  );
}
