import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
// App.js
import GiveFeedback from "./components/givefeedback";
import ViewReviews from "./components/viewReviews";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <h1>🎬 Movie Feedback App</h1>
        <nav className="nav">
          <Link to="/feedback" className="main">Give Feedback</Link>
          <Link to="/reviews" className="main">View Reviews</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Navigate to="/feedback" />} />
          <Route path="/feedback" element={<GiveFeedback />} />
          <Route path="/reviews" element={<ViewReviews/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;