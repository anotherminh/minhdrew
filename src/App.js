import "./App.css";
import { OurStory } from "./components";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OurStory />} />
      </Routes>
    </Router>
  );
}

export default App;
