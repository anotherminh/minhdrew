import "./App.css";
import { FAQs, Home, OurStory, RSVP, Schedule } from "./components";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<OurStory />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/rsvp" element={<RSVP />} />
      </Routes>
    </Router>
  );
}

export default App;
