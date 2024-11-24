import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { App } from "./app/App";
import { FilterProvider } from "./context/products/ProductsFilterContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

const GlobalApp = () => {
  return (
    <React.StrictMode>
      <FilterProvider>
        <App />
      </FilterProvider>
    </React.StrictMode>
  );
};

root.render(<GlobalApp />);

reportWebVitals();
