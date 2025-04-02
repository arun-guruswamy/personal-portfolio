import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Check for redirect path from 404.html
const redirectPath = sessionStorage.redirect;
if (redirectPath) {
  // Clear the stored path
  delete sessionStorage.redirect;

  // Get the basename (e.g., /personal-portfolio)
  // Assuming it's the first segment of the current path after the domain
  const basename = '/' + window.location.pathname.split('/')[1];

  // Construct the full intended path
  const fullPath = basename + redirectPath;

  // Use replaceState to update the URL without reloading
  // This makes React Router pick up the correct path when it initializes
  window.history.replaceState(null, '', fullPath);
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
