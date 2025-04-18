import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { I18nProvider } from "./context/i18n-context.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <I18nProvider>
    <Router>
      <App />
    </Router>
  </I18nProvider>
);
