import React from "react";
import ReactDOM  from "react-dom/client";
import App from "./App";
import { BrowserRouter } from 'react-router-dom'
import {Auth0Provider} from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Auth0Provider

domain='foodiestar.us.auth0.com'
      clientId='EuUiUVUKB0X3kzQsIVhYgL24ruxlAT3O'
      redirectUri={window.location.origin}

>
    <BrowserRouter>
    <App/>
    </BrowserRouter>

    </Auth0Provider>
)