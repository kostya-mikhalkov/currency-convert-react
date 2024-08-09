import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchCurrencies, setCurrencies } from "../../currencySlice/currencySlice";
import { useHttp } from "../../utils/api";
import { useState } from "react";

import CurrencyConverter from "../CurrencyConverter/CurrencyConverter";


function App() {
  const [state, setState] = useState();
  const dispatch = useDispatch();
  const{currency} = useSelector(state => state.currency)
  const {request} = useHttp();
  useEffect(() => {
    request('USD')
      .then(data =>{ 
        setState(data)
        dispatch(setCurrencies(data.conversion_rates))
      })
  }, [])
  useEffect(() => {
    if (state && state.conversion_rates) {
      console.log(state.conversion_rates);
      console.log(currency)
    }

  }, [state])

  return (
    <CurrencyConverter />
  );
}

export default App;
