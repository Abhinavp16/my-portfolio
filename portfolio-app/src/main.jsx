const { StrictMode } = React;
const { createRoot } = ReactDOM;

// App is defined globally by App.jsx via Babel script include in index.html
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
