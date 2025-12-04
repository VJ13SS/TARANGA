import { useContext, useEffect, useState } from "react";
import EventCard from "../../components/eventCard/eventCard";
import "./events.css";
import { Link, Links } from "react-router-dom";
import { AppContext } from "../../context/appContext";
import Loader from "../../components/loader/loader";

export default function Events() {
  const { setEventType } = useContext(AppContext);

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
    <section className="events">
      <h1>Events</h1>
      <div className="eventsPlanned">
        <Link
          to={"/eventInfo"}
          style={{
            textDecoration: "none",
            color: "black",
            animation: "fadeRight 1s linear",
          }}
          onClick={() => setEventType("Pre Events")}
        >
          <EventCard
            title={"Pre Events"}
            description={"Lets Make Online Fun And Entertaining"}
            imgPath={"./PreEventsImg.jpg"}
          />
        </Link>
        <Link
          to={"/eventInfo"}
          style={{
            textDecoration: "none",
            color: "black",
            animation: "fadeLeft 1s linear",
          }}
          onClick={() => setEventType("Major Events")}
        >
          <EventCard
            title={"Major Events"}
            description={"Lets Make Online Fun And Entertaining"}
            imgPath={"./MajorEventsImg.jpg"}
          />
        </Link>
      </div>
    </section>
  );
}
