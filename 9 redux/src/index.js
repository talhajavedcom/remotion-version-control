// import ReactDOM from "react-dom/client";
// import App from "./App";
// import { StrictMode } from "react";
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
import ReactDOM from "react-dom/client";
import App from "./App";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import store from "./redux/store"; // Import the Redux store

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
