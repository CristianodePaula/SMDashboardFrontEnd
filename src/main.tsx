import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './sIndex.scss'
import { DarkModeContextProvider } from "./context/themeMode";
import { AuthContextProvider } from "./context/authContext";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
     <DarkModeContextProvider>
        <AuthContextProvider>
          <App />
       </AuthContextProvider>
     </DarkModeContextProvider>
  </React.StrictMode>,
)
