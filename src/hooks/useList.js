import React, { useState} from "react";
import ListContext from "../context/UseContext";

const initialSpend = [1200, 500, 230, 100];

export default function ContextProvider({children}) {

  const [spend, setSpend] = useState(initialSpend)
  const data = { spend, setSpend }
  return(
    <ListContext.Provider value={data}>
      {children}
    </ListContext.Provider>
  );
}

