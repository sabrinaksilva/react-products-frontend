import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { App } from "./app/App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

const GlobalApp = () => {
  return (
    // <ThemeProvider theme={AppTheme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    // </ThemeProvider>
  );
};

root.render(<GlobalApp />);

reportWebVitals();
