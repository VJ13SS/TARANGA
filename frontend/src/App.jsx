import { Route, Routes, useNavigate } from "react-router-dom";
import Hero from "./pages/hero/hero";
import Navbar from "./components/navbar/navbar";
import "./App.css";
import About from "./pages/about/about";
import Events from "./pages/events/events";
import EventInfo from "./pages/eventInfo/eventInfo";
import Footer from "./components/footer/footer";
import { useEffect, useState } from "react";
import Loader from "./components/loader/loader";
import Sidebar from "./components/sidebar/sidebar";
export default function App() {
  const navigate = useNavigate();
  const [displayLoader, setDisplayLoader] = useState(true);
  const delay = window.innerWidth > 700 ? 8000 :4000
  useEffect(() => {
    navigate("/");
    setTimeout(() => {
      setDisplayLoader(false);
    }, delay);
  }, []);

  {
    /*<div className="app">
          <Loader />
        </div> */
  }

  if (displayLoader) {
    return (
      <div className="app">
        {window.innerWidth > 700 ?
        <video autoPlay loop muted playsInline className="backVideo">
          <source src="./eventVideo.mp4" type="video/mp4" />
        </video> :
        <Loader />}
      </div>
    );
  }

  return (
    <div className="app">
      <div className="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="samples">
        <Navbar />
        
        <Sidebar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />}></Route>
          <Route path="eventInfo" element={<EventInfo />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}
