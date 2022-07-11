import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin + '/react-auth0/dashboard'}
      responseType={'id_token token'}
    >
      <BrowserRouter basename="/react-auth0">
        <App />
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
);
