
import React, { useContext, useState } from "react";
import ListContext from "../context/UseContext";

export default function AddExpenses (){

  const context = useContext(ListContext);
  const { spend } = context;
  const [todoList, setTodoList] = spend;
  const [newItem, setNewItem] = useState("");

  function addList (e) {
    e.preventDefault ();
    setTodoList(newItem);
    setNewItem('');
  }  
  return (
    <form onSubmit = {(e) => addList(e)}>
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

