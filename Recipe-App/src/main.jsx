import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { RecipeProvider } from './context/RecipeContext.jsx';
import { ThemeProvider } from './context/ThemeContext'; // ✅ FIXED
import { AuthProvider } from './context/AuthContext';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider>
          <RecipeProvider>
            <App />

          </RecipeProvider>

        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
