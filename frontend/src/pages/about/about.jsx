import { useContext, useEffect, useState } from "react";
import "./about.css";
import { AppContext } from "../../context/appContext";
import Loader from "../../components/loader/loader";

export default function About() {
  const [displayLoader, setDisplayLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setDisplayLoader(false);
    }, 2000);
  }, []);

  if (displayLoader) {
    return <Loader />;
  }
  return (
    <section className="about">
      <h1><i>TARANGA</i></h1>
      <div className="aboutDetails">
        <div className="logo">
          <img src="/tarangaLogo.jpg" alt="" />
        </div>
        <p>
          <i>
            A tech summit where technology rises, ideas resonate, and the future
            begins to take shape. From circuits to creativity, from signals to
            innovation TARANGA brings together every spark that defines the
            spirit of ECE.
          </i>
        </p>
        
        <span><i>See on JAN 09 • 10 • 11 2026</i></span>
      </div>
    </section>
  );
}
