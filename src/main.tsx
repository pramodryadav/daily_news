import React from 'react'
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './index.css';
import theme from "./theme/index.ts";
import App from './App.tsx'
import './index.css';
import { store } from './Redux/store.ts'
import { Provider } from 'react-redux'
const clientID = import.meta.env.VITE_CLIENT_ID;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <GoogleOAuthProvider clientId={clientID}>
    <React.StrictMode>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Provider store={store}>


            <App />
          </Provider>

        </ThemeProvider>
      </StyledEngineProvider>
    </React.StrictMode>
  </GoogleOAuthProvider>,
)
