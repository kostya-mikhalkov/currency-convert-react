import { useEffect, createContext } from "react";
import { useHttp } from "../../utils/api";
import { useState } from "react";

import CurrencyConverter from "../CurrencyConverter/CurrencyConverter";

export const MyContext = createContext();

function App() {
  const [state, setState] = useState();

  const {request} = useHttp();
  useEffect(() => {
    request('USD')
      .then(data =>{ 
        setState(data)
      })
  }, [request])

  return (
    <MyContext.Provider value={state}>
      <CurrencyConverter />
    </MyContext.Provider>
  );
}

export default App;
