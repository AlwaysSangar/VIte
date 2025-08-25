import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Skills from "./components/skill";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import "./App.css";

function App() {
  return(
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skill" element={<Skills />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;