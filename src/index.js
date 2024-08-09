import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';
import { Provider } from 'react-redux';
import store from './store/store';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


export const request = async (currency, method, body = null, headers = {
  'Content-Type': 'application/json',
}) => {
  try {
    const req = await fetch(`https://v6.exchangerate-api.com/v6/6aa0610586124845bd8e7391/latest/${currency}`, { method, body, headers });
    if (!req.ok) {
      throw new Error(`HTTP error! status: ${req.status}`);
    }
    const resp = await req.json();
    return resp;
  } catch (e) {
    throw new Error(e.message);
  }
}

request('RUB')
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
