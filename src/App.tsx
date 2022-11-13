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
  const [handdlerLoadPages, setHanddlerLoadPages] = useState(false);

  // hook to manage the time for thge landing
  useEffect(() => {
    const timeout = setTimeout(() => {
      setHanddlerLoadPages(false);
    }, 10500);

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
            <Route path="/" element={<Navigate to="/Home" />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Experience" element={<Experience />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
