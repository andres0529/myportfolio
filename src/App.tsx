import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import { useEffect, useState } from "react";
import Landing from "./pages/Landing";

function App() {
  // state variable to switch the pages once the timne end
  const [handdlerLoadPages, setHanddlerLoadPages] = useState(true);

  // hook to manage the time for thge landing
  useEffect(() => {
    const timeout = setTimeout(() => {
      setHanddlerLoadPages(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="App">
      {handdlerLoadPages ? (
        <Landing />
      ) : (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
