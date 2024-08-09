import { useCallback } from "react";
import { useState } from "react";

export const useHttp = () => {
    const [process, setProcess] = useState('waiting');
    const request = useCallback(async (currency, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => {
        setProcess('Loading')
        try {
          const req = await fetch(`https://v6.exchangerate-api.com/v6/6aa0610586124845bd8e7391/latest/${currency}`, { method, body, headers });
          if (!req.ok) {
            setProcess('Error')
            throw new Error(`HTTP error! status: ${req.status}`);
          }
          const resp = await req.json();
          return resp;
        } catch (e) {
            setProcess('Error')
            throw new Error(e.message);
        }
      }, [])
    return {
        request,
        process
    }
}