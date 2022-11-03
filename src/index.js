import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./components/app";
import ServicesApi from 'services-api';
import serviceApi from "services-api";

const root = ReactDOM.createRoot(document.getElementById('root'));

const  services = new ServicesApi()

serviceApi

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

