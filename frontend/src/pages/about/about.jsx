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
      <h1>TARANGA</h1>
      <div className="aboutDetails">
        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
        molestiae velit libero iste magnam reprehenderit nulla exercitationem
        culpa voluptas, soluta impedit quaerat non maxime minima possimus
        tempora sequi ipsam. Quibusdam!
          </p>
      <div className="logo"></div>
      </div>
      
    </section>
  );
}
