import logo from "./logo.svg";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import HomePage from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <HomePage />
      </Router>
    </div>
  );
}

export default App;
