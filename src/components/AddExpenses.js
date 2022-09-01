
import React, { useContext, useState } from "react";
import ListContext from "../context/UseContext";

export default function AddExpenses() {

  const { addList } = useContext(ListContext);
  const [newItem, setNewItem] = useState("");

  function submit(e) {
    e.preventDefault ();
    addList(newItem);
    setNewItem('');
  }  
  return (
    <form onSubmit = {(e) => submit(e)}>
      <input 
        type = "number"
        id = "spend" 
        placeholder="ingrese gastos"
        value={newItem}
        onChange = {(e)=> setNewItem(e.target.value)}
      />
        
      <button type="Submit"> Agregar gasto </button>
  </form>
  );
}

