import React, { useState} from "react";
import ListContext from "../context/UseContext";

const initialSpend = [1200, 500, 230, 100];

export default function ContextProvider({children}) {

  const [spend, setSpend] = useState(initialSpend);
  const [list, setList] = useState([]);

  function addList(newItem) { 
    setList([...list, newItem]);
  }
  const data = { spend, setSpend, list, addList };
  return(
    <ListContext.Provider value={data}>
      {children}
    </ListContext.Provider>
  );
}

