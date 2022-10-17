import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Questions from "./pages/Questions";
import Score from "./pages/Score";
import ScoreCard from "./pages/ScoreCard";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assessment" element={<Questions />} />
        <Route path="/assessment/score" element={<Score />} />
        <Route path="/assessment/scorecard" element={<ScoreCard />} />
      </Routes>
    </Router>
  );
}

export default App;
