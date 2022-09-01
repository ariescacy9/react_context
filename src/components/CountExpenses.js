import React, { useContext } from "react";
import ListContext from "../context/UseContext";

export default function CountExpenses (){

  const { list } = useContext(ListContext);
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += Number(list[i]);
    console.log(sum);
  }
  return <div> Gasto mensual: {sum}</div>;
}
