import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import axios from 'axios';
import Netflix from './service/netflix';

const httpClient = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: { key: process.env.NETFLIX_APP_API_KEY },
});
const netflix = new Netflix(httpClient);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App netflix={netflix} />
  </React.StrictMode>
);
